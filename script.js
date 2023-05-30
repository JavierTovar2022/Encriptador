function encriptar(){
    document.getElementById('text2-right').style.display="block";
   
    var texto=document.getElementById('inputTexto').value.toLowerCase();
    var txtcifrado=texto.replace(/e/igm,'enter');
    var txtcifrado=txtcifrado.replace(/o/igm,'over');
    var txtcifrado=txtcifrado.replace(/i/igm,'imes');
    var txtcifrado=txtcifrado.replace(/a/igm,'ai');
    var txtcifrado=txtcifrado.replace(/u/igm,'ufat');

    document.getElementById('img-right').style.display="none";
    document.getElementById('text-right').style.display="none";
    document.getElementById('text2-right').innerHTML=txtcifrado;
    document.getElementById('copy').style.display="show";
    document.getElementById('copy').style.display="inherit";
}

function desencriptar(){
   
    document.getElementById('text2-right').style.display="block";

    var texto=document.getElementById('inputTexto').value.toLowerCase();
    var txtcifrado=texto.replace(/enter/igm,'e');
    var txtcifrado=txtcifrado.replace(/over/igm,'o');
    var txtcifrado=txtcifrado.replace(/imes/igm,'i');
    var txtcifrado=txtcifrado.replace(/ai/igm,'a');
    var txtcifrado=txtcifrado.replace(/ufat/igm,'u');

    document.getElementById('img-right').style.display="none";
    document.getElementById('text-right').style.display="none";
    document.getElementById('text2-right').innerHTML=txtcifrado;
    document.getElementById('copy').style.display="show";
    document.getElementById('copy').style.display="inherit";
}

function copiar(){
    var contenido = document.querySelector('#text2-right');
    contenido.select();
    document.execCommand('copy');
    alert('¡¡TEXTO COPIADO!!');
}