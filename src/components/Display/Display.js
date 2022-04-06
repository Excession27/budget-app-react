import React from 'react';
import './Display.css';


const Display = props => {
  return (
    <div className={`${props.bgColor}  display`}>
        <p>{props.name}</p>
        <div>
            <p>{props.sum}</p>
            <p>{props?.percentage}</p>
        </div>
    </div>
  )
}


export default Display


