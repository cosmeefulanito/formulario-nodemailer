import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CORREO, 
      pass: process.env.PASSWORD,
    },
  });


  transporter.verify().then( () => {
    console.log("Ready for send emails")
  })