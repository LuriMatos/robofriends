import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return(
        <div className=''>
            {robots.map((robot, index) => {
                return (
                    <Card 
                      key={index}
                      id={robot.id}
                      name={robot.name}
                      email={robot.email}/>
                )
            })}
        </div>
    );
}

export default CardList;