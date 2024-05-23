import ArticleSlide from './ArticleSlide';
import { GoXCircleFill } from "react-icons/go";
const Content = ( {setIsOpen, dataArticle} ) =>{


    return(
        <div className='modal_content'>
            <button className='close-btn' 
            onClick={() => setIsOpen(false)}> 
            <GoXCircleFill />
            </button>
            <ArticleSlide dataArticle={dataArticle}/>
            
        </div>
    )



}
export default Content;