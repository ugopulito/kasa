import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className='error'>
            <span className='big'>404</span>
            <span className='medium'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default Error;