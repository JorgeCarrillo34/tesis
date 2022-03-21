const Json =  () => {
    const url = document.getElementById("url").value;
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => printCharts(data));
   };

//function Json() {
    //fetch("https://www.datos.gov.co/resource/vv8g-8u9u.json")
    //.then(response => response.json())
    //.then(data => printCharts(data));
//};

function printCharts(repositorio){
    document.body.classList.add('running') //para que aparezca en el front los canvas y cambiar la propiedad en el css
    document.body.classList.remove()
   // console.log(repositorio);
   compareRadialChart(repositorio,'chart1')
}



function compareRadialChart(repositorio, id){  //función para grafico radial
    const data = {  //parametros de data
        labels: ['Copacabana', 'Caldas', 'Itagui','Medellin', 'Rionegro'],
        datasets:[{
            data: [
                repositorio.filter(eachData => eachData.nombre_municipio_curso === 'LA ESTRELLA').length,
                repositorio.filter(eachData => eachData.nombre_municipio_curso === 'CALDAS').length,
                repositorio.filter(eachData => eachData.nombre_municipio_curso === 'ITAGUI').length,
                repositorio.filter(eachData => eachData.nombre_municipio_curso === 'MEDELLIN').length,
                repositorio.filter(eachData => eachData.nombre_municipio_curso === 'BELLO').length
            ],
            borderWidth:1,
            borderColor:styles.color.solids.map(eachColor => eachColor),
            backgroundColor:styles.color.alphas.map(eachColor => eachColor),
        }]
    }

    const options = {   //estilos y opciones del grafico
        scale:{
            gridLines:{ //lineas 
                color: '#444'
            },
            ticks:{ //quitar etiquetas 
                display: false
            }
        },
        legend:{
            position:'right',
            labels:{
                fontColor:'#fff'
            }
        }
    }

    new Chart('chart1',{type: 'polarArea',data, options})
}

//let url = document.getElementById("url").value;

//fetch(url)
///.then(res => res.json())
//})
//https://www.datos.gov.co/resource/gt2j-8ykr.json