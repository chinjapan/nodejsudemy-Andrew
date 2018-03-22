console.log('Starting password-mangager');
var storage = require('node-persist');
var crypto = require('crypto-js');
storage.initSync();

var argv= require('yargs')
    .command('create','Create a new User',function(yargs){
        yargs.options({
            name:{
                demand:true,
                alias:'n',
                description:'User nam (ex:Twitter,facebook)',
                type:'string'
            },
            username:{
                demand:true,
                alias:'u',
                desription:'User username or emal',
                type:'string'
            },
            password:{
                demand:true,
                alias:'p',
                description:'User password',
                type:'string'
            },
            masterPassword: {
                demand:true,
                alias:'m',
                description:'Master password',
                type:'string'
            }
        }).help('help');
    })
    .command('get','Get an existing User',function(yargs){
        yargs.options({
            name:{
                demand:true,
                alias:'n',
                description:'User nam (ex:Twitter,facebook)',
                type:'string'
            },
            masterPassword: {
                demand:true,
                alias:'m',
                description:'Master password',
                type:'string'
            }
        }).help('help')
    })
    .help('help')
    .argv;
    command = argv._[0];
function getUsers(masterPassword){
    // use getitemSync to fetcj Users
    var encryptedUser = storage.getItemSync('Users');
    var Users = [];

    // descrypt
    if(typeof encryptedUser !== 'undefined'){
        var bytes = crypto.AES.decrypt(encryptedUser,masterPassword);
        var Users = JSON.parse(bytes.toString(crypto.enc.Utf8));
    }

    // return Users array[]
    return Users;
}

function saveUsers (Users, masterPassword){
    // encrypt Users
    var encryptedUsers = crypto.AES.encrypt(JSON.stringify(Users),masterPassword);
    
    // setItemSync
    storage.setItemSync('Users',encryptedUsers.toString());

    // return Users
    return Users;
}
// User.name facebook
// User.username user12
// User.password pass123
function createUser(User, masterPassword){
    var Users = getUsers(masterPassword);
    Users.push(User);
    saveUsers(Users,masterPassword);

    return User;
}

function getUser (UserName,masterPassword){
    var Users = getUsers(masterPassword);
    var matchedAcount;
    
    Users.forEach(function(User){
        if(User.name === UserName){
            matchedAcount = User;
        }
    });
    return matchedAcount;
    // iterate over array, return matching User, else underfined
}
if(command==='create'){
   try {
        var createUser = createUser({
            name: argv.name,
            username: argv.username,
            password: argv.password
        },argv.masterPassword);
        console.log('User created');
        console.log(createUser);
   } catch(e){
       console.log('Unable to create account');
   }  
}else if(command ==='get'){
    try{
        var fetchedUser = getUser(argv.name,argv.masterPassword);
        if(typeof fetchedUser ==='undefined'){
            console.log('User not found');
        } else{
            console.log('User found');
            console.log(fetchedUser);
        }
    }catch(e){
        console.log('Unable to fetch account');
    }
}
