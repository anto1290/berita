import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class CardComponent extends Component {

    render(props) {
        const { item } = this.props;
        return (
            <Card>
                <Card.Img variant="top" src={item.urlToImage} style={{ height: '15vw' }} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="mb-2 text-muted">{item.author}</Card.Text>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Link href={item.url} className='btn btn-primary'>Read More</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}
