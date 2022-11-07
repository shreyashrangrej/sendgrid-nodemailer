require('dotenv').config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
})

transporter.sendMail({
    from: "sender@gmail.com",
    to: "receiver@gmail.com",
    subject: "This Email is from SMTP",
    text: "Hey This is SMTP",
    html: "<b>Hey this is SMTP</b>",
}, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});