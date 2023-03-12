import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

import Data from '../data.json';

const Home = () => {
    window.scrollTo(0,0);
    return (
        <div>
            <Banner img="/assets/img/falaises.jpg" alt="photo de falaises" text="Chez vous, partout et ailleurs"/>
            <div className='cards'>
                {Data.map((item, index) => (
                    <Card key={index} id={item.id} index={index} img={item.cover} alt={item.title} title={item.title}/>
                ))}
            </div>
        </div>
    );
};

export default Home;