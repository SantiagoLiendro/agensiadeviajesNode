import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();



//Conectar a la base de datos
db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log(error))


//definir puerto
const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine','pug')

//Obtener el año actual
app.use( (req,res,next)=> {
    const year = new Date()

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes"
    return next()
})

//agregar body Parcer para leer datos del formulario
app.use(express.urlencoded({extended:true}))

//agregar la carpeta publica
app.use(express.static('public'));

//agregar routers
app.use('/',router)



app.listen(port, () => {
    console.log(`El servidor esta funcionando el el puerto ${port}`)
})