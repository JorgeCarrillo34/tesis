

   const Json1 =  async() => {
    const request = await fetch(`http://localhost:19990/db`, {
        method: "get",
    });
    let {link} = await request.json(); 
    fetch(`${link}`)
        .then(response => response.json())
        .then(data => printCharts(data));
   };


//Funcion que carga el select de repositorios
const Json =  async() => {
    const request = await fetch(`http://localhost:19990/consultarRepos`, {
        method: "get",
    });
    var nuevoArray = new Array(1);
    nuevoArray = await request.json(); 

    const lista = document.getElementById('repos');
    lista.innerHTML = '';

    for (x of nuevoArray) {
        const lista1 = document.createElement('option');
        lista1.textContent = x.nombre_repositorio;
        lista1.value = x.id;
        lista.add(lista1);
    } 
};


//Funcion que obtiene las columnas disponibles
const Json2 =  async() => {
    const lista = document.getElementById('repos');
    console.log(lista.value);
   
    const request = await fetch(`http://localhost:19990/consultarColumnas/${lista}`,{
        method: "get",
    });
 
};







function printCharts(repositorio){
    document.body.classList.add('running') //para que aparezca en el front los canvas y cambiar la propiedad en el css
    document.body.classList.remove()
   // console.log(repositorio);
   compareRadialChart(repositorio,'chart1')
   coursesRadialChart(repositorio,'chart2')
}

function coursesRadialChart(repositorio,id){

    //const courses = repositorio.filter(eachCourse => eachCourse.total_aprendices_activos > 50 );
    
    const data = {
              //parametros de data
                labels: ['Presencial','Virtual'],
                datasets:[
                {
                    //for arreglo de valores
                    //label: ['virtual', 'presencial'],
                    data: [           
                        repositorio.filter(eachData => eachData.modalidad_formacion === 'PRESENCIAL').length, 
                        repositorio.filter(eachData => eachData.modalidad_formacion === 'VIRTUAL').length,              
                    ],
                    //data:courses.map(eachCourse => eachCourse.total_aprendices_activos),
                    borderColor:styles.color.solids.map(eachColor => eachColor),
                    backgroundColor:styles.color.alphas.map(eachColor => eachColor),
                    borderWidth: 1
                }]
            }

    const options = {   //estilos y opciones del grafico
                scale:{
                    gridLines:{ //lineas 
                        color: '#444'
                    },
                    pointLabels:{
                        fontColor: '#fff'
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
        
        new Chart(id,{type: 'polarArea',data, options});
    };
    
function compareRadialChart(repositorio, id){  //función para grafico radial
    const data = {  //parametros de data
        labels: ['La estrella', 'Caldas', 'Itagui','Medellin', 'Bello'],
        datasets:[{
            //for arreglo de valores
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

    new Chart(id,{type: 'polarArea',data, options})
};