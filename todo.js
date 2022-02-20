const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="todos";
let toDos = [];

function handleToDoSubmit(event){
    console.log("handleToDoSubmit");
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
} 

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text + " ";
    button.innerText = "✖";
    button.classList.add("todo-btn");
    toDoList.appendChild(li);

    button.addEventListener("click", deleteTodo);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  //localStorage에서는 문자열로밖에 저장이 안됨. 배열의 형태인 문자열로 저장하기 위해 이렇게 써줌. 나중에 JSON.parse로 배열의 값을 가져오기 위해!
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
   if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}