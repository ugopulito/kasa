import React from 'react';

const Banner = (props) => {
    return (
        <div className='banner'>
            <img src={props.img} alt={props.alt} />
            <p>{props.text}</p>
        </div>
    );
};

export default Banner;