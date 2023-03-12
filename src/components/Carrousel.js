import React, { useState } from 'react';


const Carrousel = (props) => {
    let [currentImage, setCurrentImage] = useState(0);
    const changeIndexRight = () => {
        if(currentImage < (props.list).length-1){
            setCurrentImage(currentImage + 1);
        }
        else{
            setCurrentImage(0);
        }
    };
    const changeIndexLeft = () => {
        if(currentImage > 0){
            setCurrentImage(currentImage -1);
        }
        else{
            setCurrentImage((props.list).length-1);
        }
    };
    if ((props.list).length > 1){
        return (
            <div className='carrousel'>
                <img onClick={changeIndexRight} className='chevron right' src='/assets/img/chevron.png' alt='chevron vers la droite'/>
                <img onClick={changeIndexLeft} className='chevron left' src='/assets/img/chevron.png' alt='chevron vers la gauche'/>
                <img className='picture' src={props.img[currentImage]} alt={props.alt} />
            </div>
        );
    }
    else{
        return (
            <div className='carrousel'>
                <img className='picture' src={props.img[currentImage]} alt={props.alt} />
            </div>
        );
    }
};

export default Carrousel;