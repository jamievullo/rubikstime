import React from 'react'
import two from '../assets/2x2Cube.jpg'
import three from '../assets/3x3Cube.png'
import four from '../assets/4x4Cube.png'
import five from '../assets/5x5Cube.png'
import six from '../assets/6x6Cube.jpg'
import seven from '../assets/7x7Cube.jpg'
import mega from '../assets/Megaminx.jpg'
import pyra from '../assets/Pyraminx.jpg'
import blind from '../assets/Blindfolded.jpg'

class CubeSelector extends React.Component {

    state = {
        currentCube: ''
    }

    handleCubeClick = (id, cube) => {
        let currentCube = [...this.state.currentCube];

        currentCube[id].selected = currentCube[id].selected ? false : true;

        currentCube.forEach(cube => {
            if(cube.id !== id) {
                cube.selected = false;
            }
        })

        this.setState({
            currentCube
        })
    }

    render() {
        return (
            <div>
                <img id='1' src={two} style={{height: "55px", width: "57px"}} alt=""/>
                <img id='2' src={three} style={{height: "55px", width: "57px", marginRight: '.424em'}} alt=""/>
                <img id='3' src={four} style={{height: "55px", width: "57px", marginRight: '.424em'}} alt=""/>
                <img id='4' src={five} style={{height: "55px", width: "57px", marginRight: '.424em'}} alt=""/>
                <img id='5' src={six} style={{height: "55px", width: "57px", marginRight: '.424em'}} alt=""/>
                <img id='6' src={seven} style={{height: "55px", width: "57px", marginRight: '.424em'}} alt=""/>
                <img id='7' src={mega} style={{height: "55px", width: "57px", marginRight: '.424em'}} alt=""/>
                <img id='8' src={pyra} style={{height: "55px", width: "57px", marginRight: '.424em'}} alt=""/>
                <img id='9' src={blind} style={{height: "55px", width: "57px"}} alt=""/>
            </div>
        )
    }
}

export default CubeSelector
