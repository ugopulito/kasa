import React from 'react';
import { useLocation } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Dropdown from '../components/Dropdown'

import Data from '../data.json'
//Est-ce qu'il vaut mieux appeler une nouvelle fois les données ou les transmettre via le state ?
const Product = () => {
    const currentLocation = useLocation();
    const logement = Data[currentLocation.state.index];
    console.log(logement);
    return (
        <div className='containerLogement'>
            <Carrousel list={logement.pictures} img={logement.pictures} alt={logement.title}/>
            <div className='info'>
                <div className='left'>
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <ul className='tagsList'>
                        {logement.tags.map((tag, index) => (
                            <li key={index}> {tag} </li>
                        ))}
                    </ul>
                </div>
                <div className='right'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className='rating'>
                        {logement.rating}
                    </div>
                </div>
            </div>
            <div className='dropdowns'>
                <Dropdown title='Description' text={<p>{logement.description}</p>}/>
                <Dropdown title='Équipements' text={
                    <ul>
                        {logement.equipments.map((item, index) => (
                            <li key={index}> {item} </li>
                        ))}
                    </ul>
                }/>
            </div>
        </div>
    );
};

export default Product;