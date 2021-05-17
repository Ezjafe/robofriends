import React from 'react';
import Card from './Card.js'

const CardList = (props) =>{
    const cardComponent = props.robots.map((robot, i)=>{
        return <Card key= {i} id={robot.id} name={robot.name} email={robot.email}/>
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;