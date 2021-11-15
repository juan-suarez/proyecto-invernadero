
const express = require('express');
const cors = require('cors'); 
var mysql = require('mysql');
const { response } = require('express');
var datos = [];


var conexion = mysql.createConnection({
    host:'localhost',
    database:'Invernadero',
    user:'invernadero',
    password:'Ju@nma0816'
});

// conexion.connect(function(error){
//     if(error){
//         throw error;
//     }else{
//         console.log('conexion exitosa');
//     }
// });
function repetitive(){
    conexion.query('SELECT * FROM Datos',function(error,results,fields){
        datos = []
        if(error)
        throw error;   
        results.forEach(element => {
            datos.push(element);
        });
    });
    setTimeout(repetitive,10000);
}
//conexion.end();
const server = express();
server.use(cors());
repetitive();

server.get('/',(req,res)=>{
    res.json(datos);
})
server.post('/',(req,res)=>{
    res.json(datos);
})

server.listen(3000 ,() =>{
    console.log('server on port 3000');
});

