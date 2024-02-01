
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import portada from '../images/portada.jpg';




function Home() {
    return (
        
        <div className="home-container">

            <img src={portada} alt="Imagen Home" />
            

        </div>
      
    );
}

export default Home;





