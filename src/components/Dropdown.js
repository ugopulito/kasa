import React, { useState } from 'react';

const Dropdown = (props) => {
    const [opened, setOpened] = useState(false);
    const handleClick = () => {
        setOpened(!opened);
    }
    return (
        <div className='dropdown'>
            <h3 onClick={handleClick}>{props.title} {opened ? <img className='chevron up' src='/assets/img/chevron.png' alt='chevron'/> : <img className='chevron down' src='/assets/img/chevron.png' alt='chevron'/>}</h3>
            {opened ? props.text : <p className='closed'></p>}
        </div>
    );
};

export default Dropdown;