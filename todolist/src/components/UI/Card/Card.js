import classes from './Card.module.css'

const Card = (props) => {
    const title = props.title

    return <div className={`${classes.card} `}>
        {title && <h1 className={classes.header}>{title}</h1>}
            {props.children}
       </div>
}

export default Card