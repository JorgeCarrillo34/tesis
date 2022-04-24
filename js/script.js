let jsonCompleto, campoGraf, campoNum;
var chart, repo, nombreRepo,barras=false,num,unico=false;
var chart1, chart2, chart3,chart4,chart5,chart6, chart7;
const lista= document.getElementById("sect");
//var c1,c2,c3,c4,c5,c6;

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.elements.rectangle.borderWidth = 1;
Chart.defaults.scale.gridLines.color = '#444';
Chart.defaults.scale.ticks.display = false;



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
  
  //var opt= null;

  const request = await fetch(`http://localhost:19990/consultarRepos`, {
    method: "get",
  });
  var nuevoArray = new Array(1);
  nuevoArray = await request.json();
  //console.log(nuevoArray)

    if(!document.getElementById("l1")){
      
    const lista= document.querySelector(".desaparece-1");
    lista.setAttribute("id","l1");

    const p = document.createElement("p");
    p.style.color="white";
    p.textContent="Selecciona un repositorio para iniciar."

    const opt=document.createElement("select");
    opt.setAttribute("id","repos");
    opt.textContent="Seleccione una opción";

    const but=document.createElement("button");
    but.setAttribute("class","btn btn-info btn-lg btn-set")
    but.setAttribute("onclick","Json2();")
    but.setAttribute("type","button")
    but.textContent="Continuar"
    
    lista.appendChild(p);
    lista.appendChild(opt);
    lista.appendChild(but);

    for (x of nuevoArray) {
      const lista1 = document.createElement("option");
      lista1.textContent = x.nombre_repositorio;
      lista1.value = x.id;
      opt.add(lista1);
      //console.log(lista1.value);
    }
  }
  //const lista = document.getElementById("repos");
  //lista.innerHTML = "";
  //var selectElement = document.getElementById("repos"); 

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
         //barras = false;
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
         // unico = false;
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
  
   return uniqueChars;
  
};

  
//CONTINUAR, pone los valores en lista
function Json1 ()  {
  if(!document.getElementById("l2")){
  const lista= document.querySelector(".desaparece-3");
  lista.setAttribute("id","l2");

  const p = document.createElement("p");
  p.style.color="white";
  p.textContent="Ahora selecciona los campos que deseas graficar."

  const opt=document.createElement("select");
  opt.setAttribute("id","valores");
  opt.setAttribute("multiple", true);
  opt.textContent="Seleccione una opción";

  const but=document.createElement("button");
  but.setAttribute("class","btn btn-info btn-lg btn-set")
  but.setAttribute("onclick","json3();")
  but.setAttribute("type","button")
  but.textContent="Graficar"
  
  lista.appendChild(p);
  lista.appendChild(opt);
  lista.appendChild(but);

  var selectElement = document.getElementById("columnas"); 

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

    console.log(selected);  //variables seleccionadas de los campos
    
    sacarVal(jsonCompleto,selected);
}else{
  var selectElement = document.getElementById("columnas"); 

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

    console.log(selected);  //variables seleccionadas de los campos
    
    sacarVal(jsonCompleto,selected);
}
  
    //selected = null;
};


//Funcion que obtiene las columnas disponibles CONTINUAR
const Json2 = () => {
  //Validar los campos de json obteniendo el json
  
  if(!document.getElementById("l3")){
  const lista= document.querySelector(".desaparece-2");
  lista.setAttribute("id","l3");

  const p = document.createElement("p");
  p.style.color="white";
  p.textContent="A continuación encontrarás todas las columnas disponibles de las cuales podrás hacer uso para tus gráficos."

  const opt=document.createElement("select");
  opt.setAttribute("id","columnas");
  opt.setAttribute("multiple", true);
  opt.textContent="Seleccione una opción";

  const but=document.createElement("button");
  but.setAttribute("class","btn btn-info btn-lg btn-set")
  but.setAttribute("onclick","Json1();")
  but.setAttribute("type","button")
  but.textContent="Continuar"
  
  lista.appendChild(p);
  lista.appendChild(opt);
  lista.appendChild(but);

//obtiene el valor de la lista de repositorios y lo envia a buscar a la bd
  var selectElement = document.getElementById("repos"); 
  repo = selectElement.value;
  nombreRepo = selectElement.options[selectElement.selectedIndex].text;;
  sacarJson(repo);
  }else{
    var selectElement = document.getElementById("repos"); 
    repo = selectElement.value;
    nombreRepo = selectElement.options[selectElement.selectedIndex].text;;
    sacarJson(repo);
  }
};


