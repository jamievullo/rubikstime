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
                    <CardImg className='card-image' top width="100%" src={this.props.cube.image} alt="Card image" />
                    <CardBody>
                        <CardTitle>Name: {this.props.cube.name}</CardTitle>
                        <CardSubtitle>Brand: {this.props.cube.brand}</CardSubtitle>
                        <CardSubtitle>Size: {this.props.cube.size}</CardSubtitle>
                        <CardText>{this.props.cube.description}</CardText>
                        <CardSubtitle>Price: {this.props.cube.price}</CardSubtitle>
                        <Button>Buy Now</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CubeCard
