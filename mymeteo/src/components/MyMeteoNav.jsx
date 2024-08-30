import { useState } from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function MyMeteoNav() {
    const[research, setResearch] = useState('')
    const location = useLocation()
    const isActive = (path) =>{
        return location.pathname === path ? 'nav-link active' : 'nav-link'
    }
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home">MyMeteo.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className={isActive('/')}>Home</Link>
                        <Link to='/details' className={isActive('/details')}>Details</Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search your city"
                            className="me-2"
                            aria-label="Search"
                            value={research}
                            onChange={(e) => setResearch(e.target.value)}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyMeteoNav