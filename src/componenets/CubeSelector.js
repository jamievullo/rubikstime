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

    cubeSelection() {

    }

    render() {
        return (
            <div>
                <img src={two} style={{height: "50px", width: "50"}} alt=""/>
                <img src={three} style={{height: "50px", width: "50"}} alt=""/>
                <img src={four} style={{height: "50px", width: "50"}} alt=""/>
                <img src={five} style={{height: "50px", width: "50"}} alt=""/>
                <img src={six} style={{height: "50px", width: "50"}} alt=""/>
                <img src={seven} style={{height: "50px", width: "50"}} alt=""/>
                <img src={mega} style={{height: "50px", width: "50"}} alt=""/>
                <img src={pyra} style={{height: "50px", width: "50"}} alt=""/>
                <img src={blind} style={{height: "50px", width: "50"}} alt=""/>
            </div>
        )
    }
}

export default CubeSelector
