(function () {
    // Variables
    var lista = document.getElementById("lista"),
        pTarea = document.getElementById("pTarea"),
        nuevaTarea = document.getElementById("agregar");


    var agregarTarea = function () {
        var tarea = pTarea.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);


        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace);

        lista.appendChild(nuevaTarea);

        pTarea.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function () {
                this.parentNode.removeChild(this);
            });
        }

    };
    var comprobarTarea = function () {
        pTarea.className = "";
        teareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eliminarTarea = function () {
        this.parentNode.removeChild(this);
    };


    nuevaTarea.addEventListener("click", agregarTarea);


    pTarea.addEventListener("click", comprobarTarea);


    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }
}());