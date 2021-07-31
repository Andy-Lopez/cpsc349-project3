import * as mockroblog from './mockroblog.js'

const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-form-submit')
const loginErrorMsg = document.getElementById('login-error-msg')

loginButton.addEventListener('click', (e) => {
  e.preventDefault()
  const username = loginForm.username.value
  const password = loginForm.password.value

  const result = mockroblog.authenticateUser(username, password)

  // if (username === "user" && password === "web_dev") {
  if (result != null) {
    // alert("You have successfully logged in.");
    window.location.replace('/usertimeline.html?username=self')
    localStorage.setItem('user_name', username)
    // location.reload();
  } else {
    alert('Incorrect USERNAME or PASSWORD.')
    location.reload()
  }
})
