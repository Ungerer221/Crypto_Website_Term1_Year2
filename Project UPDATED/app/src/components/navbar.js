import React from 'react'
// import bootstrap from 'bootstrap';
import { Container } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function BasicNavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/" >Cryptic</Navbar.Brand>
                {/* me-auto = to fit you screen size */}
                <Nav className='me-auto gap-2' style={{

                }}>
                    <Nav.Link href='/'>Landing</Nav.Link>
                    <Nav.Link href='/compare'>Compare</Nav.Link>
                    <Nav.Link href='/time'>Time</Nav.Link>
                    <Nav.Link href='/portfolio'>Portfolio</Nav.Link>

                    
                    <button class="btn btn-primary float-end" style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",}}>Sign Up</button>
                    <button class="btn btn-light float-end" style={{
                        borderRadius: "10px",
                        // border: "solid black 2px"
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    }}>Login</button>

                </Nav>
            </Container>
        </Navbar>
    );
}

export default BasicNavBar