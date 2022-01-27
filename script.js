const modal = document.querySelector('.modal-container')
const engrenagem = document.querySelector('#engrenagem')

engrenagem.addEventListener('click', () => {
    modal.classList.add('mostrar')
})

modal.addEventListener('click', e => {
    if (e.target.id === 'modal') {
        modal.classList.remove('mostrar')
    }
})