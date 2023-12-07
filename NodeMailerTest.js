"use strict";
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',//SMTP
    port: 587, //587 par défaut
    auth: {
        user: 'estatesymphonyproject.service@gmail.com', //Adresse email d'envoie
        pass: 'EstateS1'
    }
});

var mailOptions = {
    from : 'estatesymphonyproject.service@gmail.com',
    to: 'mica.fournier@hotmail.fr',
    subject: 'Coucou c\'est moi EstateSymphony',
    text: 'C\'était pas facile !'
}

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }else{
        console.log('Email sent : ' + info.response);
    }
})

// module.exports(transporter);

// Error: Invalid login: 535-5.7.8 Username and Password not accepted. Learn more at
// 535 5.7.8  https://support.google.com/mail/?p=BadCredentials fl6-20020a05600c0b8600b004090798d29csm2021787wmb.15 - gsmtp
//     at SMTPConnection._formatError (C:\Users\bedro\OneDrive\Bureau\estateSymphonyProject\node_modules\nodemailer\lib\smtp-connection\index.js:790:19)
//     at SMTPConnection._actionAUTHComplete (C:\Users\bedro\OneDrive\Bureau\estateSymphonyProject\node_modules\nodemailer\lib\smtp-connection\index.js:1564:34)
//     at SMTPConnection.<anonymous> (C:\Users\bedro\OneDrive\Bureau\estateSymphonyProject\node_modules\nodemailer\lib\smtp-connection\index.js:546:26)
//     at SMTPConnection._processResponse (C:\Users\bedro\OneDrive\Bureau\estateSymphonyProject\node_modules\nodemailer\lib\smtp-connection\index.js:969:20)
//     at SMTPConnection._onData (C:\Users\bedro\OneDrive\Bureau\estateSymphonyProject\node_modules\nodemailer\lib\smtp-connection\index.js:755:14)
//     at SMTPConnection._onSocketData (C:\Users\bedro\OneDrive\Bureau\estateSymphonyProject\node_modules\nodemailer\lib\smtp-connection\index.js:193:44)
//     at TLSSocket.emit (node:events:514:28)
//     at addChunk (node:internal/streams/readable:545:12)
//     at readableAddChunkPushByteMode (node:internal/streams/readable:495:3)
//     at Readable.push (node:internal/streams/readable:375:5) {
//   code: 'EAUTH',
//   response: '535-5.7.8 Username and Password not accepted. Learn more at\n' +
//     '535 5.7.8  https://support.google.com/mail/?p=BadCredentials fl6-20020a05600c0b8600b004090798d29csm2021787wmb.15 - gsmtp',
//   responseCode: 535,
//   command: 'AUTH PLAIN'
