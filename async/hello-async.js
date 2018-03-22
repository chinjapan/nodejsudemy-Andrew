
function printIntwoSeconds (message){
    // settimeout 2000
    setTimeout(function(){
        console.log(message);
    },2000);
    //  console to print message var
}

printIntwoSeconds ('Hello async');