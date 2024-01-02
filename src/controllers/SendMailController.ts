import { FastifyReply, FastifyRequest } from "fastify";
const nodemailer = require('nodemailer')
require('dotenv').config()

class SendMailController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const transporter = nodemailer.createTransport({
            host:'smtp-mail.outlook.com',
            port:'587',
            secure: false,
            auth: {
                user:process.env.USER_EMAIL,
                pass:process.env.PASSWORD_EMAIL,
            }
        })
        transporter.sendMail({
            from:process.env.USER_EMAIL,
            to:process.env.USER_EMAIL,
            subject:"alo alo",
            html:'<h1> alo quebrada </h1>',
        }).then(() => console.log("Email enviado com sucesso"))
        .catch((err) => console.log(err))
    }
}
export { SendMailController};