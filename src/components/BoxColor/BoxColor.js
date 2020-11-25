import React from 'react';
import "./BoxColor.css";


function BoxColor(props) {
    const backgroundDiv = {backgroundColor : `rgb(${props.r} , ${props.g} , ${props.b})`};

    return (
        <h1 className="BoxColor" style={backgroundDiv}>
            rgb({props.r} , {props.g} , {props.b})
        </h1>
    )
}


export default BoxColor;
