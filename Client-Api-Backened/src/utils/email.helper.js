const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
// });
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kendall.zemlak@ethereal.email',
        pass: 'nXsqQBTCV4yTEPJvrX'
    }
});
const sendEmail = async (info) => {
    // send mail with defined transport object
    try {
        let result = await transporter.sendMail(info);
        console.log(result);

        console.log("Message sent: %s", result.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        return result;
    } catch (error) {
        console.log(error);
    }

}





const emailProcessor = (email, pin, type) => {
    console.log(email, pin);
    let info = '';
    switch (type) {
        case "request-new-password":
             info = {
                from: '"SnehalSample Company 👻" <kendall.zemlak@ethereal.email>', // sender address
                to: email, // list of receivers
                subject: "ResetPin for password reset", // Subject line
                text: "Here is your password reset pin " + pin + "it will expire within 1 day", // plain text body
                html: `<b>here is your pin</b>
                <b>${pin}</b>
                <b>it will expire within 1 day</b>
                `, // html body
            }
            sendEmail(info);
            break;

        case "update-password-success" :
             info = {
                from: '"SnehalSample Company 👻" <charlie.klein@ethereal.email>', // sender address
                to: email, // list of receivers
                subject: "Updated Password successfully", // Subject line
                text: "Thanks for updating your password", // plain text body
                html: `<b>your password updation is successful for given ${pin}</b>
                <b>Enjoy!!</b>
                `, // html body
            }
            sendEmail(info);
            break;
        default:
            break;
    }

}
module.exports = emailProcessor;