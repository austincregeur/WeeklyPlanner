let todoForm = document.querySelector('#todo-form')

//Submit Event Listener For Adding a Todo Item
todoForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault();
    let todoName = document.querySelector("#todo-name").value;
    let todoDay = document.querySelector("#todo-day").value;
    let todoDescription = document.querySelector("#todo-description").value;
    console.log(todoName, todoDay, todoDescription);

    let todoItem = createTodoElement(todoName, todoDescription);
    console.log(todoItem);
    document.querySelector(`#${todoDay}`).appendChild(todoItem);
}

function createTodoElement(name, description){
    let item = document.createElement('div');
    item.classList.add("item");
    item.draggable = true;
    
    let nameElement = document.createElement('span');
    nameElement.innerHTML = name;

    item.appendChild(nameElement);
    console.log(item)
    item.addEventListener("dragstart", dragStart);
    return item;

}

