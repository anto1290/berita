import { Container, Nav, Navbar } from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Berita Ku</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#cari">cari</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
