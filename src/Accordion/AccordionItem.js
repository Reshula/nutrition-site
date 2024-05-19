import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

 const AccordionItem = ({title, content}) =>{

    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(<div className='accordion-div'>
       
        <div className={`accordion-header ${isOpen ? 'activeAccord' : 'default'}`}onClick={handleIsOpen}>
      
            <strong><span>{title}</span></strong>
            <span className="toggle-icon">{isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}</span>
           
        </div>
        {
            isOpen &&
            <div className='content'>
            {content}

            </div>
        }
      
  </div>)
}
export default AccordionItem;