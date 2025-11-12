import React from 'react'

function Fashion(props) {
  return (
    <div>
        <h1>Fashion Show</h1>
        <img src={props.image} alt="" height={80} width={80} />
        <h3>{props.name}</h3>
        <h4>Price: {props.price}</h4>
    </div>
  )
}

export default Fashion