let jsonCompleto, campoGraf, campoNum;
var chart,
  repo,
  nombreRepo,
  barras = false,
  num,
  unico = false,
  sel = [];
var chart1,chart2,chart3,chart4,chart5,chart6,chart7,chart8,chart9,chart10;
const lista = document.getElementById("sect");


//Funcion que obtiene las columnas disponibles CONTINUAR
const Json2 = () => {
    //Validar los campos de json obteniendo el json
  
    if (!document.getElementById("l3")) {
      const lista = document.querySelector(".desaparece-2");
      lista.setAttribute("id", "l3");
  
      const p = document.createElement("p");
      p.style.color = "white";
      p.setAttribute("id", "p1");
      p.textContent =
        "A continuación encontrarás todas las columnas disponibles de las cuales podrás hacer uso para tus gráficos. (Máximo 3 columnas: una de texto y una numérica)" +
        "\n" +
        "Primero debes escoger cuantas columnas quieres ingresar";
  
      const opt0 = document.createElement("select");
      opt0.setAttribute("class", "caja dos");
      opt0.setAttribute("id", "opci");
  
      const op1 = document.createElement("option");
      op1.textContent = "1";
      const op2 = document.createElement("option");
      op2.textContent = "2";
      const op3 = document.createElement("option");
      op3.textContent = "3";
      opt0.add(op1);
      opt0.add(op2);
      opt0.add(op3);
  
      const but1 = document.createElement("button");
      but1.setAttribute("class", "btn btn-info btn-lg btn-set");
      but1.setAttribute("onclick", "cantidadCol();");
      but1.setAttribute("id", "button11");
      but1.setAttribute("type", "button");
      but1.textContent = "Continuar";
  
      lista.appendChild(p);
      lista.appendChild(opt0);
      lista.appendChild(but1);
    } else if (document.getElementById("sect").style.visibility == "hidden") {
      document.getElementById("sect").style.visibility = "visible";
      document.getElementById("div1").style.visibility = "visible";
      document.getElementById("div2").style.visibility = "visible";
    }
};

//funcion que permite las 2 listas
function cantidadCol() {
  
    var c = 0;
    var selectElement = document.getElementById("opci");
    const lista = document.querySelector(".desaparece-2");
    c = Number(selectElement.value);
    //console.log(typeof(Number(selectElement.value)));
    //console.log(typeof c);
  
    if (!document.getElementById("columnasT")) {
      //console.log("aaaaaaaaaaaaaaaaaaaa");
  
      const prueba = document.createElement("div");
      prueba.setAttribute("id", "div5");
  
      if (c == 1) {
        //console.log("aaaaaaaaa 1");
        const p1 = document.createElement("p");
        p1.textContent = "Campo de tipo Texto:";
        p1.style.marginTop = "30px";
        p1.style.color = "white";
        p1.style.fontWeight = "bold";
  
        const opt = document.createElement("select");
        opt.setAttribute("id", "columnasT");
        opt.setAttribute("class", "caja dos");
        //opt.setAttribute("multiple", true);
        opt.textContent = "Seleccione una opción de campo Texto:";
  
        const but = document.createElement("button");
        but.setAttribute("class", "btn btn-info btn-lg btn-set");
        but.setAttribute("onclick", "Json1();");
        but.setAttribute("id", "button10");
        but.setAttribute("type", "button");
        but.textContent = "Continuar";
  
        prueba.appendChild(p1);
        prueba.appendChild(opt);
        prueba.appendChild(but);
  
        lista.appendChild(prueba);
      } else if (c == 2) {
        //console.log("aaaaaaaaa 2");
        const p1 = document.createElement("p");
        p1.textContent = "Campo de tipo Texto:";
        p1.style.marginTop = "30px";
        p1.style.color = "white";
        p1.style.fontWeight = "bold";
  
        const opt = document.createElement("select");
        opt.setAttribute("id", "columnasT");
        opt.setAttribute("class", "caja dos");
        //opt.setAttribute("multiple", true);
        opt.textContent = "Seleccione una opción de campo Texto:";
  
        const p2 = document.createElement("p");
        p2.textContent = "Campo de tipo Numerico:";
        p2.style.margin = "10px 0px 0px";
        p2.style.color = "white";
        p2.style.fontWeight = "bold";
        p2.setAttribute("id", "prf");
  
        const opt1 = document.createElement("select");
        opt1.setAttribute("id", "columnasN");
        opt1.setAttribute("class", "caja dos");
        //opt.setAttribute("multiple", true);
        opt1.textContent = "Seleccione una opción de campo numérico";
  
        const but = document.createElement("button");
        but.setAttribute("class", "btn btn-info btn-lg btn-set");
        but.setAttribute("onclick", "Json1();");
        but.setAttribute("id", "button10");
        but.setAttribute("type", "button");
        but.textContent = "Continuar";
  
        prueba.appendChild(p1);
        prueba.appendChild(opt);
        prueba.appendChild(p2);
        prueba.appendChild(opt1);
  
        prueba.appendChild(but);
  
        lista.appendChild(prueba);
      } else {
        const p1 = document.createElement("p");
        p1.textContent = "Campo de tipo Texto:";
        p1.style.marginTop = "30px";
        p1.style.color = "white";
        p1.style.fontWeight = "bold";
  
        const opt = document.createElement("select");
        opt.setAttribute("id", "columnasT");
        opt.setAttribute("class", "caja dos");
        //opt.setAttribute("multiple", true);
        opt.textContent = "Seleccione una opción de campo Texto:";
  
        const p2 = document.createElement("p");
        p2.textContent = "Campo de tipo Numerico:";
        p2.style.margin = "10px 0px 0px";
        p2.style.color = "white";
        p2.style.fontWeight = "bold";
        p2.setAttribute("id", "prf");
  
        const opt1 = document.createElement("select");
        opt1.setAttribute("id", "columnasN");
        opt1.setAttribute("class", "caja dos");
        opt1.setAttribute("multiple", true);
        opt1.textContent = "Seleccione una opción de campo numérico";
  
        const but = document.createElement("button");
        but.setAttribute("class", "btn btn-info btn-lg btn-set");
        but.setAttribute("onclick", "Json1();");
        but.setAttribute("id", "button10");
        but.setAttribute("type", "button");
        but.textContent = "Continuar";
  
        prueba.appendChild(p1);
        prueba.appendChild(opt);
        prueba.appendChild(p2);
        prueba.appendChild(opt1);
  
        prueba.appendChild(but);
  
        lista.appendChild(prueba);
      }
  
      // obtiene el valor de la lista de repositorios y lo envia a buscar a la bd
      var id = document.getElementById("linkJson").value;
      sacarJson(id, c);
    } else {
      // if (!document.getElementById("columnasT")) {}
      console.log("ya esta creado");
      const prueba = document.getElementById("div5");
  
      if (c == 1 && document.getElementById("columnasN")) {
        console.log("buena opa opc1");
        document.getElementById("prf").remove();
        document.getElementById("columnasN").remove();
  
        // var selectElement = document.getElementById("repos");
        // repo = selectElement.value;
        // nombreRepo = selectElement.options[selectElement.selectedIndex].text;
        // sacarJson(repo, c);
      } else if (c == 2) {
        console.log("buena opa opc2");
        //document.getElementById("button10").remove();
        if (!document.getElementById("columnasN")) {
          document.getElementById("button10").remove();
          const p2 = document.createElement("p");
          p2.textContent = "Campo de tipo Numerico:";
          p2.style.margin = "10px 0px 0px";
          p2.style.color = "white";
          p2.style.fontWeight = "bold";
          p2.setAttribute("id", "prf");
  
          const opt1 = document.createElement("select");
          opt1.setAttribute("id", "columnasN");
          opt1.setAttribute("class", "caja dos");
          //opt1.removeAttribute("multiple", true);
          opt1.textContent = "Seleccione una opción de campo numérico";
  
          const but = document.createElement("button");
          but.setAttribute("class", "btn btn-info btn-lg btn-set");
          but.setAttribute("onclick", "Json1();");
          but.setAttribute("id", "button10");
          but.setAttribute("type", "button");
          but.textContent = "Continuar";
  
          prueba.appendChild(p2);
          prueba.appendChild(opt1);
          prueba.appendChild(but);
  
          lista.appendChild(prueba);
        } else {
          const opt1 = document.getElementById("columnasN");
          if (opt1.hasAttribute("multiple") == true) {
            opt1.removeAttribute("multiple");
          }
        }
  
        // var selectElement = document.getElementById("repos");
        // repo = selectElement.value;
        // nombreRepo = selectElement.options[selectElement.selectedIndex].text;
        // sacarJson(repo, c);
  
        //console.log(document.getElementById("columnasN") == null)
      } else if (
        c == 3 &&
        (document.getElementById("columnasN") ||
          !document.getElementById("columnasN"))
      ) {
        console.log("buena opa opc3");
        if (document.getElementById("columnasN")) {
          const opt1 = document.getElementById("columnasN");
          opt1.setAttribute("multiple", true);
        } else {
          document.getElementById("button10").remove();
          const p2 = document.createElement("p");
          p2.textContent = "Campo de tipo Numerico:";
          p2.style.margin = "10px 0px 0px";
          p2.style.color = "white";
          p2.style.fontWeight = "bold";
          p2.setAttribute("id", "prf");
  
          const opt1 = document.createElement("select");
          opt1.setAttribute("id", "columnasN");
          opt1.setAttribute("class", "caja dos");
          opt1.setAttribute("multiple", true);
          opt1.textContent = "Seleccione una opción de campo numérico";
  
          const but = document.createElement("button");
          but.setAttribute("class", "btn btn-info btn-lg btn-set");
          but.setAttribute("onclick", "Json1();");
          but.setAttribute("id", "button10");
          but.setAttribute("type", "button");
          but.textContent = "Continuar";
  
          prueba.appendChild(p2);
          prueba.appendChild(opt1);
          prueba.appendChild(but);
  
          lista.appendChild(prueba);
        }
  
        // var selectElement = document.getElementById("repos");
        // repo = selectElement.value;
        // nombreRepo = selectElement.options[selectElement.selectedIndex].text;
        // sacarJson(repo, c);
      }
  
      var id = document.getElementById("linkJson").value;
      sacarJson(id, c);
    }
  
      document.getElementById("div5").style.visibility = "visible";
        if(document.getElementById("l2")){
          document.getElementById("l2").style.visibility = "visible";
      }
      
        document.getElementById("sect").style.visibility = "visible";
}

