var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'sebastianus.bara@gmail.com',
            pass: 'sebastianus.bara@gmail.com',
        },
    });

    var mailOptions = {
        from: 'sebastianus.bara@gmail.com',
        to: toEmail,
        subject: subject,
        text: otpText,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            throw new Error(error);
        } else {
            console.log("Email Sent");
            return true;
        }
    });
}