//Funcion que obtiene los valores posibles a graficar CONTINUAR 2
const json3 = () => {
  //console.log("HOLA AOPAAAAAAAAA")
    
  


    var selected = [];
    for (var option of document.getElementById('valores').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    //console.log(selected);

    if(selected.length > 10){
      window.alert("Maximo 10 valores, por favor selecciona menos valores");
    }else{
      printCharts(jsonCompleto,selected);
    }

}

function chart_1(){
  const fig = document.createElement("figure");
  fig.setAttribute("id","1f");
  //c1=document.getElementById("1f");
  
  const p = document.createElement("p");
  p.style.color="white";
  p.textContent="Gráfico de área polar"

  const can = document.createElement("canvas");
  can.setAttribute("id","chart1");

  const but=document.createElement("button");
  but.setAttribute("class","btn btn-info")
  but.setAttribute("onclick","descargarRadial();")
  but.style.marginBottom = "20px";
  but.setAttribute("id","button1")
  but.setAttribute("type","button")
  but.textContent="Descargar chart como PNG"

  lista.appendChild(fig);
  fig.appendChild(p);
  fig.appendChild(can);
  lista.appendChild(but);
}
function chart_2(){
  const fig = document.createElement("figure");
  fig.setAttribute("id","2f");
  //c2=document.getElementById("2f");
  
  const p = document.createElement("p");
  p.style.color="white";
  p.textContent="Gráfico radial"

  const can = document.createElement("canvas");
  can.setAttribute("id","chart2");

  const but=document.createElement("button");
  but.setAttribute("class","btn btn-info")
  but.setAttribute("onclick","descargarDonas();")
  but.setAttribute("id","button2")
  but.style.marginBottom = "20px";
  but.setAttribute("type","button")
  but.textContent="Descargar chart como PNG"

  lista.appendChild(fig);
  fig.appendChild(p);
  fig.appendChild(can);
  lista.appendChild(but);
}
function chart_3(){
  const fig = document.createElement("figure");
    fig.setAttribute("id","3f");
    //c3=document.getElementById("3f");
    
    const p = document.createElement("p");
    p.style.color="white";
    p.textContent="Gráfico de barras"

    const can = document.createElement("canvas");
    can.setAttribute("id","chart3");

    const but=document.createElement("button");
    but.setAttribute("class","btn btn-info")
    but.setAttribute("onclick","descargarBarras();")
    but.style.marginBottom = "20px";
    but.setAttribute("type","button")
    but.setAttribute("id","button3")
    but.style.marginBottom = "20px";
    but.textContent="Descargar chart como PNG"
  
    lista.appendChild(fig);
    fig.appendChild(p);
    fig.appendChild(can);
    lista.appendChild(but);
}
function chart_4(){
  const fig = document.createElement("figure");
  fig.setAttribute("id","4f");
  //c4=document.getElementById("4f");
        
  const p = document.createElement("p");
  p.style.color="white";
  p.textContent="Gráfico de lineas"
    
  const can = document.createElement("canvas");
  can.setAttribute("id","chart4");
   
  const but=document.createElement("button");
  but.setAttribute("class","btn btn-info");
  but.setAttribute("onclick","descargarLineas();")
  but.setAttribute("id","button4");
  but.setAttribute("type","button");
  but.style.marginBottom = "20px";
  but.textContent="Descargar chart como PNG"
      
  lista.appendChild(fig);
  fig.appendChild(p);
  fig.appendChild(can);
  lista.appendChild(but);
}
function chart_5(){
  const fig = document.createElement("figure");
      fig.setAttribute("id","5f");
   //   c5=document.getElementById("5f");
      
      const p = document.createElement("p");
      p.style.color="white";
      p.textContent="Gráfico de radar"
  
      const can = document.createElement("canvas");
      can.setAttribute("id","chart5");
  
      const but=document.createElement("button");
      but.setAttribute("class","btn btn-info");
      but.setAttribute("onclick","descargarRadar();")
      but.setAttribute("id","button5");
      but.style.marginBottom = "20px";
      but.setAttribute("type","button");
      but.textContent="Descargar chart como PNG"
    
      lista.appendChild(fig);
      fig.appendChild(p);
      fig.appendChild(can);
      lista.appendChild(but);
}
function chart_6(){
  const fig = document.createElement("figure");
    fig.setAttribute("id","6f");
  //  c6=document.getElementById("6f");
    
    const p = document.createElement("p");
    p.style.color="white";
    p.textContent="Gráfico de pastel"

    const can = document.createElement("canvas");
    can.setAttribute("id","chart6");

    const but=document.createElement("button");
    but.setAttribute("class","btn btn-info")
    but.setAttribute("onclick","descargarPastel();")
    but.setAttribute("id","button6")
    but.style.marginBottom = "20px";
    but.setAttribute("type","button")
    but.textContent="Descargar chart como PNG"
  
    lista.appendChild(fig);
    fig.appendChild(p);
    fig.appendChild(can);
    lista.appendChild(but);
}

//FUNCION QUE CREA LOS GRAFICOS 
function printCharts(repositorio,valor) {

   //para que aparezca en el front los canvas y cambiar la propiedad en el css

  let titulo;
  titulo = "Cantidad de "+nombreRepo + " por " +campoGraf ;

  let titulo2;
  titulo2 = "Cantidad de "+nombreRepo + " por " +campoGraf ;

  let titulo3;
  titulo3 = "Número de "+campoNum + " por " + nombreRepo;

  let titulo4;
  titulo4 = "Número de "+campoNum + " por " + nombreRepo;

  let titulo5;
  titulo5 = "Número de "+campoNum + " por " + nombreRepo;

  let titulo6;
  titulo6 = "Número de "+campoNum + " por " + nombreRepo;

  
  //GRAFICOS CON UNA SOLA COLUMNA SELECCIONADA
  if(unico == true ){
    
    if(valor<1){
      window.alert("Selecciona minimo un valor por favor");
    }else{
      if(!document.getElementById("chart1")){
        chart_1();
        radialChart(repositorio, "chart1", valor,campoGraf, titulo);
        chart_2();
        donasChart(repositorio, "chart2", valor, campoGraf, titulo2);
        }else{
          radialChart(repositorio, "chart1", valor,campoGraf, titulo);
          donasChart(repositorio, "chart2", valor, campoGraf, titulo2);
        }
        
        if(document.getElementById("chart3") || document.getElementById("chart4") || document.getElementById("chart5") ||  document.getElementById("chart6")){
          //console.log("HOLA POAAAAAAAAA");
          document.getElementById("3f").remove();
          document.getElementById("4f").remove();
          document.getElementById("5f").remove();
          document.getElementById("6f").remove();
          document.getElementById("button3").remove();
          document.getElementById("button4").remove();
          document.getElementById("button5").remove();
          document.getElementById("button6").remove();
        }
    } 
    //unico=false;
  }

  //GRAFICOS CON DOS COLUMNAS SELECCIONADAS
  if(barras == true){
      if(valor<1){
        window.alert("Selecciona minimo un valor por favor");
      }else{
      if(!document.getElementById("chart3")){
      chart_3();
      barrasChart(repositorio, "chart3", valor, campoGraf, titulo3);

      chart_6();
      pastelChart(repositorio, "chart6", valor, campoGraf, titulo6);
      }else{
        barrasChart(repositorio, "chart3", valor, campoGraf, titulo3);
        pastelChart(repositorio, "chart6", valor, campoGraf, titulo6);
      }
      if (valor.length == 2) {
        if(!document.getElementById("chart4")){
        chart_4();
        lineasChart(repositorio, "chart4", valor, campoGraf, titulo4);
        }else{
          lineasChart(repositorio, "chart4", valor, campoGraf, titulo4);
        }
      }else if(valor.length >= 3){
        if(!document.getElementById("chart4")){
          chart_4();
          lineasChart(repositorio, "chart4", valor, campoGraf, titulo4);
          chart_5();
          radarChart(repositorio, "chart5", valor, campoGraf, titulo5);
        }else{
          lineasChart(repositorio, "chart4", valor, campoGraf, titulo4);
          radarChart(repositorio, "chart5", valor, campoGraf, titulo5);
        }//else if(
          
            
      }
      if(document.getElementById("chart1") || document.getElementById("chart2")){
        document.getElementById("1f").remove();
        document.getElementById("2f").remove();
        document.getElementById("button1").remove();
        document.getElementById("button2").remove();
      } 
      //barras=false;   
    }  
  }
};

//FUNCION QUE CREA EL GRAFICO RADIAL
function radialChart(repositorio, id, valor,campo, titulo) {

  const labels = [];
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
        data: datos,
        //data:courses.map(eachCourse => eachCourse.total_aprendices_activos),
        borderColor: styles.color.solids.map((eachColor) => eachColor),
        backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
        borderWidth: 1,
      },
    ],
  };

  
  const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };


  const config = {
    type: 'polarArea',
    data: data,
    plugins: [plugin],
    options:{
      legend: {
        position: "bottom",
        labels:{
          fontColor: "black"
        }
      },
      title: {
        display: true,
        text: titulo,
        fontColor: "black"
     },
     
    }
      
  };

  
  if(chart2 != undefined ||  chart2 != null){
      chart2.destroy();
   }

     chart2 = new Chart(id,config);
  

};

