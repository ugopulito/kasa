import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Data from '../data.json'
//Est-ce qu'il vaut mieux appeler une nouvelle fois les données ou les transmettre via le state ?
const Product = () => {
    const {id} = useParams();
    const currentLocation = useLocation();
    console.log(Data[currentLocation.state.index]);
    return (
        <div>
            Contenu de la page pour le logement {id} et l'index : {currentLocation.state.index}.
        </div>
    );
};

export default Product;