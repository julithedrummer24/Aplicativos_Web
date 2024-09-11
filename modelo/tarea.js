class tarea {
    constructor(contenido, completa) {
        this.contenido = contenido;
        this.completa = completa;
    }
}

const entrada = document.getElementById('inputTarea');
const btnAdd = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');


let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function mostrarTareas() {
    lista.innerHTML = '';

    tareas.forEach((element, index) => {
        const elemento = document.createElement('li');
        elemento.classList.add('listaTareasList');
        elemento.addEventListener('click', () => eliminarTarea(index));
        elemento.textContent = element.contenido;

        lista.appendChild(elemento);
    });
}

function eliminarTarea(index) {
    Swal.fire({
        title: '¿ELIMINAR TAREA?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Eliminar',
        cancelButtonText: 'Cancelar'

    }).then((result) => {
        if (result.isConfirmed) {
            tareas.splice(index, 1);
            localStorage.setItem('tareas', JSON.stringify(tareas));
            mensaje2();
            start();
        }
    });

}


btnAdd.addEventListener('click', () => {
    const nuevaTarea = entrada.value.toUpperCase();
    if (nuevaTarea.trim() !== '') {
        const tarea = {
            contenido: nuevaTarea,
            completa: false
        };
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        start();
        entrada.value = '';
        mensaje();
    } else {
        mensaje3();
    }

});

function start() {
    if (Object.keys(tareas).length !== 0) {
        mostrarTareas();
    } else {
        lista.innerHTML = 'LISTA DE TAREAS VACIA';
    }
}

function mensaje3() {
    var toast = document.getElementById('toast2');
    toast.className = 'show';
    setTimeout(function () { toast.className = toast.className.replace("show", ''); }, 3000);
}

function mensaje2() {
    var toast = document.getElementById('toast');
    toast.className = 'show';
    setTimeout(function () { toast.className = toast.className.replace("show", ''); }, 3000);
}
function mensaje() {
    var toast = document.getElementById('toast1');
    toast.className = 'show';
    setTimeout(function () { toast.className = toast.className.replace("show", ''); }, 3000);
}

function salida() {
    console.log('hola sistemas');
}

start();