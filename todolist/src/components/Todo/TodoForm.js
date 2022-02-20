import Input from "../UI/Input/Input'";
import TodoButton from "../UI/Button/TodoButton";
import React, {useState, useRef} from 'react'
import ReactDOM from "react-dom";

const Modal = ()  => {

    return <h1> Fucning modal</h1>
}
const TodoForm = (props) => {
    
    const [tdState, setTdState]  = useState("")

    const toDoHandler = (event) => {
        setTdState(event.target.value)
    }

    const addIt = (event) => {
        event.preventDefault()
        console.log(tdState)

       //let item = myRef.current.value
        props.addTodo(tdState)
    }

    return <form  onSubmit={addIt} >
        <Input  type={"text"} value={tdState}    onChange={ toDoHandler}  />
        <TodoButton  type={"submit"} value={"Submit"} />
        {ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))}
    </form>
}

export default TodoForm