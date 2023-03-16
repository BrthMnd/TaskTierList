const lista1 = document.getElementById('lista1')
const lista2 = document.getElementById('lista2')
const lista3 = document.getElementById('lista3')
const lista4 = document.getElementById('lista4')
const lista5 = document.getElementById('lista5')
const lista6 = document.getElementById('lista6')
const lista7 = document.getElementById('lista7')
const lista8 = document.getElementById('lista8')
const btn = document.getElementById('btn')


Sortable.create(lista1, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})
Sortable.create(lista2, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})
Sortable.create(lista3, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})
Sortable.create(lista4, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})
Sortable.create(lista5, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})
Sortable.create(lista6, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})
Sortable.create(lista7, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})
Sortable.create(lista8, {
    group: {
        name:"listas",
    },
    animation: 150,  
    chosenClass: 'Seleccionado',
    // ghostClass: 'ghost',
    dragClass: 'drag',
    filter: ".bloques",
})

btn.addEventListener('click', () =>{
    let nametask = document.getElementById('tarea').value;
    
    const nuevodiv = document.createElement('div')
    const name = document.createElement('h4')
    name.textContent = nametask

    nuevodiv.appendChild(name)
    
    nuevodiv.classList.add('elmento')
    console.log(nuevodiv)
    
    lista1.appendChild(nuevodiv)
})