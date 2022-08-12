import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Navbar expand="lg" className='mt-5' variant="light" bg="light" >
                <Container>
                    <Navbar.Brand href="#">Muhammad Nurwibawanto</Navbar.Brand>
                    <Navbar.Text>
                        © 2020
                    </Navbar.Text>
                </Container>
            </Navbar>
        )
    }
}
