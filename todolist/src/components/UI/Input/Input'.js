const Input = (props) => {
    return <input onChange={props.onChange} value={props.value} type={props.type} placeholder="Enter todo Item" />
}


export default Input