//OBTIENE EL REPOSITORIO DEL LINK JSON Y SE ASIGNA A VARIABLE GLOBAL, ademas reemplaza los caracteres erroneos
const sacarJson = async (id,c) => {
  
    var response;
    console.log(id);

    let request = await fetch(id);
    jsonCompleto = await request.json();
 
    console.log(jsonCompleto);

        document.getElementById("div1").style.visibility = "visible";
        document.getElementById("div2").style.visibility = "visible";
        document.getElementById("sect").style.visibility = "visible";
    
        //console.log(c);
        //jsonCompleto = response.json;

        console.log(jsonCompleto);
  
        var caracter = '�';
        //Se obtiene el objeto json por registro
        for (x in jsonCompleto) {
          //Obtengo los valores por registro 
          for (y in jsonCompleto[x]) {
            if(typeof jsonCompleto[x][y] === "object"){
              //console.log("Entre al if de object");
            }
            else if (jsonCompleto[x][y].indexOf('"') > -1){
              jsonCompleto[x][y] = jsonCompleto[x][y].replace('"','');
              jsonCompleto[x][y] = jsonCompleto[x][y].replace('"','');
              //console.log("Datos con comillas" +jsonCompleto[x][y]);
            } 
              //Se recorre cada valor de las columnas del registro
              for (let i = 0; i < jsonCompleto[x][y].length; i++) {
                //console.log("El carácter en el índice " +  i +" es '" + jsonCompleto[x][y].charAt(i) + "'")
                if(jsonCompleto[x][y].charAt(i) == caracter){           
                  jsonCompleto[x][y] = jsonCompleto[x][y].replace(caracter,"Ñ");
                  //console.log(jsonCompleto[x][y]);
                }
              }
          }
        }
  
        let data1 = await sacarColum(jsonCompleto, c); //ESPERAR A QUE SE RESUELVA
  

};


