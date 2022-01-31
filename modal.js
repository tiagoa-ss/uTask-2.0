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

const inputDark = document.querySelector('input[type="checkbox"]')
const btnPlus = document.querySelector('#btn-plus')
inputDark.checked = false

inputDark.addEventListener('change', e => {
    document.body.classList.toggle('dark')
    if(inputDark.checked) {
        btnPlus.setAttribute('src', './assets/blue-plus.svg')
    } else {
        btnPlus.setAttribute('src', './assets/black-plus.svg')
    }
})