//FUNCION QUE CREA EL GRAFICO DE DONA
function donasChart(repositorio, id,valor,campo, titulo) {

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

  const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };


  const config = {
     //estilos y opciones del grafico
   
    type: 'doughnut',
    data: data,
    plugins: [plugin],
    options:{
      legend: {
        position: "bottom",
        labels:{
          fontColor: "black"
        }
      },
      title: {
        display: true,
        text: titulo,
        fontColor: "black"
     },
    }
      
    
  };

  if(chart3 != undefined ||  chart3 != null){
    chart3.destroy();
 }

  chart3 = new Chart(id,config);


};

//FUNCION QUE CREA EL GRAFICO DE BARRAS
function barrasChart(repositorio, id, valor,campo, titulo) {

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
 


   const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };


  const config = {
     //estilos y opciones del grafico
   
    type: 'bar',
    data: data,
    plugins: [plugin], 
    options: {
      scales:{
        yAxes:[{
          gridLines:{
            display: false,
          },
          ticks: {
            display : true,
            beginAtZero : true,
            fontColor: "black"
          }
        }],
        xAxes:[{
          gridLines:{
            display: false,
          },
          ticks: {
            display : true,
            beginAtZero : true,
            fontColor: "black"
          }
        }]
      },
      title: {
        display: true,
        text: titulo,
        fontColor: "black"
     },
     legend:{
        labels:{
          fontColor: "black"
        }
      }
    }
  };

  if(chart4 != undefined ||  chart4 != null){
    chart4.destroy();
 }
  chart4 = new Chart(id,config);

 };

 //FUNCION QUE CREA EL GRAFICO DE LINEAS
 function lineasChart(repositorio, id, valor,campo, titulo) {
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


   const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

 
    const config = {
      //estilos y opciones del grafico
    
     type: 'line',
     data: data,
     plugins: [plugin], 
     options: {
       scales:{
         yAxes:[{
           gridLines:{
             display: false,
           },
           ticks: {
             display : true,
             beginAtZero : true,
             fontColor: "black"
           }
         }],
         xAxes:[{
           gridLines:{
             display: false,
           },
           ticks: {
             display : true,
             beginAtZero : true,
             fontColor: "black"
           }
         }]
       },
       title: {
        display: true,
        text: titulo,
        fontColor: "black"
     },
     legend:{
      labels:{
        fontColor: "black"
      }
    }
     }
   };
 
   if(chart5 != undefined ||  chart5 != null){
    chart5.destroy();
 }
   chart5 = new Chart(id,config);
 };

//FUNCION QUE CREA EL GRAFICO RADIAL
 function radarChart(repositorio, id, valor,campo, titulo) {
  

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
         backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
         pointLabels: 'red'
       },
     ],
   };
 
   const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };


  const config = {
     //estilos y opciones del grafico
    
    type: 'radar',
    data: data,
    plugins: [plugin],
    options:{
      legend: {
        position: "bottom",
        labels:{
          fontColor: "black"
        }
      },
      title: {
        display: true,
        text: titulo,
        fontColor: "black",
     }
    }
  };

  if(chart6 != undefined ||  chart6 != null){
    chart6.destroy();
 }

  chart6 = new Chart(id,config);
 };

 //FUNCION QUE CREA EL GRAFICO DE PASTEL
function pastelChart(repositorio, id, valor,campo, titulo) {

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


  //Seccion para sacar los porcentajes en los label
  var total = 0,formula=0;
  for (let i = 0; i < cont.length; i++) {
    total += cont[i];
  }
 
  

  //for que retorna los datos en el label
  for (let i = 0; i < labels.length; i++) {
    formula = ((cont[i]/total)*100).toFixed(1);
    labels[i] = labels[i] + " = " + cont[i] + " (" +formula+"%)" + "\n";
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
 
   const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };


  const config = {
     //estilos y opciones del grafico

    type: 'pie',
    data: data,
    plugins: [plugin],
    options:{
      legend: {
        position: "bottom",
        labels:{
          fontColor: "black"
        }
      },
      title: {
        display: true,
        text: titulo,
        fontColor: "black"
     },
    }
  };

  if(chart7 != undefined ||  chart7 != null){
    chart7.destroy();
 }

  chart7 = new Chart(id,config);


 };



//FUNCION QUE CREA EL GRAFICO RADIAL
function descargarRadial() {
  var canvas = document.getElementById("chart1");
  // Crear un elemento <a>
  let enlace = document.createElement('a');
  // El título
  enlace.download = 'download.jpeg';
  // Convertir la imagen a Base64 y ponerlo en el enlace
  enlace.href = canvas.toDataURL("image/jpeg",1.0);
  // Hacer click en él
  enlace.click();
 };

//FUNCION QUE CREA EL GRAFICO DONAS
function descargarDonas() {
  var canvas = document.getElementById("chart2");
  // Crear un elemento <a>
  let enlace = document.createElement('a');
  // El título
  enlace.download = 'download.jpeg';
  // Convertir la imagen a Base64 y ponerlo en el enlace
  enlace.href = canvas.toDataURL("image/jpeg",1.0);
  // Hacer click en él
  enlace.click();
 };

//FUNCION QUE CREA EL GRAFICO BARRAS
function descargarBarras() {
  var canvas = document.getElementById("chart3");
  // Crear un elemento <a>
  let enlace = document.createElement('a');
  // El título
  enlace.download = 'download.jpeg';
  // Convertir la imagen a Base64 y ponerlo en el enlace
  enlace.href = canvas.toDataURL("image/jpeg",1.0);
  // Hacer click en él
  enlace.click();
 };

//FUNCION QUE CREA EL GRAFICO LIENAS
function descargarLineas() {
  var canvas = document.getElementById("chart4");
  // Crear un elemento <a>
  let enlace = document.createElement('a');
  // El título
  enlace.download = 'download.jpeg';
  // Convertir la imagen a Base64 y ponerlo en el enlace
  enlace.href = canvas.toDataURL("image/jpeg",1.0);
  // Hacer click en él
  enlace.click();
 };
 
//FUNCION QUE CREA EL GRAFICO BARRAS
function descargarRadar() {
  var canvas = document.getElementById("chart5");
  // Crear un elemento <a>
  let enlace = document.createElement('a');
  // El título
  enlace.download = 'download.jpeg';
  // Convertir la imagen a Base64 y ponerlo en el enlace
  enlace.href = canvas.toDataURL("image/jpeg",1.0);
  // Hacer click en él
  enlace.click();
 }; 
 
//FUNCION QUE CREA EL GRAFICO Pastel
function descargarPastel() {
  var canvas = document.getElementById("chart6");
  // Crear un elemento <a>
  let enlace = document.createElement('a');
  // El título
  enlace.download = 'download.jpeg';
  // Convertir la imagen a Base64 y ponerlo en el enlace
  enlace.href = canvas.toDataURL("image/jpeg",1.0);
  // Hacer click en él
  enlace.click();
 };
