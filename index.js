setInterval(() => {
    var todos = document.querySelectorAll('.mt2 .ember-view')
    var clicar = document.querySelector('.mt2 .ember-view')

    todos.forEach(item => {
        item.click()
    }, 20000)  
}) 