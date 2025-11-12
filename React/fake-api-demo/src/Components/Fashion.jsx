import React from 'react'

function Fashion(props) {
  return (
    <div>
        <h1>Fashion Show</h1>
        <img src={props.image} alt="" height={80} width={80} />
    </div>
  )
}

export default Fashion