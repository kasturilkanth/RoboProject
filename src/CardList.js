import React from 'react';
import Card from './Card';


function CardList({robots}){
    return(
        <div>
        {
        robots.map(robo=>{
        return <Card id={robo.id} name={robo.name} email={robo.email}/>
        })
        }
        </div>
    )
}
export default CardList;