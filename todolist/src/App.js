import './App.css';
import Header from "./components/Layout/Header/Header";
import ToDoCard from "./components/UI/Card/ToDoCard";
import Card from './components/UI/Card/Card'
import TodoForm from "./components/Todo/TodoForm";
import {useState} from "react";
function App() {
    const [tdArr, setTdArr] = useState([])
    let  todoList = [
        {title: "Apply graduate School", subtitle: new Date()}
    ]

    const addToArrHandle = ()   => {

    }
    const addTodoHandle = (tdItem) => {

        todoList.push(tdItem)
        console.log(todoList)
    }

  return (
    <div className="App">
        <Header />
        <Card title={"Enter todo item"}>
            <TodoForm addTodo={addTodoHandle} />
        </Card>
        <ToDoCard card={todoList[0]}/>
    </div>
  );
}

export default App;
