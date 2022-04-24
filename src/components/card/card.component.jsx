




import React from "react";



export const Card = props => <div  className='card-container'>
    <img src={`https://robohash.org/${props.monsters.id}?set=set1&size=180x180`} alt="" />
     <h2>{props.monsters.name} </h2> 
     <p>{props.monsters.email}</p>
      </div>
