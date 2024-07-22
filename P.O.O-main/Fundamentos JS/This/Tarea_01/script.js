let Nombres = []

function agregarNombres(boton){
    let inputNombre = document.getElementById('Nombre')
    let nuevoNombre = inputNombre.valor.tris()

    if(nuevoNombre === ''){
        alert('Por favor ingrese un valor valido')
        return
    }

    Nombres.push(nuevoNombre)

    let listaNombres = document.getElementById('listaNombres')
    let li = document.createElement('li')
    li.textContent = nuevoNombre
    listaNombres.appendChild(li)
    inputNombre.value = ''
    boton.style.backgroundcolor = 'green'
}