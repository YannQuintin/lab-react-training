import React from 'react';
import "./IdCard.css";

export default function IdCard(props){
  return (
    <div className="id-card">
      <img src={props.picture} alt={props.firstName}/>
      <ul className="">
        <li><strong>First name:</strong> {props.firstName}</li>
        <li><strong>Last name: </strong>{props.lastName}</li>
        <li><strong>Gender: </strong>{props.gender}</li>
        <li><strong>Height: </strong>{props.height}</li>
        <li><strong>Birth: </strong>{props.birth}</li>
      </ul>
    </div>
  )
}


