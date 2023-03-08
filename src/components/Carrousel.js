import React from 'react';


const Carrousel = (props) => {
    console.log((props.list));
    let i = 0;
    const changeIndexRight = () => {
        if(i < (props.list).length-1){
            i++
        }
        else{
            i = 0
        }
        console.log(i);
    };
    const changeIndexLeft = () => {
        if(i > 0){
            i--
        }
        else{
            i = (props.list).length-1
        }
        console.log(i);
    };
    if ((props.list).length > 1){
        return (
            <div className='carrousel'>
                <img onClick={changeIndexRight} className='chevron right' src='/assets/img/chevron.png' alt='chevron vers la droite'/>
                <img onClick={changeIndexLeft} className='chevron left' src='/assets/img/chevron.png' alt='chevron vers la gauche'/>
                <img className='picture' src={props.img[i]} alt={props.alt} />
            </div>
        );
    }
    else{
        return (
            <div className='carrousel'>
                <img className='picture' src={props.img[i]} alt={props.alt} />
            </div>
        );
    }
};

export default Carrousel;