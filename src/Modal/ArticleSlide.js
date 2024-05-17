import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';




const ArticleSlide = ({ dataArticle}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const {img}   = dataArticle[slideIndex];
   

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === dataArticle.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? dataArticle.length - 1 : prevIndex - 1));
    };

    return (
       <div>
        <div className="slider">
            <img className='slide-img' src={`../${img}.jpg`} alt='article'/>
            <BsChevronCompactLeft onClick={prevSlide} className='left-btn-one-two-three' />
            <BsChevronCompactRight onClick={nextSlide} className='right-btn-one-two-three'/>
     
        </div>
  
        </div>
     
      
  
    );

};
export default ArticleSlide;