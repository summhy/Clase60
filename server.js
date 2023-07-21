import express from "express";
import hbs from "hbs";

//recuperar ruta raiz
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//fin recuperación ruta raiz

//lista de productos
let listado = [{nombre:"rosa",
                  descripcion:"esta es una rosa",
                  link:"/images/flor1.jpeg"}, 
                 {nombre:"clavel",
                  descripcion:"esta es una clavel",
                  link:"/images/flor2.jpeg"},
                 {nombre:"lilium",
                  descripcion:"esta es una lilium",
                  link:"/images/flor3.jpeg"},
                  {nombre:"lilium",
                   descripcion:"esta es una lilium",
                   link:"/images/flor3.jpeg"},
                   {nombre:"lilium",
                    descripcion:"esta es una lilium",
                    link:"/images/flor3.jpeg"},
                    {nombre:"lilium",
                     descripcion:"esta es una lilium",
                     link:"/images/flor3.jpeg"}];

const app = express();
app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname+"/views/parciales");

app.get("/", (req, res)=>{
    res.render("index");     
});
app.get("/productos", (req, res)=>{
    res.render("productos",{listado});
});
app.get("/contacto", (req, res)=>{
    res.render("contacto")
})
app.get("/plano", (req, res)=>{
    res.render("plano")
})

app.get("*", (req, res)=>{
    res.status(404).send("Pagina no existe")
})
app.listen(3000,()=>{console.log("Servicio levantado en puerto 3000")});