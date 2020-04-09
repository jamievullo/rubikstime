import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
    } from 'reactstrap';

class CubeCard extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.props.cube.image} style={{height: '160px'}} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{this.props.cube.name}</CardTitle>
                    <CardSubtitle>{this.props.cube.brand}</CardSubtitle>
                    <CardSubtitle>{this.props.cube.size}</CardSubtitle>
                    <CardText>{this.props.cube.description}</CardText>
                    <CardSubtitle>Price:{this.props.cube.price}</CardSubtitle>
                    <Button>Buy Now</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CubeCard
