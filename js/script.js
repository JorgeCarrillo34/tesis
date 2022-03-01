const Json =  () => {
    const url = document.getElementById("url").value;
    fetch(`${url}`,{
        method: "get",
    }).then(  response => response.json())
    .then(data => console.log(data));
    }

//const abrirJson = () => {
    //fetch("https://www.datos.gov.co/resource/gpje-sixt.json")
    //.then(response => response.json())
    //.then(data => console.log(data));
//};