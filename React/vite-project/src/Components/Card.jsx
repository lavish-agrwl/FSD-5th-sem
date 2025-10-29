import React from 'react'
import "./card.css"

function Card(props) {
  return (
    <div>
      <center>
        <div id="adi">
          <img
            src="https://animalfactguide.com/wp-content/uploads/2025/03/panda-climbing.jpg"
            alt=""
            height={300}
            width={300}
          />
          <h1>{[props.name]}</h1>
        </div>
      </center>
    </div>
  );
}

export default Card