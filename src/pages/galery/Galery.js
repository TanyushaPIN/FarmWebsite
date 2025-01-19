import { useState } from 'react';
import galleryStyles from './Galery.module.css'

const Galery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        './image1.png',
        './image2.png',
        './image3.png', 
        './image4.png',
        './image5.png'
    ];

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={galleryStyles.container}>
            <div 
                className={galleryStyles.arrow} 
                onClick={goToPrevious}
            >
                &#8249;
            </div>
            <img 
                src={require(`${images[currentIndex]}`)} 
                alt={`Фото ${currentIndex + 1}`}
                className={galleryStyles.image}
            />
   
            
            <div className={galleryStyles.arrow} onClick={goToNext}>
                &#8250;
            </div>
        </div>
    );
};


export default Galery; 