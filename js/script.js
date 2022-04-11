let jsonCompleto, campoGraf, campoNum;
var chart, repo, nombreRepo,barras=false,num,unico=false;


//OBTIENE EL REPOSITORIO DEL LINK JSON Y SE ASIGNA A VARIABLE GLOBAL
const sacarJson = async (id) => {
  //mode: "no-cors"
  let request = await fetch(`http://localhost:19990/db/${id}`, {
    method: "get",
    //mode: 'no-cors',
    //credentials: 'include' 
    //credentials: 'include'
    
  });
  let { link } = await request.json();
  request = await fetch(`${link}`);
  let response = await request.json();
  //console.log(response)
  let data1 = await sacarColum(response);   //ESPERAR A QUE SE RESUELVA
  jsonCompleto=response;  
  //.then((response) => response.json())
    
    //.then((data) => sacarColum(data,"nombre_ocupacion")); //"PRIMERO ERROR"
    //console.log(data);
}


//CARGA EL SELECT DE LOS REPOSITORIOS DE LA BASE DE DATOS Y LA PONE EN LA LISTA
const Json = async () => {
  document.body.classList.add('running1')
  
  const request = await fetch(`http://localhost:19990/consultarRepos`, {
    method: "get",
  });
  var nuevoArray = new Array(1);
  nuevoArray = await request.json();
  //console.log(nuevoArray)

  

  const lista = document.getElementById("repos");
  lista.innerHTML = "";
  //var selectElement = document.getElementById("repos"); 
  

  for (x of nuevoArray) {
    const lista1 = document.createElement("option");
    lista1.textContent = x.nombre_repositorio;
    lista1.value = x.id;
    lista.add(lista1);
    //console.log(lista1.value);
  }

};


//SACA LAS COLUMNAS DEL JSON
function sacarColum(repositorio){

  var i = 0;
  //var cols = new Array(1);
  const listaColum = document.getElementById("columnas");
  listaColum.innerHTML = "";

  for (let item in repositorio[0]) {
    if (item.startsWith("nombre_") || item.startsWith("modalidad_") || item.startsWith("formato_") || item.startsWith("total_")) {
      i++;
      const lista1 = document.createElement("option");
      lista1.textContent = item;
      lista1.value = item;
      listaColum.add(lista1);
      //console.log("ITEM = " + item + i);
    }
  }
};


//SACA LOS VALORES DEL JSON FILTRADOS POR COLUMNA
function sacarVal(repositorio,campo){

  var lista1 = null;
  //var lista2 = null;
   var cols2 = new Array(1);
  
   const listaVal = document.getElementById("valores");
   listaVal.innerHTML = "";

   
   if(campo.length == 1 ){

    if (!isNaN(repositorio[1][campo[0]])) {
      window.alert("Debes seleccionar una columna de tipo texto, por favor vuelve a intentarlo");
    }else{
      for (var i=0; i < repositorio.length; i++) {
        cols2.push(repositorio[i][`${campo}`]);
         unico = true; 
      }
    }   
  }
  else if(campo.length == 0){
    window.alert("Debes seleccionar una columna,por favor vuelve a intentarlo");
  } 
  else if(campo.length == 2){

    if (isNaN(repositorio[1][campo[0]]) && isNaN(repositorio[1][campo[1]])) {
      window.alert("Debes seleccionar por lo menos una columna numerica, por favor vuelve a intentarlo");

    }
    else if(!isNaN(repositorio[1][campo[0]]) && !isNaN(repositorio[1][campo[1]])){
      window.alert("Debes seleccionar por lo menos una columna de tipo texto, por favor vuelve a intentarlo");
    }
    else{           
        var texto;
        //Valida que columna es la numerica
        for (let index = 0; index < campo.length; index++) {
                if(isNaN(repositorio[1][campo[index]])){
                  console.log("Este es el texto " + campo[index])
                  texto = campo[index];
                }else{
                  num = campo[index];
                  console.log("Este es el numero " + num)
                  campoNum = campo[index];
                }
        }
        //for para traer los valores por columna filtrada
        for (var i=0; i < repositorio.length; i++) {
            cols2.push(repositorio[i][`${texto}`]);
          }
          barras = true;
    }

  }else{
    window.alert("Solo puedes seleccionar como máximo 2 columnas,por favor vuelve a intentarlo");
  }
  
 
  
  //guardar en un vector los valores e ir filtrando para que no este repetido
  
   let uniqueChars = [...new Set(cols2)];
  
   for(var i=0;i < uniqueChars.length; i++){
    //lista1 = document.createElement("option");
    if(uniqueChars[i] != undefined  ){
      lista1 = document.createElement("option");
      lista1.textContent =uniqueChars[i];
      lista1.value = uniqueChars[i];
      listaVal.add(lista1);
    }
   }
  
   //return uniqueChars;
  
};

  


