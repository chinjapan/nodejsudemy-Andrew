var accounts = [];

function createAccount(account){
    accounts.push(account);
    return account;
}
function getAccount(username){
    var matchedAccount;
    var i=0;

    for (var i =0; i <accounts.length; i++){
        if(accounts[i].username === username){
            matchedAccount = accounts[i];
        }
    }
    return matchedAccount;
}

function deposit (account,amount){
    // only accept number, user typeof
    if (typeof amount ==='number'){
        account.balance += amount;
    }else{
        console.log('deposit is failed. amount is not a number');
    }
    
}

function withdraw(account, amount){
    
    if(typeof amount==='number'){
        account.balance -= amount;    
    }else{
        console.log('withdraw is failed. amount is not a number');
    }
}

function getBalance(account){
    return account.balance;
}

function createBalanceGetter(account){
    return function(){
        return account.balance;
    }
}

var bechin = createAccount({
    username: 'Bechin',
    balance:0
})

deposit(bechin, 120);
withdraw(bechin, 12);

var Bechin2 = getAccount('Bechin');
var getBechinBalance = createBalanceGetter(bechin);

console.log(getBechinBalance());