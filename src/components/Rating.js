import React from 'react';


const Rating = ({nbStars, totalStars}) => {
    let fillStars = totalStars - nbStars;
    return(
        <>
        {Array(nbStars).fill('tmp').map((_, index) => 
                <span className={'material-symbols-outlined full'} key={index}>star</span>
        )}
        {Array(fillStars).fill('tmp').map((_, index) => 
                <span className={'material-symbols-outlined empty'} key={index}>star</span>
        )}
        </>
    )
}

export default Rating;