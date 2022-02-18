import {Card} from "react-bootstrap";
import classes from './ToDoCard.module.css'
import TodoButton from "../Button/TodoButton";

const ToDoCard = (props) => {
    return <Card className={classes.cardscreen}>
            <Card.Body>
                <Card.Title>{props.card.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.card.subtitle}</Card.Subtitle>
                <Card.Text>
                    {props.card.text}
                </Card.Text>
                <TodoButton  as={"input"} type={"button"} title={"Edit"}  />
            </Card.Body>
    </Card>
}

export default ToDoCard