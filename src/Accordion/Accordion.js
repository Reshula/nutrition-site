import { list } from "./List";
import  AcordionItem from './AccordionItem';
import './Accordion.css'

export const Accordion =() => {
    return(<div className="accordion">

        <h3 className='title-accordion '>Ответы на вопросы :</h3>
        <div className='accordion-container'>
        {list.map((item, index) =>
        < AcordionItem key={index} title={item.title} content={item.content}/>
        
        )}
        </div>
        
        </div>)
}