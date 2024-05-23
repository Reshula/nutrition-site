import React, { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";




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
          
            <GoTriangleLeft onClick={prevSlide} className='left-btn' />
            <img className='slide-img' src={`../${img}.jpg`} alt='article'/>
            <GoTriangleRight onClick={nextSlide} className='right-btn'/>
     
        </div>
  
        </div>
     
      
  
    );

};
export default ArticleSlide;