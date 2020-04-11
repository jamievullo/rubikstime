import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardSubtitle, Button
    } from 'reactstrap';

class CubeCard extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <CardImg className='card-image' top width="100%" src={this.props.item.image} alt="Card image" />
                    <CardBody>
                        <CardSubtitle>Name: {this.props.item.name}</CardSubtitle>
                        <CardSubtitle>Brand: {this.props.item.brand}</CardSubtitle>
                        <CardSubtitle>Size: {this.props.item.size}</CardSubtitle>
                        <CardText>{this.props.item.description}</CardText>
                        <CardSubtitle>Price: {this.props.item.price}</CardSubtitle>
                        <Button style={{backgroundColor: '#ffc600', color: '#364182', marginRight: '1.5em'}}>Buy Now</Button>
                        <Button style={{backgroundColor: '#ffc600', color: '#364182', marginLeft: '.424em'}}>Add to Cart</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CubeCard
