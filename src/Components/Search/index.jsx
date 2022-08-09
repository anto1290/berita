import { Container, Form, Row } from 'react-bootstrap'

const Search = (props) => {
    const { onChange } = props;
    return (
        <Container className='mt-5'>
            <Row>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={e => onChange(e.target.value)}
                    />
                </Form>
            </Row>
        </Container>
    )
}

export default Search
