import { Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

//display navbar
function Menus() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="col justify-content-around me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/progress">Progress</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </div>
    );
}

export default Menus;
