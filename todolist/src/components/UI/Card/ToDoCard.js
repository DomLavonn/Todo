import {Card} from "react-bootstrap";
import classes from './ToDoCard.module.css'
import TodoButton from "../Button/TodoButton";

const ToDoCard = (props) => {

    return<ul>

     <Card className={classes.cardscreen}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{"Testing"}</Card.Subtitle>
                <Card.Text>
                    {props.card.map(td => {
                        return <p> {td.title} </p>
                    })}
                </Card.Text>
                <TodoButton type={"submit"} value={"Submit"} />
            </Card.Body>
    </Card>
    </ul>
}

export default ToDoCard