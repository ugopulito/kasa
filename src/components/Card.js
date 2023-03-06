import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
    return (
        <Link to={"/logement/"+props.id} state={{index : props.index}}>
            <article className='card'>
                <img src={props.img} alt={props.alt} />
                <div className='gradient'></div>
                <h3>{props.title}</h3>
            </article>
        </Link>
    );
};

export default Card;