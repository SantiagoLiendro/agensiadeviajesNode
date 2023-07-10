import express from "express";
import { paginaInicio,paginaNosotros,
         paginaTestimoniales,paginaViajes,
         paginaDetalleViaje} 
       from "../controllers/paginasControllers.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router()

router.get('/',paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes',paginaViajes)

router.get('/viajes/:slug',paginaDetalleViaje)


router.get('/testimoniales',paginaTestimoniales)

router.post('/testimoniales',guardarTestimonial)

router.get('/contacto',(req , res ) => { // req - lo que enviamos : req - lo que express
    res.send("Contacto")
})

export default router