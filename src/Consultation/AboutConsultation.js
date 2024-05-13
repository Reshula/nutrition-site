import { dataConsultation } from '../Data/dataConsultation';
import { useParams, useNavigate } from "react-router-dom";

import { addItemToCart } from '../redux/cartSlice';

import { useDispatch } from "react-redux";

const AboutConsultation = () =>{
    const navigate = useNavigate();
    const { titleC } = useParams()
    const dispatch = useDispatch();



return(
    <div className='about-product-container'>
     
            {dataConsultation.filter((item) => item.titleC === titleC).map((elem, index) =>{
                return(
                    <div className='main-container-box'  key={index}>
                        <div className='left-container-box'>
                        <img className="info-img"
                        src={`../${elem.img}.jpg`}
                        alt='food' width='50px'/>
                        </div>
                          <div className='rigth-container-box'>
                            <h3 className='rigth-container-title'>{elem.name}</h3>
                            <p className='rigth-container-par'><strong>{elem.price} man</strong></p>
                            <p className='rigth-container-par'>{elem.describtionOne}</p>
                            <p className='rigth-container-par'>{elem.descriptionTwo}</p>
                            <p className='rigth-container-par'>{elem.descriptionThree}</p>
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
                              >Купить
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