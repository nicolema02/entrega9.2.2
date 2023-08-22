
const valor = localStorage.getItem('valores');
console.log(valor);

document.addEventListener('DOMContentLoaded', function(){
    const parrafo = document.getElementById("data");
    parrafo.textContent = valor;
    
})  