'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: 'Raphael',
    email: 'raphael@gmail.com',
    celular: '47256893321',
    cidade: 'Blumenau'
}

//CRUD
const createClient = (client) => {
    localStorage.setItem('db_client', client) //11:47
}

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)