const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')
const buttonLogin = document.getElementById('button')

buttonLogin.addEventListener('click', () => {
    if (inputEmail.value == 'admin@admin.com' && inputPassword.value == 1234){
        alert('Login successful')
    } else {
        alert('Login failed')
    }
})