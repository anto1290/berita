import { Container, Navbar } from 'react-bootstrap'
const Footer = () => {
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

export default Footer