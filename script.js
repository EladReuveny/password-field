const togglePassword = document.querySelector('.toggle-password')
const password = document.querySelector('.password-container #password')
const continueBtn = document.querySelector('.continue-btn')

const signIn = document.querySelector('.btns-group #sign-in')

togglePassword.addEventListener('click', (e) => {
    e.preventDefault()

    const passwordType = password.getAttribute('type')
    if (passwordType === 'password') {
        password.setAttribute('type', 'text')
        togglePassword.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
    } else {
        password.setAttribute('type', 'password')
        togglePassword.innerHTML = `<i class="fa fa-eye"></i>`
        
    }
})

signIn.addEventListener('click', () => {
    signIn.classList.toggle('active')
})