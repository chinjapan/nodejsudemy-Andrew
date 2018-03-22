var crypto = require('crypto-js');
var secretMessage = {
    name: 'bechin',
    secretName: '007'
};
var secretKey ='123abc';

// Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage) , secretKey);
console.log('Encrypted Message: '+ encryptedMessage);

// Decrypt Message
var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var descryotedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8)) ;

console.log(descryotedMessage );
console.log('DescryptedMessage of name is: ' + descryotedMessage.name);