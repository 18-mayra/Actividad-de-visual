//Imprtar modulo de express para el servidor/*
const express = require('express');
const app = express();

//Comunicacion al puerto/*
const PORT = 3000;
//Esto sirve para que el sevidor procese todas las peticiones en formato json/*
app.use(express.json());
/*
//Definicion de ruta como peticion
app.get('/api/greet',(req,rest)=>{/*
    //Esta es la respuesta a la peticon 
    rest.json({message: 'Esta es la primer API'});/*
})

//Iniciar servidor/*

app.listen(PORT,() =>{
    console.log('Servidor corriente en http://localhost:$PORT');
})
*/
// metodo GET/*
app.use (express.json());
let estudiantes=[
    // esto es una lista/*
    {id:1,nombre:'Juan Perez'},
    {id:2,nombre:'Monica Gomez'},
    {id:3,nombre:'Jose Ruiz'},
];

// get: obtener todos los estudiantes en una ruta /*
app.get('/estudiantes/:id',(req, res)=> {
    // obtiene la respuesta /*
    res.json(estudiantes);
});

// get: obtener un estudinte por ID es un parametro dinamico/*
app.get('/estudiantes/:id',(req,res)=> {
    const id = parseInt(req.params.id);
    const estudiante= estudiantes.find (e=> e,id===id);
    if (estudiante){
        res.jons(estudiante);
    }else{
        res.status(404).send('Estudiante no encontrado');
    }
 });
 

//metodo POST/*

//POST: crear una ruta para agregar un nuevo estudiante /*
app.post('/estudiantes/:id', (rea,res)=> {
    //estmos creando una variable y la llamamos a llamar/*
    const nuevoEstudiante = {
        // ID es un idebtificador y un parametro dinamico/*
        id:estudiantes.length +1,
        nombre: req.boby.nombre
    };
    // agrgar un nuevo estudiante y lo se agrera en la variable estudiantes/*
    estudiantes.push(nuevoEstudiante);
    // 201 fue creado /*
    res.status(201).jons(nuevoEstudiante);
});

// metodo PUT Sintaxis- actualizar un item existente por ID/*

app.put('/estudiantes/:id', (req,res)=>{
    // estamos asignando una variable que es la ID /*
    const id=parseInt(req.params.id);
    // encuentra el id del estudiante/*
    const estudiante = estudiantes.find(e=>e.id ===id);
    if(estudiante){
        estudiante.nombre = req.body.nombre;
        res.json(estudiante);
    }else{
        res.status(404).send('estudiante, no encontrado');
    }
});

// Delete: eliminar un item por ID 
// estamos eliminando un estudiante por su id 
app.delete('/estudiantes/:id', (req,res) => {
    // parseInt es convertirlo a entero
    const id = parseInt (req.params.id);
    // esta,os buscando al estudiante en el parametro y lo buscamos en el arreglo de los estudiantes
    const index = estudiantes.findIndex(i => i.id ===id);
    if (estudiantes !== -1){
        // estamos eliminando un estudiante con splice 
        estudiantes.splice(index, 1);
        res.send('estudiantes eliminado');
    }else{
        res.status (404).sena('estudiantes no encontrado');
    }
    
});

app.listen(PORT,() =>{
    console.log('Servidor corriente en http://localhost:$PORT');
})
    
