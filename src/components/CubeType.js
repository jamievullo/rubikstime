import React from 'react'

export default function CubeType(props) {
    return (
        <>
            <img  className='cube-type' src={props.cube.image} name={props.cube.name} onClick={props.handleCubeClick} style={{height: "60px", width: "57px", marginRight: '.424em'}} alt=""/>
            {/* <span>{props.cube.name}</span> */}
        </>
    )
}
