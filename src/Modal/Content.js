import ArticleSlide from './ArticleSlide';
import './Modal.css';
const Content = ( {setIsOpen, dataArticle} ) =>{


    return(
        <div className='modal_content'>
            <button className='close-btn' onClick={() => setIsOpen(false)}>Закрыть</button>
            <ArticleSlide dataArticle={dataArticle}/>
            
        </div>
    )



}
export default Content;