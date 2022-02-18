import {Card} from "react-bootstrap";
import classes from './ToDoCard.module.css'
import TodoButton from "../Button/TodoButton";

const ToDoCard = (props) => {
    return <Card className={classes.cardscreen}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{props.card.subtitle}</Card.Subtitle>
                <Card.Text>
                    <p> {props.card.title} </p>
                </Card.Text>
                <TodoButton type={"submit"} value={"Submit"} />
            </Card.Body>
    </Card>
}

export default ToDoCard