//SACA LAS COLUMNAS DEL JSON
function sacarColum(repositorio, c) {
    var i = 0;
    //var cols = new Array(1);
    var listaT;
    var listaN;
  
  //LOGICA PARA UNA SOLA COLUMNA
    if (c == "1") {
      listaT = document.getElementById("columnasT");
      //console.log(listaT);
      listaT.innerHTML = "";
  
      for (x in repositorio[0]) {
  
        for (let index = 0; index < 1; index++) {
  
          if (isNaN(repositorio[0][x]) ) {
           //console.log("Este es el texto " + repositorio[0][x]);
              if (typeof repositorio[0][x] === "object" ||
              repositorio[0][x].indexOf('/') > -1 ||
              repositorio[0][x].indexOf('@') > -1 || 
              repositorio[0][x].indexOf('#') > -1 ||
              repositorio[0][x].indexOf('{') > -1 ||
              repositorio[0][x].indexOf('}') > -1 ||
              repositorio[0][x].indexOf('.') > -1 ||
              repositorio[0][x].indexOf('-') > -1 ||
              repositorio[0][x].indexOf(',') > -1 )
              {
                //console.log(repositorio[0][x]);
                
                //Valida el guion
               if(!typeof repositorio[0][x] === "object" && repositorio[0][x].indexOf('-') > -1 && !isNaN(repositorio[0][x].charAt(0))){
                  //console.log("Este es el # "+repositorio[0][x] );
                }
                //Valida la coma en numeros que toma como texto
                if(typeof repositorio[0][x] === "string" && repositorio[0][x].indexOf(',') > -1 && !isNaN(repositorio[0][x].charAt(0))){
                  //console.log("Este es el # con coma "+repositorio[0][x]);
                }//valida que el texto pueda contener coma pero sea texto
                else if(typeof repositorio[0][x] === "string" && repositorio[0][x].indexOf(',') > -1 && isNaN(repositorio[0][x].charAt(0)) && isNaN(repositorio[0][x].charAt(1))){
                  //console.log("Este es el texto con coma " + repositorio[0][x]);
                  if(!repositorio[0][x].length > 80){
                    const lista = document.createElement("option");
                    lista.textContent = x;
                    lista.value = x;
                    listaT.add(lista);
                  }else{
                      console.log("tiene muchos caracteres");
                  }
              }
              }else{
                const lista = document.createElement("option");
                lista.textContent = x;
                lista.value = x;
                listaT.add(lista);
              }
          }
        }    
    }
  
    }
    //LOGICA PARA 2 O 3 COLUMNAS 
    else if (c == 2 || c == 3) {
      listaT = document.getElementById("columnasT");
      listaT.innerHTML = "";
      listaN = document.getElementById("columnasN");
      listaN.innerHTML = "";
  
  
      for (x in repositorio[0]) {
  
        //Valida que columna es la numerica
        for (let index = 0; index < 1; index++) {
           
          if (isNaN(repositorio[0][x]) ) {
            //console.log("Este es el texto " + repositorio[0][x]);
            
            if (typeof repositorio[0][x] === "object" ||
                repositorio[0][x].indexOf('/') > -1 ||
                repositorio[0][x].indexOf('@') > -1 || 
                repositorio[0][x].indexOf('#') > -1 ||
                repositorio[0][x].indexOf('{') > -1 ||
                repositorio[0][x].indexOf('}') > -1 ||
                repositorio[0][x].indexOf('.') > -1 ||
                repositorio[0][x].indexOf('-') > -1 ||
                repositorio[0][x].indexOf(',') > -1 )
              {
                //console.log("NO SE VA A MOSTRAR");
  
              //Valida el guion
              if(!typeof repositorio[0][x] === "object" && repositorio[0][x].indexOf('-') > -1 && !isNaN(repositorio[0][x].charAt(0))){
                console.log("Este es el # "+repositorio[0][x] );
              }
              //Valida la coma en numeros que toma como texto
              if(typeof repositorio[0][x] === "string" && repositorio[0][x].indexOf(',') > -1 && !isNaN(repositorio[0][x].charAt(0))){
                //console.log("Este es el # con coma "+repositorio[0][x]);
              }else if(typeof repositorio[0][x] === "string" && repositorio[0][x].indexOf(',') > -1 && isNaN(repositorio[0][x].charAt(0)) && isNaN(repositorio[0][x].charAt(1))){
                //console.log("Este es el texto con coma " + repositorio[0][x]);
                if(!repositorio[0][x].length > 80){
                  const lista = document.createElement("option");
                  lista.textContent = x;
                  lista.value = x;
                  listaT.add(lista);
                }else{
                    console.log("tiene muchos caracteres");
                }
            }
              }else{
                const lista = document.createElement("option");
                lista.textContent = x;
                lista.value = x;
                listaT.add(lista);
              }
          }
          else {
            //console.log("Este es el numero " + repositorio[0][x]); 
            if(repositorio[0][x].length > 3){
             // console.log("no lo tendremos en cuenta");
            }else{
              const lista1 = document.createElement("option");
              lista1.textContent = x;
              lista1.value = x;
              listaN.add(lista1);
            }
          }
        }    
    }
  
      if (listaN.length == 0) {
        document.getElementById("prf").remove();
        document.getElementById("columnasN").remove();
        window.alert("No existen datos numericos para este repositorio, seleccione el valor '1' de cantidad de columnas");
        document.getElementById("div5").style.visibility = "hidden";
        if(document.getElementById("l2")){
          document.getElementById("l2").style.visibility = "hidden";
        }
        document.getElementById("sect").style.visibility = "hidden";
      }
    }
}

//CONTINUAR, pone los valores en lista
function Json1() {
    if (!document.getElementById("l2")) {
      const lista = document.querySelector(".desaparece-3");
      lista.setAttribute("id", "l2");
  
      const p = document.createElement("p");
      p.style.color = "white";
      p.textContent =
        "Ahora selecciona los valores que deseas graficar. (Máximo 6)";
  
      const opt = document.createElement("select");
      opt.setAttribute("id", "valores");
      opt.setAttribute("class", "caja");
      opt.setAttribute("multiple", true);
      opt.textContent = "Seleccione una opción";
  
      const but = document.createElement("button");
      but.setAttribute("class", "btn btn-info btn-lg btn-set");
      but.setAttribute("onclick", "json3();");
      but.setAttribute("type", "button");
      but.textContent = "Graficar";
  
      lista.appendChild(p);
      lista.appendChild(opt);
      lista.appendChild(but);
  
      //if(document.getElementById("opci").value)
      //console.log(document.getElementById("opci").value)
  
      if (document.getElementById("opci").value == 1) {
        var selectElement = document.getElementById("columnasT");
        var campo = selectElement.value;
  
        var selected = [];
        for (var option of selectElement.options) {
          if (option.selected) {
            selected.push(option.value);
          }
        }
        //console.log(selected)
      } else {
        if(document.getElementById("columnasT")){
          var selectElement = document.getElementById("columnasT");
          var selected = [];
          for (var option of selectElement.options) {
            if (option.selected) {
              selected.push(option.value);
            }
          }
        }
        if(document.getElementById("columnasN")){
          var selectElement2 = document.getElementById("columnasN");
          for (var option of selectElement2.options) {
            if (option.selected) {
              selected.push(option.value);
            }
          }
        }
        
        
      }
  
     // console.log(selected); //variables seleccionadas de los campos
  
      sacarVal(jsonCompleto, selected);
    } else {
      if (document.getElementById("opci").value == 1) {
        var selectElement = document.getElementById("columnasT");
        var campo = selectElement.value;
  
        var selected = [];
        for (var option of selectElement.options) {
          if (option.selected) {
            selected.push(option.value);
          }
        }
      } else {
        if(document.getElementById("columnasT")){
          var selectElement = document.getElementById("columnasT");
          var selected = [];
          for (var option of selectElement.options) {
            if (option.selected) {
              selected.push(option.value);
            }
          }
        }
        if(document.getElementById("columnasN")){
          var selectElement2 = document.getElementById("columnasN");
          for (var option of selectElement2.options) {
            if (option.selected) {
              selected.push(option.value);
            }
          }
        }
      }
  
      console.log(selected); //variables seleccionadas de los campos
  
      sacarVal(jsonCompleto, selected);
    }
  
    //selected = null;
}

