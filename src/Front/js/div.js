nroClicks = 0;

function mostrar(divAbrir, divCerrar) {
    document.getElementById(divAbrir).style.display = "block";
    document.getElementById(divCerrar).style.display = "none";
}

function mostrarPrincipal(boton) {
    document.getElementById("home").style.display = "block";
    document.getElementById(boton).style.display = "none";
}
function mostrarMenuBar(){
    nroClicks += 1;
    if(nroClicks %2 == 0){
        document.getElementById("menuBarImg1").style.display = "none";
        document.getElementById("menuBar").style.display = "none";
        document.getElementById("menuBarImg").style.display = "block";

    }else{    
    document.getElementById("menuBarImg1").style.display = "block";
    document.getElementById("menuBar").style.display = "block";    
    document.getElementById("menuBarImg").style.display = "none";
    }
}
function mostrarMenuBar(){
    nroClicks += 1;
    if(nroClicks %2 == 0){
        document.getElementById("menuBarImg1").style.display = "none";
        document.getElementById("menuBar").style.display = "none";
        document.getElementById("menuBarImg").style.display = "block";

    }else{    
    document.getElementById("menuBarImg1").style.display = "block";
    document.getElementById("menuBar").style.display = "block";    
    document.getElementById("menuBarImg").style.display = "none";
    }
}
function mostrarMenuBarV(){
    nroClicks += 1;
    if(nroClicks %2 == 0){
        document.getElementById("menuBarImg1V").style.display = "none";
        document.getElementById("menuBarV").style.display = "none";
        document.getElementById("menuBarImgV").style.display = "block";

    }else{    
    document.getElementById("menuBarImg1V").style.display = "block";
    document.getElementById("menuBarV").style.display = "block";    
    document.getElementById("menuBarImgV").style.display = "none";
    }
}
function mostrarMenuBarH(){
    nroClicks += 1;
    if(nroClicks %2 == 0){
        document.getElementById("menuBarImg1H").style.display = "none";
        document.getElementById("menuBarH").style.display = "none";
        document.getElementById("menuBarImgH").style.display = "block";

    }else{    
    document.getElementById("menuBarImg1H").style.display = "block";
    document.getElementById("menuBarH").style.display = "block";    
    document.getElementById("menuBarImgH").style.display = "none";
    }
}
function añadirComentario(comentarios, nuevoComentario){
    document.getElementById(comentarios).value = document.getElementById(nuevoComentario).value;
    document.getElementById(comentarios).style.display = "block";
    document.getElementById(nuevoComentario).style.display = "none";

}
