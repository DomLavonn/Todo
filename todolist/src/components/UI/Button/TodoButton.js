import {ButtonGroup, Button} from "react-bootstrap";

const TodoButton = (props) => {
    return <Button type={props.type} variant="primary">{props.value}</Button>

}

export default  TodoButton