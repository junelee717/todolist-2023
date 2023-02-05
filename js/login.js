const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const loginButton = document.querySelector("#login button")
const loginname = document.querySelector("#main .name");
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greetUser(username);
}
greetUser();

function greetUser(username){
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
        loginname.innerText = `${savedUsername}`;
    } else {
        loginname.innerText = `${savedUsername}`;
    }
}

loginForm.addEventListener("submit", onLoginSubmit);
loginButton.addEventListener("click", onLoginSubmit);