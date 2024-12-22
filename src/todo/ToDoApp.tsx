import React from "react"
import { Card, Button, Form } from "react-bootstrap/"


function ToDoApp(){

  const inputRef = React.useRef<HTMLInputElement>(null);
  const taskField = React.useRef<HTMLUListElement>(null);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.key === 'Enter' && inputRef.current && inputRef.current.value.length > 0) {
      addTask();
    }
  }

  function addTask(){
    console.log(inputRef.current?.value)
    if (inputRef.current && taskField.current) {

      const newTask = document.createElement('li');

      newTask.className = "list-group-item";
      newTask.textContent = inputRef.current.value
      newTask.style.cursor = "pointer"

      taskField.current.appendChild(newTask)

      newTask.addEventListener('click', () => {
        newTask.style.textDecoration = newTask.style.textDecoration === "line-through" ? "" : "line-through";
      })

      newTask.addEventListener('dblclick', () => {
        newTask.remove()
      })

      inputRef.current.value = ''

    }
  }

  return(
  <>
    <Form.Label>Task<i className="bi bi-list-task m-2" aria-hidden="true"></i></Form.Label>
    <Form.Control
      type="text"
      ref={inputRef}
      placeholder="Add a task"
      onKeyDown={handleKeyDown}
    />
    <ul className="list-group list-group-flush" ref={taskField}>

    </ul>
  </>
)


}

export default ToDoApp