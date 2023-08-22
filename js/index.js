

const btn = document.getElementById("buttonText");
btn.addEventListener('click', function(){
    const datos = document.getElementById("inputText").value;
    const valor = localStorage.setItem("valores",datos);
    console.log(valor);
    
    



})


