import React from 'react';

const Dropdown = (props) => {
    const log = () => {
        console.log('clic sur ' + props.title);
    }
    return (
        <div className='dropdown'>
            <h3 onClick={log}>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default Dropdown;