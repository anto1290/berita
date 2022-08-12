import React, { Component } from 'react'
import { Container, Form, Row } from 'react-bootstrap'

export default class Search extends Component {
    render(props) {
        const { onChange } = this.props;
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
}
