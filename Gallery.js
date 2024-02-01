import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image1 from '../images/imagen1.jpg';

import image3 from '../images/imagen3.jpg';
import image4 from '../images/imagen4.jpg';
import image5 from '../images/imagen5.jpg';
import image6 from '../images/imagen6.jpg';
import image7 from '../images/imagen7.jpg';
import image8 from '../images/imagen8.jpg';
import image9 from '../images/imagen9.jpg';
import image10 from '../images/imagen10.jpg';
import image11 from '../images/imagen11.jpg';

import '../App.css';

function Gallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1,  image3, image4, image5, image6, image7, image8, image9, image10];

    const handlePrevClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="gallery-container">
            <div className="marco">
                <img src={images[currentImageIndex]} alt="Descripción de la imagen" />
                <div className="buttons-container">
                    <button onClick={handlePrevClick}>
                        <FaChevronLeft />
                    </button>
                    <button onClick={handleNextClick}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Gallery;

