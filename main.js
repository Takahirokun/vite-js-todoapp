import './style.css';

const onClickAdd = () => {
	const inputText = document.getElementById("add-text").value;
	document.getElementById("add-text").value = "";

	createIncompleteToDo(inputText);

};

const createIncompleteToDo = (todo) => {
 	const li = document.createElement("li");
	const div = document.createElement("div");
	div.className = "list-row";
	const p = document.createElement("p");
	p.className = "todo-item";
	p.innerText = todo;

	const completeButton = document.createElement("button");
	completeButton.innerText = "完了";
	completeButton.addEventListener("click", () => {
		onClickComplete(completeButton);
	});
	const deleteButton = document.createElement("button");
	deleteButton.innerText = "削除";
	deleteButton.addEventListener("click", () => {
		onClickDelete(deleteButton);
	});


	div.appendChild(p);
	div.appendChild(completeButton);
	div.appendChild(deleteButton);
	li.appendChild(div);

	document.getElementById("incomplete-list").appendChild(li); 
	
}

const onClickComplete = (completeButton) => {
	const moveTarget = completeButton.closest("li");
	completeButton.nextElementSibling.remove();
	completeButton.remove();

	const backButton = document.createElement("button");
	backButton.innerText = "戻る";
	backButton.addEventListener("click", () => {
		const todoText = backButton.previousElementSibling.innerText;
		createIncompleteToDo(todoText);
		backButton.closest("li").remove();
	});
	moveTarget.firstElementChild.appendChild(backButton);

	document.getElementById("complete-list").appendChild(moveTarget);
}

const onClickDelete = (deleteButton) => {
	const deleteTarget = deleteButton.closest("li");
	document.getElementById("incomplete-list").removeChild(deleteTarget);
}

document.getElementById("add-button").addEventListener("click",onClickAdd);

