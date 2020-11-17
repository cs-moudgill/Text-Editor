var doc=document.getElementById('text-output');
var bt=document.getElementsByTagName('button');

function updateText(){
    var userData=document.getElementById('text-input').value;
    document.getElementById('text-output').innerHTML= userData;
}

function format(status,number){
   bt[number].classList.toggle('active');
   doc.classList.toggle(status);
}
 function indent(indentStatus){
doc.style.textAlign=indentStatus;
}
