let secciones=[];
let botones=[];

window.onload=init;

function init(){

    
    secciones[1]=document.getElementById("section_1");
    secciones[2]=document.getElementById("section_2");
    secciones[3]=document.getElementById("section_3");
    secciones[4]=document.getElementById("section_4");
   
    

    

    botones[1]=document.getElementById("btn_1");
    botones[2]=document.getElementById("btn_2");
    botones[3]=document.getElementById("btn_3");
    botones[4]=document.getElementById("btn_4");



}
function ocultar(){

    for(let i=1;i<secciones.length;i++){

        secciones[i].classList.add("ocultar");
    }
    
}

function cambiarSeccion(target){

    let id=target.id.split("_")[1];
    ocultar();
    secciones[id].classList.remove("ocultar");
}




