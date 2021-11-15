//const { default: axios } = require("axios");

let myChart1,myChart2;
var tempe = [], hume = [],espacios = [];
traer_datos1();
dinamico();
function Grafico_humedad(humedad){
    var ctx = document.getElementById('Humedad').getContext('2d');
    if(myChart1){
        myChart1.destroy();
    }
     myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: espacios,
            datasets: [{
                label: 'Humedad (%)',
                data: humedad,//[60, 65, 68, 65, 64, 67],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 0,0, 1)',
                    
                ]
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function Grafico_temperatura(temperatura){
    var ctx2 = document.getElementById('Temperatura').getContext('2d');
    if(myChart2){
        myChart2.destroy();
    }
    myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: espacios,//['', '', '', '', '', ''],
            datasets: [{
                label: 'Temperatura(°c)',
                data: temperatura,//[22,24,25,23,27],
                backgroundColor: [
                    'rgba( 12, 61, 153 , 0.2)',
                    
                ],
                borderColor: [
                    'rgba( 12, 61, 153 ,1)',
                    
                ]
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function dinamico(info){
    traer_datos2();
    Grafico_humedad(hume);
    Grafico_temperatura(tempe);
    document.getElementById("humedadtexto").innerHTML = hume[hume.length-1] + "%";
    document.getElementById("temperaturatexto").innerHTML = tempe[tempe.length-1] + "°";
    setTimeout(dinamico,10000);
}

function traer_datos1(){
    axios({
        method:'GET',
        url:'http://localhost:3000/'
    }).then(res => {
        res.data.forEach(element => {
            tempe.push(element.temp);
            hume.push(element.hum);
            espacios.push('');
        });
    });
}
function traer_datos2(){
    axios({
        method:'GET',
        url:'http://localhost:3000/'
    }).then(res => {
            tempe.push(res.data[Object.keys(res.data)[res.data.length-1]].temp);
            hume.push(res.data[Object.keys(res.data)[res.data.length-1]].hum);
            espacios.push('');
    });
}
// axios.get('http://localhost:3000/')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });

// function nuevos_datos(){ 
// }
// let url = 'http://localhost:3000/';
// fetch(url)
//     .then(response => response.json)
//     .then(datos => console.log(datos))
//     .catch(error => console.log(error))

// const mostrar = (articulos) => {
//     articulos.forEach(element => {
//         console.log(element);
//     });
// }
// (document).ready(function() {
//     ('.nav-item').on('click', function(e){
//         var currentAttrValue = (this).attr('href');
//         // Show/Hide Tabs
//         ('.tab-content ' + currentAttrValue).show().siblings().hide();
//         // Change/remove current tab to active
//         (this).parent('li').addClass('active').siblings().removeClass('active');
//         e.preventDefault();
//     });
// });