import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} className='productImg' alt="the image" />
        <h2>{props.ttl}</h2>
        <p>{props.des}</p>
        <h3>{props.price}</h3>
    </div>
  )
}

export default Card