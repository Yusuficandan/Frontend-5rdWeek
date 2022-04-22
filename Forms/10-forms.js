

(function (window, document, undefined) {

    window.onload = init;

    function init() {


        let userFormDOM = document.querySelector('#userForm')
        userFormDOM.addEventListener('submit', formHandler)

        function formHandler(event) {
            event.preventDefault()
            const USER_NAME = document.querySelector("#username")
            const SCORE = document.querySelector("#score")
            if (USER_NAME.value && SCORE.value) {
                addItem(USER_NAME.value, SCORE.value)
                USER_NAME.value=""
                SCORE.value=""
            } else console.log("hatali giris")
        }
 
        let userListDOM = document.querySelector('#userList')

        const addItem = (userName, score) => {
            let liDOM = document.createElement('li')
            liDOM.innerHTML = `
            ${userName}
            <span class="badge bg-primary rounded-pill">${score}</span>
            `
            liDOM.classList.add(
                'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
            )

            userListDOM.append(liDOM)
        }

    }
})(window, document, undefined);