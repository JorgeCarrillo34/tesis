let jsonCompleto, campoGraf;
var chart, repo, nombreRepo;


//CONTINUAR, pone los valores en lista
function Json1 ()  {
 
  var selectElement = document.getElementById("columnas"); 
  //selectElement.innerHTML.textContent = "";
   //SEGUNDO ERROR

  var campo = selectElement.value;
  //console.log(jsonCompleto);
  campoGraf = campo;
//guardar para dos campos seleccionados como un arreglo

  var selected = [];
    for (var option of selectElement.options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    console.log(selected);  //variables seleccionadas de los campos
  //var f = document.querySelector('.out').textContent = out;
  sacarVal(jsonCompleto,campo);
  //console.log(jsonCompleto);
  //console.log(out);



  //printCharts(sacarVal(jsonCompleto,out));
};


//SACA LOS CAMPOS DEL JSON
function sacarColum(repositorio){

  var i = 0;
  //var cols = new Array(1);
  const listaColum = document.getElementById("columnas");
  listaColum.innerHTML = "";

  for (let item in repositorio[0]) {
    if (item.startsWith("nombre_") || item.startsWith("modalidad_") || item.startsWith("formato_")) {
      i++;
      const lista1 = document.createElement("option");
      lista1.textContent = item;
      lista1.value = item;
      listaColum.add(lista1);
      console.log("ITEM = " + item + i);
    }
  }
};


//SACA LOS VALORES DEL JSON FILTRADOS POR CAMPO
function sacarVal(repositorio,campo){
console.log(campo + " Este es el campo pa"); 

var lista1 = null;
//var lista2 = null;
 var cols2 = new Array(1);

 const listaVal = document.getElementById("valores");
 listaVal.innerHTML = "";
 

 for (var i=0; i < repositorio.length; i++) {
    
      cols2.push(repositorio[i][`${campo}`]);

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
  console.log(response)
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




function printCharts(repositorio,valor) {

  //AQUI DEBE IR UN IF COMO EL DEL CRITERIO PARA QUE DEPENDIENDO DEL REPOSITORIO SELECCIONE EL METODO DE GRAFICACIÓN

  document.body.classList.add("running"); //para que aparezca en el front los canvas y cambiar la propiedad en el css
  console.log(repositorio);
  console.log(valor);
  console.log(campoGraf);
    //recorrer repositorio total, if (item=campo seleccionado en la lista) =
  //compareRadialChart(repositorio, "chart1", valor);


  let titulo = document.getElementById("figura2");
  titulo.innerHTML = "";
  titulo.innerText = campoGraf + " de " + nombreRepo;

  radialChart(repositorio, "chart1", valor,campoGraf);
  console.log("buena pa");
  donasChart(repositorio, "chart2", valor, campoGraf);
  //barrasChart(repositorio, "chart3", valor, campoGraf);
  
};



function radialChart(repositorio, id, valor,campo) {

  //var grapharea = document.getElementById(id).getContext("2d");
  //var chart = new Chart(id, { type: "polarArea", data, options});
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}
 // const context = canvas.getContext(`${id}`);
 
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}

 // context.clearRect(0, 0, canvas.width, canvas.height);
  //const courses = repositorio.filter(eachCourse => eachCourse.total_aprendices_activos > 50 );
  //console.log(valor.length);
  const labels = [];
  let nom = null;
  for(let i= 0; i<valor.length; i++){
    //Si el label tiene mas de 15 caracteres poner puntos suspensivos 
    console.log("Este es el valor de label " + valor[i]);
    if(valor[i].length > 20){
        nom =  valor[i].substring(0,20)+"...";
        labels[i] = nom;
    }else{
        labels[i] = valor[i];
    }
};

var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] =repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`
      ).length
      console.log(datos);
    };
  
 console.log(datos);
  

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
      position: "right",
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




function donasChart(repositorio, id,valor,campo) {

  //var chart = new Chart(id, { type: "polarArea", data, options});
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}

  const labels = [];
  let nom = null;
  for(let i= 0; i<valor.length; i++){
    //Si el label tiene mas de 15 caracteres poner puntos suspensivos 
    console.log("Este es el valor de label " + valor[i]);
    if(valor[i].length > 20){
        nom =  valor[i].substring(0,20)+"...";
        labels[i] = nom;
    }else{
        labels[i] = valor[i];
    }
};



var datos = [];

  for(let i= 0; i<valor.length; i++){
    
    datos[i] =repositorio.filter(
      (eachData) => eachData[`${campo}`] === `${valor[i]}`
      ).length
      console.log(datos);
    };
    console.log(datos);
    console.log(labels);

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
      position: "right",
      labels: {
        fontColor: "#fff",
      },
    },
  };
  

  chart = new Chart(id, { type: "doughnut", data, options });
};


function barrasChart(repositorio, id, valor,campo) {
  // const context = canvas.getContext(`${id}`);
  //var grapharea = document.getElementById(id).getContext("2d");
  //var chart = new Chart(id, { type: "polarArea", data, options});
  //if(chart != undefined ||  chart != null) 
  //{chart.destroy();}

  
   const labels = [];
   const sel = repositorio.filter(eachData => eachData.valor);

   
   let nom = null;
   for(let i= 0; i<valor.length; i++){
     //Si el label tiene mas de 15 caracteres poner puntos suspensivos 
     console.log("Este es el valor de label " + valor[i]);
     //if(valor[i].length > 20){
       //  nom =  valor[i].substring(0,20)+"...";
         //labels[i] = nom;
     //}else{
         labels[i] = sel.map(eachData => eachData[`${valor[i]}`]);
     //}
 };
 
 var datos = [];
 
   for(let i= 0; i<valor.length; i++){
     
     datos[i] =sel.map(
       eachData => eachData[`${valor[i]}`]
       ).length
       console.log(datos);
     };
   
  console.log(datos);
   
 
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
         backgroundColor: styles.color.alphas.map((eachColor) => eachColor)
         
       },
     ],
   };
 
   const options = {
     //estilos y opciones del grafico
     
     legend: {
       position: false,
       
     },
   };
 
   //event.preventDefault();
     //var parent = document.getElementById(id);
     //var child = document.getElementById(id);          
     //parent.remove(child);            
     //parent.appendChild ='<canvas id="chart2"></canvas>'; 

     
 
   chart = new Chart(id, { type: "bar", data, options });
 
 };
