import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Error = () => {
    window.scrollTo(0,0);
    return (
        <>
        <Header/>
        <div className='error'>
            <span className='big'>404</span>
            <span className='medium'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
        </>
    );
};

export default Error;