//CONTINUAR, pone los valores en lista
function Json1 ()  {
 
  var selectElement = document.getElementById("columnas"); 
  //selectElement.innerHTML.textContent = "";
   //SEGUNDO ERROR

  var campo = selectElement.value;
  campoGraf = campo;
//guardar para dos campos seleccionados como un arreglo

  var selected = [];
    for (var option of selectElement.options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    console.log(selected.length);  //variables seleccionadas de los campos
    
    sacarVal(jsonCompleto,selected);
};





//Funcion que obtiene las columnas disponibles CONTINUAR
const Json2 = () => {
  //Validar los campos de json obteniendo el json
  document.body.classList.add("running1");

  var selectElement = document.getElementById("repos"); 
  repo = selectElement.value;
  nombreRepo = selectElement.options[selectElement.selectedIndex].text;;

  sacarJson(repo);
};



//Funcion que obtiene los valores posibles a graficar CONTINUAR 2
document.getElementById('submit').onclick = function() {
    document.body.classList.add("running1");
    var selected = [];
    for (var option of document.getElementById('valores').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    //console.log(selected);
    //if repo = primerRepo use este printchart si no use el otro, si escogio dos campos y el repo es Tal, grafique esto

    //darle la opcion al usuario de escoger la grafica que quiere, hay que guardar la opcion del usuario y pasarlo como parametro en 
    //printcharts, ya en el metodo de graficación se hara un if por cada grafico disponible por repositorio

    //ocupacion y formacion no van juntos por ejemplo, enn el if se va una condicion de error que imprime que no se puede graficar


    //por campo seleccionado escoger el texto despues del _ y concantenarlo en caso de que se escogiera otro campo con un "por"
    //ejemplo: Centro por region


    printCharts(jsonCompleto,selected);
}


//FUNCION QUE CREA LOS GRAFICOS 
function printCharts(repositorio,valor) {

  document.body.classList.add("running"); //para que aparezca en el front los canvas y cambiar la propiedad en el css

  let titulo = document.getElementById("figura1");
  titulo.innerHTML = "";
  titulo.innerText = "Cantidad de "+nombreRepo + " por " +campoGraf ;

  titulo = document.getElementById("figura2");
  titulo.innerHTML = "";
  titulo.innerText = "Cantidad de "+nombreRepo + " por " +campoGraf ;

  titulo = document.getElementById("figura3");
  titulo.innerHTML = "";
  titulo.innerText = "Número de "+campoNum + " por " + nombreRepo;

  titulo = document.getElementById("figura4");
  titulo.innerHTML = "";
  titulo.innerText = "Número de "+campoNum + " por " + nombreRepo;

  titulo = document.getElementById("figura5");
  titulo.innerHTML = "";
  titulo.innerText = "Número de "+campoNum + " por " + nombreRepo;

  titulo = document.getElementById("figura6");
  titulo.innerHTML = "";
  titulo.innerText = "Número de "+campoNum + " por " + nombreRepo;


  //GRAFICOS CON UNA SOLA COLUMNA SELECCIONADA
  if(unico == true){
  radialChart(repositorio, "chart1", valor,campoGraf);
  donasChart(repositorio, "chart2", valor, campoGraf);
  }

  
  //GRAFICOS CON DOS COLUMNAS SELECCIONADAS
  if(barras == true){
    barrasChart(repositorio, "chart3", valor, campoGraf);
    pastelChart(repositorio, "chart6", valor, campoGraf);
    
    if (valor.length == 2) {
      lineasChart(repositorio, "chart4", valor, campoGraf);
    }else if(valor.length >= 3){
      radarChart(repositorio, "chart5", valor, campoGraf);
    }    
  }  
};


//FUNCION QUE CREA EL GRAFICO RADIAL
function radialChart(repositorio, id, valor,campo) {

  //var grapharea = document.getElementById(id).getContext("2d");
  //var chart = new Chart(id, { type: "polarArea", data, options});
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}
  //const context = canvas.getContext(`${id}`);
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}

 // context.clearRect(0, 0, canvas.width, canvas.height);
  //const courses = repositorio.filter(eachCourse => eachCourse.total_aprendices_activos > 50 );
  //console.log(valor.length);

  const labels = [];
  let nom = null;
  for(let i= 0; i < valor.length; i++){
    //Si el label tiene mas de 15 caracteres poner puntos suspensivos 
    //console.log("Este es el valor de label " + valor[i]);
    //if(valor[i].length > 20){
      //  nom =  valor[i].substring(0,20)+"...";
       // labels[i] = nom;
    //}else{
        labels[i] = valor[i];
    //}
};

var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] =repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`).length
      //console.log(datos);
    };

    //Seccion para sacar los porcentajes en los label
    var total = 0,formula=0;
    for (let i = 0; i < datos.length; i++) {
      total += datos[i];
    }
    

    //for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      formula = ((datos[i]/total)*100).toFixed(1);
      labels[i] = labels[i] + " = " + datos[i] + " (" +formula+"%)" + "\n";
      
    }
  

  const data = {
    //parametros de data
    labels: labels,
    
    datasets: [
      {
        //for arreglo de valores
        //label: ['virtual', 'presencial'],
        data: datos,
        //data:courses.map(eachCourse => eachCourse.total_aprendices_activos),
        borderColor: styles.color.solids.map((eachColor) => eachColor),
        backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
        borderWidth: 1,
      },
    ],
  };


  const options = {
    //estilos y opciones del grafico
    scale: {
      gridLines: {
        //lineas
        color: "#444",
      },
      pointLabels: {
        fontColor: "#fff",
      },
      ticks: {
        //quitar etiquetas
        display: false,
      },
    },
    legend: {
      position: "bottom",
      labels: {
        fontColor: "#fff",
      },
    },
  };

  

  //event.preventDefault();
    //var parent = document.getElementById(id);
    //var child = document.getElementById(id);          
    //parent.remove(child);            
    //parent.appendChild ='<canvas id="chart2"></canvas>'; 

  chart = new Chart(id, { type: "polarArea", data, options });

};



//FUNCION QUE CREA EL GRAFICO DE DONA
function donasChart(repositorio, id,valor,campo) {

  const labels = [];
  let nom = null;

  

  for(let i= 0; i < valor.length; i++){
    labels[i] = valor[i];
  };


var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] =repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`
      ).length
    };

    //Seccion para sacar los porcentajes en los label
  var total = 0,formula=0;
  for (let i = 0; i < datos.length; i++) {
    total += datos[i];
  }
  

  //for que retorna los datos en el label
  for (let i = 0; i < labels.length; i++) {
    formula = ((datos[i]/total)*100).toFixed(1);
    labels[i] = labels[i] + " = " + datos[i] + " (" +formula+"%)" + "\n";
    
  }






  const data = {
    //parametros de data
    labels: labels,
    datasets: [
      {
        data: datos,
       
        borderColor: styles.color.solids.map(eachColor => eachColor),
        backgroundColor: styles.color.alphas.map(eachColor => eachColor),
        borderWidth: 1
      },
    ],
  };

  const options = {
    //estilos y opciones del grafico
    
    legend: {
      position: "bottom",
      labels: {
        fontColor: "#fff",
      },
    },
  };
  

  chart = new Chart(id, { type: "doughnut", data, options });
};



