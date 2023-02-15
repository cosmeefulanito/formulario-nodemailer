import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

import { transporter } from "./mail.js";

app.post("/api/contact", async(req, res) => {
        try {
            const {nombre, correo, mensaje} =  req.body;
            let info = await transporter.sendMail({
                from: `'Andrés Astorga Dev' <${process.env.CORREO}>`, 
                to: process.env.CORREO, 
                subject: "Formulario de contacto ✔", 
                html:  `Nombre: ${nombre} , Correo: ${correo}, Msj: ${mensaje}` , 
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            
        } catch (error) {
            console.log(error)
        }
    res.status(200).json({msg: 'Correo enviado'})
});

const port = process.env.PORT || 3000;


app.listen(5000, () => console.log(`Server Running ON ${port}`));