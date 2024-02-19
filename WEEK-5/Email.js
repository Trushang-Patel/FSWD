const nodemailer = require("nodemailer");
// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 465,
secure: true,
auth: {
user: "trushangpatel282@gmail.com",
pass: "aqfzngcdkrimhzbu",
},
});
// Define the email content
const emailOptions = {
from: 'trushangpatel282@gmail.com>', // sender address
to: "22it116@charusat.edu.in", // list of receivers
subject: "Hello ✔", // Subject line
text: "Hello world?", // plain text body
html: "<b>Hello world?</b>", // html body
};
// async..await is not allowed in global scope, must use a wrapper
const main=async ()=> {
try {
// Send mail with the defined transport object
const info = await transporter.sendMail(emailOptions);
console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com
// NOTE: You can check your email delivery status and preview at
//https://forwardemail.net/my-account/emails
} catch (error) {
console.error("Error sending email:", error);
}
}
// Call the main function


module.exports = main;