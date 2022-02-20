const loginForm = document.getElementById("login-form"); 
const loginInput = document.querySelector("#login-form input"); 
const loginButton = document.querySelector("#login-form button");
const HIDDEN_CLASSNAME = "hidden"; 
const greeting = document.querySelector("#greeting"); 
const todoForm = document.querySelector("#todo-form");

let loginname=localStorage.getItem("username");
console.log("loginname" + loginname);


if(loginname == null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add("login-info");
  greeting.innerText = "nice to meet you \"" + loginname + "\"";
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginname = username;
  greeting.classList.add("login-info");
  greeting.innerText = "nice to meet you \"" + username + "\"";
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
}

loginButton.addEventListener("click", onLoginSubmit);