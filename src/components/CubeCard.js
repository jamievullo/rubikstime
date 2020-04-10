import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
    } from 'reactstrap';

class CubeCard extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <CardImg className='card-image' top width="100%" src={this.props.item.image} alt="Card image" />
                    <CardBody>
                        <CardTitle>Name: {this.props.item.name}</CardTitle>
                        <CardSubtitle>Brand: {this.props.item.brand}</CardSubtitle>
                        <CardSubtitle>Size: {this.props.item.size}</CardSubtitle>
                        <CardText>{this.props.item.description}</CardText>
                        <CardSubtitle>Price: {this.props.item.price}</CardSubtitle>
                        <Button>Buy Now</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CubeCard
