import Input from "../UI/Input/Input'";
import TodoButton from "../UI/Button/TodoButton";

const TodoForm = () => {
    return <form action="submit">
        <Input type={"text"} />
        <TodoButton type={"submit"} value={"Submit"} />
    </form>

}

export default TodoForm
