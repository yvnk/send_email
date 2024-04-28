import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();

/**
 * process.env.SMTP_HOST -> refers to host name, example: smtp.gmail.com for gmail
 * process.env.SMTP_PORT -> refer to host port name, by default the value is 587,
 * process.env.SMTP_EMAIL -> sender email
 * process.env.SMTP_PASSWORD -> sender app password (create from google setting app password)
 */

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

/**
 * to: refers to receiver email, can also add multiple emails in list.
 * cc, bcc are optional, but can also add them in object.
 */
const message = {
    from: {
        name: "Name",
        address: process.env.SMTP_EMAIL,
    },
    to: ["xxxx@gmail.com"],
    subject: "Testing",
    text: "Testing email",
    html: "<b>Hello world?</b>",
};

const sendEmail = async (transporter, message) => {
    const info = await transporter.sendMail(message);
    console.log("Message sent: %s", info.messageId);
}

sendEmail(transporter, message);