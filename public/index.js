// llamamos al express importaciones
const express = require('express');
// llamamo al path para llamar al directorio para que sea publico importaciones
const path = require('path');
// se utiliza un aplicacion para el bakend importaciones
const app = express();
// estamos configurando a express para crear un directorio publico html, java scrip 
app.use(express.static(path.join(__dirname, 'public')));
// se define una ruta para el directorio y se enviara a archivo index.html
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.htmal'));
});
// se especifica el puerto
const PORT = process.env.PORT || 9000;
// abrimos el servidor y lo corremos
app.listen(PORT,()=>{
    console.log('servidor corriendo en http://localhost:${PORT}');
});