(function() {
    let eyeicon = document.querySelector(".eyeicon")
    let password = document.querySelector(".password")
    const form = document.querySelector("#message-form")
    const header = document.querySelector(".temp")
    header.style.display = 'none'
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const message = document.querySelector(".message")
        const feedback = document.querySelector(".feedback")
        const messageContent = document.querySelector(".message-content")
    
        if(message.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            }, 4000)
        } else{
            messageContent.textContent = message.value
            message.value = ''
            header.style.display = 'block'
        }
    })

    eyeicon.onclick = function(){
        if(password.type == "password"){
            password.type = "text";
            eyeicon.src = "eye-open.png";
        } else{
            password.type = "password";
            eyeicon.src = "eye-close.png";
        }
    }
})()