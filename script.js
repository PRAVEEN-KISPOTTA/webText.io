
    var todos = [];             //created array to store an object
    var addTodoForm = document.querySelector("#addTodoForm");
    var listgroup = document.querySelector(".list-group");

    addTodoForm.addEventListener("submit", (event)=>{

	event.preventDefault();           //it will block the page refresh whenever we add the todo


	var todoValue = addTodoForm.todo.value; //this property will not add the empty list
	if (todoValue == ""){
		alert("you must write something");
		return;
	}
	todos.push({                        // to store the value in array of todos
		value: todoValue,
		completed: false,
	});

	addTodoForm.todo.value = "";   //for clearing the input box after enter/add todo


	var li = document.createElement("li");    //Creating a list tag
	li.setAttribute("class", "checked");


	li.innerHTML = todoValue;   //print the value to the list
	listgroup.appendChild(li);


    /*for delete icon and checkbox icon*/

	var Checkbox_icon = document.createElement("i");
	var Delete_icon = document.createElement("i");
	Checkbox_icon.setAttribute("class", "fa-solid fa-check");
	Delete_icon.setAttribute("class", "fa-solid fa-trash-can");
	var dec_btn = document.getElementsByClassName("fa-trash-can");
	li.appendChild(Checkbox_icon);
	li.appendChild(Delete_icon);

	Delete_icon.addEventListener("click", (event)=>{
    event.target.parentElement.remove();
	});

    });

    /* This property will cut the todo list whenever clicked on the list*/

    var list = document.querySelector('ol');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle("checked");
    }
    }, false);