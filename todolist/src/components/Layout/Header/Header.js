import { Navbar, Container} from 'react-bootstrap';
import classes from './Header.module.css'
const Header =  () => {
    return <Navbar bg="dark" variant="dark">
                <Navbar.Brand className={"mx-auto"} href="#home"  >To-Do List </Navbar.Brand>
            </Navbar>
}

export default Header