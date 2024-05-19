import { dataConsultation } from '../Data/dataConsultation';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from '../redux/cartSlice';
// import { consultationDescriptions } '../Data/dataConsultation';
import ConsultationItem from './ConsultationItem';


const AboutConsultation = () =>{
    const navigate = useNavigate();
    const { titleC } = useParams()
    const dispatch = useDispatch();



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
                        alt='item' />
                        </div>
                          <div className='rigth-container-box'>
                            <h3 className='rigth-container-title'><strong>{elem.name}</strong></h3>
                            <p>{elem.price} <strong>azn</strong></p>
                            <p>{elem.describtionOne}</p>
                            <p>{elem.describtionTwo}</p>
                            <p>{elem.describtionThree}</p>
                     
                {/* {consultationDescriptions.map(description =>
                 <ConsultationItem 
                 key={description.id}
                 description={description}
                 />)} */}
                         
                          

                            <div className='div-btn'>
                            <button className='btn-to-buy'
                                   onClick= {() =>{
                                    dispatch(
                                        addItemToCart({
                                            id: elem.id,
                                            img: elem.img,
                                            price: elem.price,
                                        })
                                    )
                                   }
                                   }
                              >Заявка
                               </button>
                            <button className="btn-go-back" onClick={() => navigate(-1)}>Назад </button>
                            </div>
                        </div>
                    </div>
                ); 
            })}
            
            
    </div>
)

}
export default AboutConsultation;