function changeMode(){
    let body = document.body

    darkModeButton = document.getElementById("dark-mode-btn")
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")){
        darkModeButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg'width='26' height='26'><path fill='#FFF' fill-rule='evenodd' d='M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z'/></svg>"
    }else{
        darkModeButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26'><path fill='#FFF' fill-rule='evenodd' d='M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z'/></svg>"
    }
}

function createToDo(){
    let toDoText = document.getElementById("new-item-text")
    let list = document.getElementById("todo-list")
   
    if(toDoText.value != ""){
        let newToDo = ` 
        <li class='todo-item unfinished-item'>
            <input type="radio" name="todo-checked" class='todo-check' onclick="finishToDo()">
            <div class='todo-item-content'>
                <label for="todo-checked" class='todo-description'>${toDoText.value}</label>
                <button class='delete-todo' onclick="deleteToDo()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </button>
            </div>
        </li>`

        list.innerHTML += newToDo
        toDoText.value = ""
    }
}

function finishToDo(){
    let radio = event.currentTarget
    let toDoText = radio.nextElementSibling
    let toDoItem = radio.parentElement
    
   
        radio.style.background = "linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"

        toDoText.style.color = "var(--tertiary-color)"
        toDoText.style.textDecoration = "line-through"
        toDoItem.classList.remove("unfinished-item")

}

function deleteToDo(){
    let buttonContainer = event.currentTarget.parentElement
    let item = buttonContainer.parentElement
    item.remove()
}

function showAllToDo(){
    let toDoList = document.getElementsByClassName("todo-item")

    for(let i = 0; i < toDoList.length; i++){
        toDoList[i].style.display = "flex"
    }
}

function filterActiveToDo(){
    let activeList = document.getElementsByClassName("todo-item")
    
    for(let i = 0; i < activeList.length; i++){
        if(!activeList[i].classList.contains("unfinished-item")){
            activeList[i].style.display = "none"
        }else{
            activeList[i].style.display = "flex"
        }
    }
}

function filterCompletedToDo(){
    let completedList = document.getElementsByClassName("todo-item")

    for(let i = 0; i < completedList.length; i++){
        if(completedList[i].classList.contains("unfinished-item")){
            completedList[i].style.display = "none"
        }else{
            completedList[i].style.display = "flex"
        }
    }
}

function clearCompleted(){
    let list = document.getElementsByClassName("todo-item")

    for(let i = 0; i < list.length; i++){
        if(!list[i].classList.contains("unfinished-item")){
            list[i].remove()
            i--
        }
    }  
}



