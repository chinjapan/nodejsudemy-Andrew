function dowork() {
    // throw error that say 'unable to do work'
    throw new Error('unable  to do work');
}

try {
    // throw new Error('Unable to decrypt to Data');
    dowork();
} catch(e){
    console.log(e.message);
}finally{
    console.log('Finally block executed');
}
console.log('try catch ended');
