import React from 'react'
import two from '../assets/2x2Cube.png'
import three from '../assets/3x3Cube.png'
import four from '../assets/4x4Cube.png'
import five from '../assets/5x5Cube.png'
import six from '../assets/6x6Cube.jpg'
import seven from '../assets/7x7Cube.jpg'
import mega from '../assets/Megaminx.jpg'
import pyra from '../assets/Pyraminx.jpg'
import blind from '../assets/Blindfolded.jpg'
import skewb from '../assets/Skewb.jpeg'
import oneHand from '../assets/OneHanded.png'
import squareOne from '../assets/SquareOne.png'
import CubeType from '../components/CubeType'
import Col from 'react-bootstrap/Col'

class CubeSelector extends React.Component {

    state = {
        currentCube: '',
        cubes: [
            {
                id: 1,
                image: two,
                name: '2 x 2',
            },
            {
                id: 2,
                image: three,
                name: '3 x 3',
            },
            {
                id: 3,
                image: four,
                name: '4 x 4',
            },
            {
                id: 4,
                image: five,
                name: '5 x 5',
            },
            {
                id: 5,
                image: six,
                name: '6 x 6',
            },
            {
                id: 6,
                image: seven,
                name: '7 x 7',
            },
            {
                id: 7,
                image: mega,
                name: 'megaminx',
            },
            {
                id: 8,
                image: pyra,
                name: 'pyraminx',
            },
            {
                id: 9,
                image: squareOne,
                name: 'square-1',
            },
            {
                id: 10,
                image: skewb,
                name: 'skewb',
            },
            {
                id: 11,
                image: oneHand,
                name: '3 x 3 OH',
            },
            {
                id: 12,
                image: blind,
                name: '3 x 3 BF',
            }
        ]
    }

    handleCubeClick = (e) => {
        console.log(e.target.name)
        this.setState({
            currentCube: e.target.name
        })
    }

    render() {
        let cubeType = this.state.cubes.map(cube => {
            return (
                <CubeType handleCubeClick={this.handleCubeClick} cube={cube} key={cube.id} />
            )
        })
        return (
            <div style={{textAlign: 'center'}}>
                <Col md='12' style={{marginBottom: '2em'}}>
                    {cubeType}
                </Col>
            </div>
        )
    }
}

export default CubeSelector