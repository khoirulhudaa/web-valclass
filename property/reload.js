setTimeout(() => {

    for (var i = 0; i <= document.querySelectorAll('button.v-reload-web').length; i++) {
        document.querySelectorAll('button.v-reload-web')[i].addEventListener('click', () => {
           window.location.reload()
        })
    }

}, 300)