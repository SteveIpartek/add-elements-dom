const catch1 = document.getElementById("lista");
const catch2 = document.getElementById("agregar");
const catch3 = document.getElementById("limpiar");


catch2.addEventListener("click", function() {
    const intro1 = prompt("Introduce el elemento que deseas agregar a la lista --->");

    if (intro1 && intro1.trim().length > 0) { 
        const agre1 = document.createElement("li");
        agre1.innerHTML = intro1;
        catch1.appendChild(agre1); 
    }
});

catch3.addEventListener("click" , function(){location.reload();})