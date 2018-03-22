var argv = require('yargs')
    .command('hello','Greets the user',function(yargs){
        yargs.options({
            name:{
                demand: true,
                alias:'n',
                description:'Your firse name goes there',
                type:'string'
            },
            lastname:{
                demand:true,
                alias: 'l',
                description:'your lastname goes here',
                type:'string'
            }
        }).help('help');
    })
    .command('get','get data from database',function(yargs){})
    .help('help')
    .argv;
var command = argv._[0];
console.log(argv);
if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
    console.log("hello " +argv.name + " " + argv.lastname );
}else if(command ==='hello' && typeof argv.name !=='undefined'){
    console.log('hello ' + argv.name + '!');
} else if (command === 'hello'){
    console.log('hello world');
}