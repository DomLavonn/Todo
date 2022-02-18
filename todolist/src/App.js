import './App.css';
import Header from "./components/Layout/Header/Header";
import ToDoCard from "./components/UI/Card/ToDoCard";
import Card from './components/UI/Card/Card'
import TodoForm from "./components/Todo/TodoForm";

function App() {
    let  todoList = [
        {title: "Apply graduate School", subtitle:"the subtitle"}
    ]

  return (
    <div className="App">
        <Header />
        <Card title={"Enter todo item"}>
            <TodoForm />
        </Card>
        <ToDoCard card={todoList[0]}/>
    </div>
  );
}

export default App;