//FUNCION QUE CREA EL GRAFICO DE PASTEL
function pastelChart(repositorio, id, valor,campo) {

  const labels = [];
    //guarda los labels del grafico
    let nom = null;
    for(let i= 0; i<valor.length; i++){
        labels[i] = valor[i];  
    };
  
//Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] = repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`)
    };
    var cont= [], c=0;
    
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`],10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c=0;
    }

 
    //armado de grafico
   const data = {
     //parametros de data
     labels: labels,     
     datasets: [
       {
         data: cont,
         borderColor: styles.color.solids.map((eachColor) => eachColor),
         backgroundColor: styles.color.alphas.map((eachColor) => eachColor)
       },
     ],
   };
 
  const options = {
  //estilos y opciones del grafico
  legend: {
  
    position: "bottom",
      labels: { 
        fontColor: "#FFF",
      }, 
    }
  };
   chart = new Chart(id, { type: "pie", data, options});
 };



//FUNCION QUE CREA EL GRAFICO DE BARRAS
function barrasChart(repositorio, id, valor,campo) {

  const labels = [];
    //guarda los labels del grafico
    for(let i= 0; i<valor.length; i++){
      labels[i] = valor[i];
    };
  
//Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] = repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`)
    };
    var cont= [], c=0;
    
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`],10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c=0;
    }
 
    //for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      labels[i] = labels[i] + " = " + cont[i];
    }

   
 
    //armado de grafico
   const data = {
     
     //parametros de data
     labels: labels,     
     datasets: [
       {
         label: campo,
         data: cont,
         borderColor: styles.color.solids.map((eachColor) => eachColor),
         backgroundColor: styles.color.alphas.map((eachColor) => eachColor)
       },
     ],
   };
 
   const options = {
      //estilos y opciones del grafico
      legend: {
      display: true,
      labels: { 
        fontColor: "#FFF",
      }, 
      },
      scales:{
        yAxes:[{
          gridLines:{
            display: true,
          },
          ticks: {
            display : true,
            beginAtZero : true
          }
        }]
      },
    };
 
   chart = new Chart(id, { type: "bar", data, options});
 };



 //FUNCION QUE CREA EL GRAFICO DE LINEAS
 function lineasChart(repositorio, id, valor,campo) {
  // const context = canvas.getContext(`${id}`);
  //var grapharea = document.getElementById(id).getContext("2d");
  //var chart = new Chart(id, { type: "polarArea", data, options});
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}

  const labels = [];
    //guarda los labels del grafico
    let nom = null;
    for(let i= 0; i<valor.length; i++){
      labels[i] = valor[i];
    };
  
//Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] = repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`)
 
    };
    var cont= [], c=0;
    
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`],10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c=0;
    }
    
    //for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      labels[i] = labels[i] + " = " + cont[i];
    }
 
    //armado de grafico
   const data = {
     //parametros de data
     labels: labels,     
     datasets: [
       {
        label: campo,
         data: cont,
         borderColor: styles.color.solids.map((eachColor) => eachColor),
         backgroundColor: styles.color.alphas.map((eachColor) => eachColor)
       },
     ],
   };
 
   const options = {
      //estilos y opciones del grafico
      legend: {
      display: true,
      labels: { 
        fontColor: "#FFF",
      }, 
      },
      scales:{
        yAxes:[{
          gridLines:{
            display: false
          },
          ticks: {
            display : true,
            beginAtZero : true
          }
        }],
        xAxes:[{
          ticks: {
            display : true,
            beginAtZero : true
          }
        }]
      },
    };
 
   chart = new Chart(id, { type: "line", data, options});
 };



//FUNCION QUE CREA EL GRAFICO RADIAL
 function radarChart(repositorio, id, valor,campo) {
  // const context = canvas.getContext(`${id}`);
  //var grapharea = document.getElementById(id).getContext("2d");
  //var chart = new Chart(id, { type: "polarArea", data, options});
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}

  const labels = [];
    //guarda los labels del grafico
    let nom = null;
    for(let i= 0; i<valor.length; i++){
      labels[i] = valor[i];
    };
  
//Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] = repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`)
    };
    var cont= [], c=0;
    
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`],10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c=0;
    }
 
     
    //for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      labels[i] = labels[i] + " = " + cont[i];
    }
 
    //armado de grafico
   const data = {
     //parametros de data
     labels: labels,     
     datasets: [
       {
        label: campo,
         data: cont,
         borderColor: styles.color.solids.map((eachColor) => eachColor),
         backgroundColor: styles.color.alphas.map((eachColor) => eachColor)
       },
     ],
   };
 
   const options = {
      //estilos y opciones del grafico
      legend: {
      //display: true,
      labels: { 
        fontColor: "#FFF",
      }, 
      },
        ticks: {
        display : true,
        beginAtZero : true
      },
    };
 
   chart = new Chart(id, { type: "radar", data, options});
 };