//CARGA EL SELECT DE LOS REPOSITORIOS DE LA BASE DE DATOS Y LA PONE EN LA LISTA
const Json = async () => {
        
  if (!document.getElementById("l1")) {
    const lista = document.querySelector(".desaparece-1");
    lista.setAttribute("id", "l1");
  
    const p1 = document.createElement("p");
    p1.style.color = "white";
    p1.textContent = "Ingrese por favor el link JSON";

    const opt = document.createElement("input");
    opt.setAttribute("id", "linkJson");
    opt.setAttribute("class", "caja dos");

    const but = document.createElement("button");
    but.setAttribute("onClick", "Json2();");
    but.setAttribute("class", "btn btn-info btn-lg btn-set");
    but.setAttribute("type", "button");
    but.textContent = "Continuar";
    
      lista.appendChild(p1);
      lista.appendChild(opt);
      lista.appendChild(but);
  }
};
  
  
  //SACA LOS VALORES DEL JSON FILTRADOS POR COLUMNA
  function sacarVal(repositorio, campo) {
    var lista1 = null;
    //var lista2 = null;
    //console.log(campo);
    var cols2 = new Array(1);
  
    const listaVal = document.getElementById("valores");
    listaVal.innerHTML = "";
    //console.log(campo.length);


    console.log(repositorio);
  
    if (campo.length == 1 && document.getElementById("opci").value == 1) {
      document.getElementById("div2").style.visibility = "visible";
      document.getElementById("sect").style.visibility = "visible";
      document.getElementById("div1").style.visibility = "visible";
      if (!isNaN(repositorio[1][campo[0]])) {
        window.alert(
          "Debes seleccionar una columna de tipo texto, por favor vuelve a intentarlo"
        );
      } else {
        for (var i = 0; i < repositorio.length; i++) {
          cols2.push(repositorio[i][`${campo}`]);
        }
        unico = true;
        barras = false;
        //console.log(cols2)
      }
    } 
    else if (campo.length == 2 && document.getElementById("opci").value == 2){
        document.getElementById("div2").style.visibility = "visible";
        document.getElementById("sect").style.visibility = "visible";
        document.getElementById("div1").style.visibility = "visible";
      
        var texto;
        //Valida que columna es la numerica
        for (let index = 0; index < campo.length; index++) {
          if (isNaN(repositorio[1][campo[index]])) {
            //console.log("Este es el texto " + campo[index]);
            texto = campo[index];
          } else {
            num = campo[index];
            //console.log("Este es el numero " + num);
            campoNum = campo[index];
          }
        }
        //for para traer los valores por columna filtrada
        for (var i = 0; i < repositorio.length; i++) {
          cols2.push(repositorio[i][`${texto}`]);
        }
        barras = true;
        unico = false;
      // }} else
     
  
    //console.log(cols2);
  
    //guardar en un vector los valores e ir filtrando para que no este repetido
    let uniqueChars = [...new Set(cols2)];
  
    //console.log(uniqueChars);
  
    for (var i = 0; i < uniqueChars.length; i++) {
      //lista1 = document.createElement("option");
      if (uniqueChars[i] != undefined) {
        lista1 = document.createElement("option");
        lista1.textContent = uniqueChars[i];
        lista1.value = uniqueChars[i];
        listaVal.add(lista1);
      }
    }
    //console.log(uniqueChars);
    return uniqueChars;
      
      }
      else if(campo.length == 3 && document.getElementById("opci").value == 3)
      {
  
      document.getElementById("div2").style.visibility = "visible";
      document.getElementById("sect").style.visibility = "visible";
      document.getElementById("div1").style.visibility = "visible";
      //console.log("Estamos en el if 3 ")
      
        var texto;
        //Valida que columna es la numerica
        for (let index = 0; index < campo.length; index++) {
          if (isNaN(repositorio[1][campo[index]])) {
            //console.log("Este es el texto " + campo[index]);
            texto = campo[index];
          } else {
            num = campo[index];
            //console.log("Este es el numero " + num);
            campoNum = campo[index];
          }
        }
        //for para traer los valores por columna filtrada
        
        barras = true;
        unico = false;
       
       for (var i = 0; i < repositorio.length; i++) {
        cols2.push(repositorio[i][`${texto}`]);
      }
    
  }else if (campo.length == 0) {
    window.alert("Debes seleccionar una columna,por favor vuelve a intentarlo");
    document.getElementById("div2").style.visibility = "hidden";
  }else{
    window.alert("Por favor selecciona máximo 2 valores de tipo numerico");
  }
  //guardar en un vector los valores e ir filtrando para que no este repetido
  let uniqueChars = [...new Set(cols2)];
  
  //console.log(uniqueChars);
  
  for (var i = 0; i < uniqueChars.length; i++) {
    //lista1 = document.createElement("option");
    if (uniqueChars[i] != undefined) {
      lista1 = document.createElement("option");
      lista1.textContent = uniqueChars[i];
      lista1.value = uniqueChars[i];
      listaVal.add(lista1);
    }
  }
  //console.log(uniqueChars);
  return uniqueChars;
  }
     
  //Funcion que obtiene los valores posibles a graficar CONTINUAR 2
  const json3 = () => {
    //console.log("HOLA AOPAAAAAAAAA")
  
    var selected = [];
    for (var option of document.getElementById("valores").options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    sel = selected;
    //console.log(selected);
  
    if (selected.length > 6) {
      window.alert("Maximo 6 valores, por favor selecciona menos valores");
    } else {
      printCharts(jsonCompleto, selected);
    }
  };
  
  //PASAR PARAMETRO IDFIGURA, TEXTO PARRAFO, IDBOTON, IDCANVAS
  function chart(id, titulo, chart) {
  
    if(id==2 || id==1){
    //   if(id==1){
        // const sect = document.createElement("div");
        // sect.setAttribute("class", "cof");
        // sect.setAttribute("id", "secti"+id);
        // sect.style.width = "800px";
        // sect.style.height = "800px";
        // console.log(secti2)
  
        console.log("buena apa estoy en chart 1")
      // const sect = document.getElementById("secti1");
      // console.log(sect)
        const fig = document.createElement("figure");
        fig.setAttribute("id", id + "f");
        // fig.setAttribute("class", "cof");
        // fig.style.padding = "10px";
        fig.style.width = "600px";
        
        
        //c1=document.getElementById("1f");
      
        const p = document.createElement("p");
        p.style.color = "white";
        p.textContent = titulo;
      
        const can = document.createElement("canvas");
        can.setAttribute("id", chart);
        // can.setAttribute("class", "cof");
        // can.style.setProperty("width","780px", "important") 
        // can.style.setProperty("height","780px", "important") 
      
        const but = document.createElement("button");
        but.setAttribute("class", "btn btn-info");
        but.setAttribute(
          "onclick",
          "descargarChart(" + "'" + `${chart}` + "'" + ");"
        );
        but.style.marginBottom = "20px";
        but.setAttribute("id", "button" + id);
        but.setAttribute("type", "button");
        but.textContent = "Descargar chart como PNG";
      
        // console.log(secti)
        fig.appendChild(p);
        fig.appendChild(can);
        
        // sect.appendChild(fig);
        
        lista.appendChild(fig);
        lista.appendChild(but);
    }
        
    else{
     
      
        const fig = document.createElement("div");
        fig.setAttribute("id", id + "f");
        fig.setAttribute("class", "cof");
        fig.style.width = "700px";
        
        //c1=document.getElementById("1f");
      
        const p = document.createElement("p");
        p.style.color = "white";
        p.textContent = titulo;
      
        const can = document.createElement("canvas");
        can.setAttribute("id", chart);
      
        const but = document.createElement("button");
        but.setAttribute("class", "btn btn-info");
        but.setAttribute(
          "onclick",
          "descargarChart(" + "'" + `${chart}` + "'" + ");"
        );
        but.style.marginBottom = "20px";
        but.setAttribute("id", "button" + id);
        but.setAttribute("type", "button");
        but.textContent = "Descargar chart como PNG";
      
        
        fig.appendChild(p);
        fig.appendChild(can);
        lista.appendChild(fig);
        lista.appendChild(but);
        
      }
      
    
  }
  
  //FUNCION QUE CREA LOS GRAFICOS
  function printCharts(repositorio, valor) {
    //para que aparezca en el front los canvas y cambiar la propiedad en el css
  
    //console.log(repositorio.filter((eachData) => eachData[`${campoGraf}`] === `${valor[0]}`));
    //console.log(valor)
    var colT;
    var colN;
    if (valor.length != 0) {
      if (
        document.getElementById("opci").value == 1 ||
        !document.getElementById("columnasN")
      ) {
        console.log("estamos en el if 1")
        //GRAFICOS CON UNA SOLA COLUMNA SELECCIONADA
  
        colT = document.getElementById("columnasT").value;
        // console.log(
        //   jsonCompleto.filter((eachData) => eachData[`${colT}`] === `${valor[0]}`)
        // );
        val = document.getElementById("valores").value;
  
        let titulo;
        titulo = "Cantidad de datos por " + colT;
        titulo = titulo.toUpperCase();
        if (
          jsonCompleto.filter((eachData) => eachData[`${colT}`] === `${valor[0]}`)
            .length != 0
        ) {
          if (unico == true) {
            
            if(document.getElementById("opci").value == 1) {
              console.log("mr fantatico")
              if (document.getElementById("chart7")) {
                document.getElementById("7f").remove();
                document.getElementById("button7").remove();
                if (document.getElementById("chart8")) {
                  console.log("aqui estoyyyyyyyyyyyy3");
                  document.getElementById("8f").remove();
                  document.getElementById("button8").remove();
                }
                if (document.getElementById("chart9")) {
                  document.getElementById("9f").remove();
                  document.getElementById("button9").remove();
                }
              }
  
              if (!document.getElementById("chart1")) {
                console.log("buena paaaaaaaaaaaaa");
                chart(1, "Gráfico de área polar", "chart1");
                radialChart(repositorio, "chart1", valor, colT, titulo);
                chart(2, "Gráfico de dona", "chart2");
                donasChart(repositorio, "chart2", valor, colT, titulo);
              } else {
                radialChart(repositorio, "chart1", valor, colT, titulo);
                donasChart(repositorio, "chart2", valor, colT, titulo);
              }
  
              if (
                document.getElementById("chart3") &&
                document.getElementById("chart4") &&
                document.getElementById("chart5") &&
                document.getElementById("chart6")
              ) {
                //console.log("HOLA POAAAAAAAAA");
                console.log("aqui estoyyyyyyyyyyyy1");
                document.getElementById("3f").remove();
                document.getElementById("4f").remove();
                document.getElementById("5f").remove();
                document.getElementById("6f").remove();
                document.getElementById("button3").remove();
                document.getElementById("button4").remove();
                document.getElementById("button5").remove();
                document.getElementById("button6").remove();
              } else if (
                document.getElementById("chart3") &&
                document.getElementById("chart6")
              ) {
                console.log("aqui estoyyyyyyyyyyyy2");
                document.getElementById("3f").remove();
                document.getElementById("6f").remove();
                document.getElementById("button3").remove();
                document.getElementById("button6").remove();
                if (document.getElementById("chart4")) {
                  document.getElementById("4f").remove();
                  document.getElementById("button4").remove();
                }
              }
            }
            //unico=false;
          }
        } else {
          window.alert(
            "Porfavor selecciona valores correspondientes al set de datos"
          );
        }
      } else if (document.getElementById("opci").value == 2) {
        colT = document.getElementById("columnasT").value;
        colN = document.getElementById("columnasN").value;
        val = document.getElementById("valores").value;
        if (document.getElementById("chart7")) {
          document.getElementById("7f").remove();
          document.getElementById("button7").remove();
          if (document.getElementById("chart8")) {
            document.getElementById("8f").remove();
            document.getElementById("button8").remove();
          }
          if (document.getElementById("chart9")) {
            document.getElementById("9f").remove();
            document.getElementById("button9").remove();
          }
        }
  
        let titulo;
        titulo = colN + " por " + colT;
        titulo = titulo.toUpperCase();
        if (
          jsonCompleto.filter((eachData) => eachData[`${colT}`] === `${valor[0]}`)
            .length != 0
        ) {
          //GRAFICOS CON DOS COLUMNAS SELECCIONADAS
  
          if (barras == true) {
            if (valor < 1) {
              window.alert("Selecciona minimo un valor por favor");
            } else {
              if (!document.getElementById("chart3")) {
                chart(3, "Gráfico de barras", "chart3");
                barrasChart(repositorio, "chart3", valor, colT, titulo);
  
                chart(6, "Gráfico de pastel", "chart6");
                pastelChart(repositorio, "chart6", valor, colT, titulo);
              } else {
                barrasChart(repositorio, "chart3", valor, colT, titulo);
                pastelChart(repositorio, "chart6", valor, colT, titulo);
              }
              if (document.getElementById("chart4")) {
                if (document.getElementById("chart5")) {
                  document.getElementById("5f").remove();
                  document.getElementById("button5").remove();
                }
                document.getElementById("4f").remove();
                document.getElementById("button4").remove();
              }
              if (valor.length == 2) {
                if (!document.getElementById("chart4")) {
                  chart(4, "Gráfico de lineas", "chart4");
                  lineasChart(repositorio, "chart4", valor, colT, titulo);
                } else {
                  lineasChart(repositorio, "chart4", valor, colT, titulo);
                }
                if (document.getElementById("chart5")) {
                  document.getElementById("5f").remove();
                  document.getElementById("button5").remove();
                }
              } else if (valor.length >= 3) {
                if (!document.getElementById("chart4")) {
                  chart(4, "Gráfico de lineas", "chart4");
                  lineasChart(repositorio, "chart4", valor, colT, titulo);
                  chart(5, "Gráfico de radar", "chart5");
                  radarChart(repositorio, "chart5", valor, colT, titulo);
                } else {
                  lineasChart(repositorio, "chart4", valor, colT, titulo);
                  radarChart(repositorio, "chart5", valor, colT, titulo);
                } //else if(
              }
              if (
                document.getElementById("chart1") ||
                document.getElementById("chart2")
              ) {
                // document.getElementById("secti1").remove();
                // document.getElementById("secti2").remove();
                document.getElementById("1f").remove();
                document.getElementById("2f").remove();
                document.getElementById("button1").remove();
                document.getElementById("button2").remove();
              }
  
              //barras=false;
            }
          }
        } else {
          window.alert(
            "Porfavor selecciona valores correspondientes al set de datos"
          );
        }
      } else if (document.getElementById("opci").value == 3) {
        colT = document.getElementById("columnasT").value;
        //colN = document.getElementById("columnasN").value;
        //val = document.getElementById("valores").value;
        var selected = [];
        for (var option of document.getElementById("columnasN").options) {
          if (option.selected) {
            selected.push(option.value);
          }
        }
  
        let titulo;
        titulo =
          "Cantidad de " +
          selected[0] +
          " y " +
          selected[1] +
          " por " +
          colT;
          titulo = titulo.toUpperCase();
        if (
          jsonCompleto.filter((eachData) => eachData[`${colT}`] === `${valor[0]}`)
            .length != 0
        ) {
          console.log("Vamos a graficar 3 columnas opa");
          if (barras == true) {
            console.log(titulo);
            if (valor.length <= 2) {
              console.log("Vamos a graficar sin radar");
              if (!document.getElementById("chart7")) {
                chart(7, "Gráfico Mixto barra y linea", "chart7");
                barlineaChart(repositorio,"chart7",valor,colT,titulo,selected);
                chart(8, "Gráfico Mixto barra y barra", "chart8");
                barbarChart(repositorio, "chart8", valor, colT, titulo, selected);
              } else {
                barlineaChart(repositorio,"chart7",valor,colT,titulo,selected);
                barbarChart(repositorio, "chart8", valor, colT, titulo, selected);
              }
              if(document.getElementById("chart9")){
                document.getElementById("9f").remove();
                document.getElementById("button9").remove();
              }
            } else {
              console.log("Vamos a graficar con radar");
              if (!document.getElementById("chart7")) {
                chart(7, "Gráfico Mixto barra y linea", "chart7");
                barlineaChart(repositorio,"chart7",valor,colT,titulo,selected);
                chart(8, "Gráfico Mixto barra y barra", "chart8");
                barbarChart(repositorio, "chart8", valor, colT, titulo, selected);
                chart(9, "Gráfico Mixto radar multiple", "chart9");
                radarMultiChart(repositorio, "chart9", valor, colT, titulo,selected);
              } else {
                barlineaChart(repositorio,"chart7",valor,colT,titulo,selected);
                barbarChart(repositorio, "chart8", valor, colT, titulo, selected);
                if(!document.getElementById("chart9")){
                  chart(9, "Gráfico Mixto radar multiple", "chart9");
                  radarMultiChart(repositorio, "chart9", valor, colT, titulo,selected);
                }else{
                  radarMultiChart( repositorio, "chart9", valor, colT, titulo, selected );
                } 
              }
            }
              if (document.getElementById("chart1")) {
                // document.getElementById("secti1").remove();
                // document.getElementById("secti2").remove();
                if (document.getElementById("chart2")) {
                  document.getElementById("2f").remove();
                  document.getElementById("button2").remove();
                }
                
                document.getElementById("1f").remove();
                document.getElementById("button1").remove();
              }
              if (
                document.getElementById("chart3") &&
                document.getElementById("chart6")
              ) {
                // console.log("aqui estoyyyyyyyyyyyy2")
                document.getElementById("3f").remove();
                document.getElementById("6f").remove();
                document.getElementById("button3").remove();
                document.getElementById("button6").remove();
                if (document.getElementById("chart4")) {
                  document.getElementById("4f").remove();
                  document.getElementById("button4").remove();
                }
                if (document.getElementById("chart5")) {
                  document.getElementById("5f").remove();
                  document.getElementById("button5").remove();
                }
              }
            
          }
        } else {
          window.alert(
            "Porfavor selecciona valores correspondientes al set de datos"
          );
        }
      }
    } else {
      window.alert("No selecciono ningun valor, por favor seleccione minimo uno");
    }
  }
  
  //FUNCION QUE CREA EL GRAFICO RADIAL
  function radialChart(repositorio, id, valor, campo, titulo) {
    const labels = [];
    for (let i = 0; i < valor.length; i++) {
      //Si el label tiene mas de 15 caracteres poner puntos suspensivos
      //console.log("Este es el valor de label " + valor[i]);
      //if(valor[i].length > 20){
      //  nom =  valor[i].substring(0,20)+"...";
      // labels[i] = nom;
      //}else{
      labels[i] = valor[i];
      //}
    }
  
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campo}`] === `${valor[i]}`
      ).length;
    }
  
    // console.log(repositorio.filter(
    //   (eachData) => eachData[`${campo}`] === `${valor[i]}`));
    //console.log(datos);
  
    //Seccion para sacar los porcentajes en los label
    var total = 0,
      formula = 0;
    for (let i = 0; i < datos.length; i++) {
      total += datos[i];
    }
  
    //for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      formula = ((datos[i] / total) * 100).toFixed(1);
      labels[i] = labels[i] + " = " + datos[i] + " de " + total + "\n";
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
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      type: "polarArea",
      data: data,
  
      options: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "black",
            },
          },
          title: {
            display: true,
            text: titulo,
            color: "black",
            // fontSize: "50px"
          },
          tooltip: {
            enabled: true,
          },
          datalabels: {
            color: "black",
            font: {
              //weight: 'bold',
              size: 15,
            },
            //fontSize:'15px',
            formatter: (value, context) => {
              const datapoints = context.chart.data.datasets[0].data;
              function totalSum(total, datapoint) {
                return total + datapoint;
              }
              const totalvalue = datapoints.reduce(totalSum, 0);
              const percentageValue = ((value / totalvalue) * 100).toFixed(1);
  
              return `${percentageValue}%`;
            },
          },
        },
      },
      plugins: [ChartDataLabels, plugin],
    };
  
    if (chart2 != undefined || chart2 != null) {
      chart2.destroy();
    }
  
    chart2 = new Chart(id, config);
  }
  
  //FUNCION QUE CREA EL GRAFICO DE DONA
  function donasChart(repositorio, id, valor, campo, titulo) {
    const labels = [];
    let nom = null;
  
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
    }
  
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campo}`] === `${valor[i]}`
      ).length;
    }
  
    //Seccion para sacar los porcentajes en los label
    var total = 0,
      formula = 0;
    for (let i = 0; i < datos.length; i++) {
      total += datos[i];
    }
  
    //for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      formula = ((datos[i] / total) * 100).toFixed(1);
      labels[i] = labels[i] + " = " + datos[i] + " de " + total + "\n";
    }
  
    const data = {
      //parametros de data
      labels: labels,
      datasets: [
        {
          data: datos,
  
          borderColor: styles.color.solids.map((eachColor) => eachColor),
          backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
          borderWidth: 1,
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      //estilos y opciones del grafico
  
      type: "doughnut",
      data: data,
      // plugins: [plugin],
      options: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "black",
            },
          },
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
          tooltip: {
            enabled: true,
          },
          datalabels: {
            color: "black",
            font: {
              //weight: 'bold',
              size: 15,
            },
            formatter: (value, context) => {
              const datapoints = context.chart.data.datasets[0].data;
              function totalSum(total, datapoint) {
                return total + datapoint;
              }
              const totalvalue = datapoints.reduce(totalSum, 0);
              const percentageValue = ((value / totalvalue) * 100).toFixed(1);
  
              return `${percentageValue}%`;
            },
          },
        },
      },
      plugins: [ChartDataLabels, plugin],
    };
  
    if (chart3 != undefined || chart3 != null) {
      chart3.destroy();
    }
  
    chart3 = new Chart(id, config);
  }
  
  //FUNCION QUE CREA EL GRAFICO DE BARRAS
  function barrasChart(repositorio, id, valor, campo, titulo) {
    const labels = [];
    //guarda los labels del grafico
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
    }
  
    //Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campo}`] === `${valor[i]}`
      );
    }
    var cont = [],
      c = 0;
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c = 0;
    }
  
    var total = 0;
    for (let i = 0; i < cont.length; i++) {
      total += cont[i];
    }
  
    //for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      labels[i] = labels[i] + " = " + cont[i] + " de " + total;
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
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      //estilos y opciones del grafico
  
      type: "bar",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
          legend: {
            //color:"black",
            labels: {
              color: "black",
            },
          },
          datalabels: {
            color: "black",
            font: {
              //weight: 'bold',
              size: 15,
            },
            //fontSize:'15px',
            formatter: (value, context) => {
              const datapoints = context.chart.data.datasets[0].data;
              function totalSum(total, datapoint) {
                return total + datapoint;
              }
              const totalvalue = datapoints.reduce(totalSum, 0);
              const percentageValue = ((value / totalvalue) * 100).toFixed(1);
  
              return `${percentageValue}%`;
            },
          },
        },
        scales: {
          y: {
            ticks: {
              color: "black",
            },
          },
          //   x:{
          //    ticks: {
          //      color: "black",
          //     }
          //   }
        },
      },
  
      plugins: [plugin, ChartDataLabels],
    };
  
    if (chart4 != undefined || chart4 != null) {
      chart4.destroy();
    }
    chart4 = new Chart(id, config);
  }
  
  //FUNCION QUE CREA EL GRAFICO DE LINEAS
  function lineasChart(repositorio, id, valor, campo, titulo) {
    const labels = [];
    //guarda los labels del grafico
    let nom = null;
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
    }
  
    //Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campo}`] === `${valor[i]}`
      );
    }
    var cont = [],
      c = 0;
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c = 0;
    }
  
    var total = 0;
    for (let i = 0; i < cont.length; i++) {
      total += cont[i];
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
          label: campo + " = " + total,
          data: cont,
          borderColor: styles.color.solids.map((eachColor) => eachColor),
          backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      //estilos y opciones del grafico
  
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "black",
            },
          },
          x: {
            ticks: {
              color: "black",
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "black",
            },
          },
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
          tooltip: {
            enabled: true,
          },
        },
      },
  
      plugins: [plugin],
    };
  
    if (chart5 != undefined || chart5 != null) {
      chart5.destroy();
    }
    chart5 = new Chart(id, config);
  }
  
  //FUNCION QUE CREA EL GRAFICO RADIAL
  function radarChart(repositorio, id, valor, campo, titulo) {
    const labels = [];
    //guarda los labels del grafico
    let nom = null;
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
    }
  
    //Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campo}`] === `${valor[i]}`
      );
    }
    var cont = [],
      c = 0;
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c = 0;
    }
  
    var total = 0;
    for (let i = 0; i < cont.length; i++) {
      total += cont[i];
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
          label: campo + " = " + total,
          data: cont,
          borderColor: styles.color.solids.map((eachColor) => eachColor),
          backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
          pointLabels: "red",
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      //estilos y opciones del grafico
  
      type: "radar",
      data: data,
      options: {
        plugins: {
          legend: {
            //position: "bottom",
            labels: {
              color: "black",
            },
          },
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
        },
      },
      plugins: [plugin],
    };
  
    if (chart6 != undefined || chart6 != null) {
      chart6.destroy();
    }
  
    chart6 = new Chart(id, config);
  }
  
  //FUNCION QUE CREA EL GRAFICO DE PASTEL
  function pastelChart(repositorio, id, valor, campo, titulo) {
    const labels = [];
    //guarda los labels del grafico
    let nom = null;
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
    }
  
    //Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campo}`] === `${valor[i]}`
      );
    }
    var cont = [],
      c = 0;
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${num}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c = 0;
    }
  
    //Seccion para sacar los porcentajes en los label
    var total = 0,
      formula = 0;
    for (let i = 0; i < cont.length; i++) {
      total += cont[i];
    }
  
    // for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      //formula = ((cont[i]/total)*100).toFixed(1);
      labels[i] = labels[i] + " = " + cont[i] + " de " + total + "\n";
    }
  
    //armado de grafico
    const data = {
      //parametros de data
      labels: labels,
      datasets: [
        {
          data: cont,
          borderColor: styles.color.solids.map((eachColor) => eachColor),
          backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    // };
  
    const config = {
      //estilos y opciones del grafico
      type: "pie",
      data: data,
      options: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "black",
            },
          },
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
          tooltip: {
            enabled: true,
          },
          datalabels: {
            color: "black",
            font: {
              //weight: 'bold',
              size: 15,
            },
            formatter: (value, context) => {
              const datapoints = context.chart.data.datasets[0].data;
              function totalSum(total, datapoint) {
                return total + datapoint;
              }
              const totalvalue = datapoints.reduce(totalSum, 0);
              const percentageValue = ((value / totalvalue) * 100).toFixed(1);
  
              return `${percentageValue}%`;
            },
          },
        },
      },
      plugins: [ChartDataLabels, plugin],
    };
  
    if (chart7 != undefined || chart7 != null) {
      chart7.destroy();
    }
  
    chart7 = new Chart(id, config);
  }
  
  function barlineaChart(repositorio, id, valor, campoT, titulo, campoN) {
    const labels = [];
    const labels1 = [];
    //guarda los labels del grafico
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
      labels1[i] = valor[i];
    }
  
    //Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campoT}`] === `${valor[i]}`
      );
    }
  
    var cont = [],
      c = 0,
      cont1 = [],
      c1 = 0;
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${campoN[0]}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c = 0;
    }
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c1 += parseInt(datos[j][i][`${campoN[1]}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont1[j] = c1;
      c1 = 0;
    }
  
    var total = 0;
    var total1 = 0;
    for (let i = 0; i < cont.length; i++) {
      total += cont[i]; //+ cont1[i];
      total1 += cont1[i];
    }
  
    // for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      // labels[i] = labels[i] + " = " + cont[i] + " de " + total;
      labels[i] = labels[i] + " = " + cont[i];
    }
  
    //armado de grafico
    const data = {
      //parametros de data
      labels: labels,
      datasets: [
        {
          type: "bar",
          labels: labels,
          label: campoN[0] + " = " + total,
          data: cont,
          borderColor: styles.color.solids[0],
          backgroundColor: styles.color.alphas[0],
        },
        {
          type: "line",
          labels: labels1,
          label: campoN[1] + " = " + total1,
          data: cont1,
          borderColor: styles.color.solids[2],
          backgroundColor: styles.color.alphas[2],
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      //estilos y opciones del grafico
  
      type: "scatter",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
          legend: {
            //color:"black",
            labels: {
              color: "black",
            },
          },
          datalabels: {
            color: "black",
            font: {
              //weight: 'bold',
              size: 13,
            },
            //fontSize:'15px',
            formatter: (value, context) => {
              const datapoints = context.chart.data.datasets[0].data;
              function totalSum(total, datapoint) {
                return total + datapoint;
              }
              const totalvalue = datapoints.reduce(totalSum, 0);
              const percentageValue = ((value / totalvalue) * 100).toFixed(1);
  
              return `${percentageValue}%`;
            },
          },
        },
        scales: {
          y: {
            ticks: {
              color: "black",
            },
          },
          //   x:{
          //    ticks: {
          //      color: "black",
          //     }
          //   }
        },
      },
      plugins: [plugin, ChartDataLabels],
    };
  
    if (chart8 != undefined || chart8 != null) {
      chart8.destroy();
    }
    chart8 = new Chart(id, config);
  }
  
  function barbarChart(repositorio, id, valor, campoT, titulo, campoN) {
    const labels = [];
    const labels1 = [];
    //guarda los labels del grafico
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
      labels1[i] = valor[i];
    }
  
    //Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campoT}`] === `${valor[i]}`
      );
    }
  
    var cont = [],
      c = 0,
      cont1 = [],
      c1 = 0;
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${campoN[0]}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c = 0;
    }
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c1 += parseInt(datos[j][i][`${campoN[1]}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont1[j] = c1;
      c1 = 0;
    }
  
    var total = 0;
    var total1 = 0;
    for (let i = 0; i < cont.length; i++) {
      total += cont[i];
      total1 += cont1[i]; //+ cont1[i];
    }
  
    // for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      // labels[i] = labels[i] + " = " + cont[i] + " de " + total;
      labels[i] = labels[i] + " = " + cont[i];
    }
  
    //armado de grafico
    const data = {
      //parametros de data
      labels: labels,
      datasets: [
        {
          type: "bar",
          labels: labels,
          label: campoN[0] + " = " + total,
          data: cont,
          borderColor: styles.color.solids[4],
          backgroundColor: styles.color.alphas[4],
        },
        {
          type: "bar",
          labels: labels1,
          label: campoN[1] + " = " + total1,
          data: cont1,
          borderColor: styles.color.solids[3],
          backgroundColor: styles.color.alphas[3],
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      //estilos y opciones del grafico
  
      type: "scatter",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
          legend: {
            //color:"black",
            labels: {
              color: "black",
            },
          },
          datalabels: {
            color: "black",
            font: {
              //weight: 'bold',
              size: 15,
            },
            //fontSize:'15px',
            formatter: (value, context) => {
              const datapoints = context.chart.data.datasets[0].data;
              function totalSum(total, datapoint) {
                return total + datapoint;
              }
              const totalvalue = datapoints.reduce(totalSum, 0);
              const percentageValue = ((value / totalvalue) * 100).toFixed(1);
  
              return `${percentageValue}%`;
            },
          },
        },
        scales: {
          y: {
            ticks: {
              color: "black",
            },
          },
          //   x:{
          //    ticks: {
          //      color: "black",
          //     }
          //   }
        },
      },
      plugins: [plugin, ChartDataLabels],
    };
  
    if (chart9 != undefined || chart9 != null) {
      chart9.destroy();
    }
    chart9 = new Chart(id, config);
  }
  
  function radarMultiChart(repositorio, id, valor, campoT, titulo, campoN) {
    const labels = [];
    const labels1 = [];
    //guarda los labels del grafico
    for (let i = 0; i < valor.length; i++) {
      labels[i] = valor[i];
      labels1[i] = valor[i];
    }
  
    //Filtrar las canntidades de veces que se encuentre el registro numerico y sumarlo
    var datos = [];
  
    for (let i = 0; i < valor.length; i++) {
      datos[i] = repositorio.filter(
        (eachData) => eachData[`${campoT}`] === `${valor[i]}`
      );
    }
  
    var cont = [],
      c = 0,
      cont1 = [],
      c1 = 0;
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c += parseInt(datos[j][i][`${campoN[0]}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont[j] = c;
      c = 0;
    }
  
    for (let j = 0; j < valor.length; j++) {
      for (let i = 0; i < datos[j].length; i++) {
        c1 += parseInt(datos[j][i][`${campoN[1]}`], 10);
        //console.log("Este son los valores " + datos[j][i][`${num}`]);
      }
      cont1[j] = c1;
      c1 = 0;
    }
  
    var total = 0;
    var total1 = 0;
    for (let i = 0; i < cont.length; i++) {
      total += cont[i];
      total1 += cont1[i]; //+ cont1[i];
    }
  
    // for que retorna los datos en el label
    for (let i = 0; i < labels.length; i++) {
      // labels[i] = labels[i] + " = " + cont[i] + " de " + total;
      labels[i] = labels[i] + " = " + cont[i];
    }
  
    //armado de grafico
    const data = {
      //parametros de data
      labels: labels,
      datasets: [
        {
          //type:'bar',
          labels: labels,
          label: campoN[0] + " = " + total,
          data: cont,
          borderColor: styles.color.solids.map((eachColor) => eachColor),
          backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
        },
        {
          //type:'bar',
          labels: labels1,
          label: campoN[1] + " = " + total1,
          data: cont1,
          borderColor: styles.color.solids.map((eachColor) => eachColor),
          backgroundColor: styles.color.alphas.map((eachColor) => eachColor),
        },
      ],
    };
  
    const plugin = {
      id: "custom_canvas_background_color",
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
  
    const config = {
      //estilos y opciones del grafico
  
      type: "radar",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: titulo,
            color: "black",
          },
          legend: {
            //color:"black",
            labels: {
              color: "black",
            },
          },
        },
      },
      plugins: [plugin],
    };
  
    if (chart10 != undefined || chart10 != null) {
      chart10.destroy();
    }
    chart10 = new Chart(id, config);
  }
  
  //FUNCION QUE DESCARGA EL GRAFICO
  function descargarChart(id) {
    var canvas = document.getElementById(id);
    // Crear un elemento <a>
    let enlace = document.createElement("a");
    // El título
    enlace.download = "download.jpeg";
    // Convertir la imagen a Base64 y ponerlo en el enlace
    enlace.href = canvas.toDataURL("image/jpeg", 1.0);
    // Hacer click en él
    enlace.click();
  }
  