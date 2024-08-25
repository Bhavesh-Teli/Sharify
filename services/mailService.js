const nodemailer = require('nodemailer');

module.exports = async ({ from, to, subject, text, html }) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // Use environment variables
            pass: process.env.MAIL_PASSWORD, // Use environment variables
        },
    });

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: `inShare <${from}>`, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html, // html body
        });
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
