window.addEventListener('load', () => {
	const form = document.querySelector('form')
	const input = document.querySelector('input')
	const listaTarefas = document.querySelector('#todo')
	const listaDoing = document.querySelector('#doing')
	const listaDone = document.querySelector('#done')
	
	form.addEventListener('submit', e => {
		e.preventDefault()

		if (input.value) {
			const tarefa = input.value
			
			const liTarefa = document.createElement('li')
			liTarefa.classList.add('todo-item')
			
			const liTexto = document.createElement('p')
			liTexto.innerHTML = tarefa
			
			liTarefa.appendChild(liTexto)
			
			const botoes = document.createElement('div')
			botoes.classList.add('todo-icons')
			
			const botaoMoverDoing = document.createElement('button')
			botaoMoverDoing.innerHTML = `<img src="./assets/right-arrow.svg" alt="Botão de mover uma tarefa para doing azul"/>`

			const botaoMoverDone = document.createElement('button')
			botaoMoverDone.innerHTML = `<img src="./assets/check-mark.svg" alt="Botão de mover uma tarefa para done verde"/>`

			const botaoMoverTodo = document.createElement('button')
			botaoMoverTodo.innerHTML = `<img src="./assets/return.svg" alt="Botão de mover uma tarefa para todo preto"/>`

			const botaoDelete = document.createElement('button')
			botaoDelete.setAttribute('id', 'delete')
			botaoDelete.innerHTML = `<img src="./assets/delete.svg" alt="Botão de deletar uma tarefa vermelho"/>`

			botoes.appendChild(botaoMoverDoing)
			botoes.appendChild(botaoDelete)
			
			liTarefa.appendChild(botoes)

			listaTarefas.appendChild(liTarefa)
			input.value = ''
	
			botaoMoverDoing.addEventListener('click', () => {
				listaTarefas.removeChild(liTarefa)
				listaDoing.appendChild(liTarefa)
	
				botoes.removeChild(botaoMoverDoing)
				botoes.insertBefore(botaoMoverDone, botaoDelete)
			})
	
			botaoMoverDone.addEventListener('click', () => {
				listaDoing.removeChild(liTarefa)
				listaDone.appendChild(liTarefa)
	
				botoes.removeChild(botaoMoverDone)
				botoes.insertBefore(botaoMoverTodo, botaoDelete)
			})
	
			botaoMoverTodo.addEventListener('click', () => {
				listaDone.removeChild(liTarefa)
				listaTarefas.appendChild(liTarefa)
	
				botoes.removeChild(botaoMoverTodo)
				botoes.insertBefore(botaoMoverDoing, botaoDelete)
			})
	
			botaoDelete.addEventListener('click', e => {
				const item = e.target.parentNode.parentNode.parentNode.parentNode
				item.removeChild(liTarefa)
			})
		}

	})
})