import { useState } from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

function MyMeteoNav({handleResearch, handleNation}) {
    const[research, setResearch] = useState('')
    const[nation, setNation] = useState('')
    const location = useLocation()
    const isActive = (path) =>{
        return location.pathname === path ? 'nav-link active' : 'nav-link'
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Ciao')
        handleResearch(research)
        handleNation(nation)
        setResearch('')
        setNation('')
    }
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home">MyMeteo.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className={isActive('/')} onClick={() => {
                            handleResearch('')
                            handleNation('')
                        }}>Home</Link>
                        <Link to='/details' className={isActive('/details')}>Details</Link>
                    </Nav>
                    <Form onSubmit={(e) => handleSubmit(e)} className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search your city"
                            className="me-2"
                            aria-label="Search"
                            value={research}
                            onChange={(e) => setResearch(e.target.value)}
                            required
                        />
                        <Form.Control
                            type="text"
                            placeholder="Insert here ISO 3166 Code "
                            className="me-2"
                            aria-label="Search"
                            value={nation}
                            maxLength={2}
                            onChange={(e) => setNation(e.target.value)
                            }
                        />
                        <Button type='submit' variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyMeteoNav