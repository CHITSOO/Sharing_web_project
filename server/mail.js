const mailer = require("nodemailer");
const { Hello } = require("./hello_template")
require('dotenv').config();

const getEmailData = (to, AuthCode) => {
    let data = null;

        data = {
            from : "MoonBangGoo",
            to, 
            subject : '인증코드입니다',
            html: Hello(AuthCode)
        }
    return data;

}

const sendEmail = (to, createdAuthCode) => {
    
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    })

    const mail = getEmailData(to, createdAuthCode)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent succenssfully")
        }

        smtpTransport.close()
    })

}

module.exports = { sendEmail }