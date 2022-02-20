import './App.css';
import Header from "./components/Layout/Header/Header";
import ToDoCard from "./components/UI/Card/ToDoCard";
import Card from './components/UI/Card/Card'
import TodoForm from "./components/Todo/TodoForm";
import {useState} from "react";

function App() {
    const [tdArr, setTdArr] = useState([])

    const addTodoHandle = (tdItem) => {

        setTdArr( (prevState) => {
            return [...prevState, {title: tdItem}]
        })
    }

  return (
    <div className="App">
        <Header />
        <Card title={"Enter todo item"}>
            <TodoForm addTodo={addTodoHandle} />
        </Card>
        {tdArr.length > 0 && <ToDoCard card={tdArr}/>}
    </div>
  );
}

export default App;
