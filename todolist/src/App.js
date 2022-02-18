import './App.css';
import Header from "./components/Layout/Header/Header";
import ToDoCard from "./components/UI/Card/ToDoCard";
import Card from './components/UI/Card/Card'
import TodoForm from "./components/Todo/TodoForm";

function App() {
    let c = {}

  return (
    <div className="App">
        <Header />
        <Card title={"Enter todo item"}>
            <TodoForm />
        </Card>
        {/*<ToDoCard card={c}/>*/}
    </div>
  );
}

export default App;
