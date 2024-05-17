import { useState } from "react"

 const AcordionItem = ({title, content}) =>{

    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(<div className='accordion-div'>
        <div className={isOpen ? 'activeAccord' : 'default'} onClick={handleIsOpen}>
            {title}
        </div>
        {
            isOpen && <div className='content'>
            {content}

            </div>
        }
      
  </div>)
}
export default AcordionItem;