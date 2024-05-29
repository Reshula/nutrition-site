import { dataConsultation } from '../Data/dataConsultation';
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import ModalForm from '../Modal/ModalForm';
import Form from '../Modal/Form';
import { FaArrowLeft } from "react-icons/fa";
// import { consultationDescriptions } from '../Data/dataConsultation';
// import ConsultationItem from './ConsultationItem';


const AboutConsultation = () =>{
    const navigate = useNavigate();
    const { titleC } = useParams();
    const [isOpen, setIsOpen ] = useState(false)



return(
    <div className='about-product-container'>
     
            {dataConsultation.filter((item) => 
            item.titleC === titleC)
            .map((elem, index) =>{
                return(
                    <div className='main-container-box'  key={index}>
                        <div className='left-container-box'>
                        <img className="info-img"
                        src={`../${elem.img}.jpg`}
                        alt='elem.item' />
                        </div>
                          <div className='rigth-container-box'>
                            <h3 className='rigth-container-title'><strong>{elem.name}</strong></h3>
                            <p>{elem.price} <strong>azn</strong></p>
                            <p>{elem.description}</p>
                      
                     
                {/* {consultationDescriptions.map((description) =>
                 <ConsultationItem key={description.id} description={description.description}/>)}  */}


                         
                          

                            <div className='div-btn'>
                            <button className='btn-to-buy'
                           
                                onClick={() => setIsOpen(true)} >Заявка</button>
                                {isOpen && 
                                <ModalForm setIsOpen={setIsOpen}>
                                <Form setIsOpen={setIsOpen} />
                                </ModalForm>    
                                }
                              
                           
                            <button className="btn-go-back" onClick={() => navigate(-1)}><FaArrowLeft />  </button>
                            </div>
                        </div>
                    </div>
                ); 
            })}
            
            
    </div>
)

}
export default AboutConsultation;






