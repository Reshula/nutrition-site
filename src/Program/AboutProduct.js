import { data } from '../Data/data';
import { useParams, useNavigate } from "react-router-dom";
import { addItemToCart } from '../redux/cartSlice';
import { useDispatch } from "react-redux";
import ChangeQuantity from '../Cart/ChnageQuantity';
import { useState } from 'react';
import './Program.css';

const AboutProduct = () =>{
    const navigate = useNavigate();
    const { name } = useParams()
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);



return(
    <div className='about-product-container'>
     
            {data.filter((item) => item.name === name).map((elem, index) =>{
                return(
                    <div className='main-container-box'  key={index}>
                        <div className='left-container-box'>
                        <img className="info-img"
                        src={`../${elem.image}.jpg`}
                        alt='food' />
                        </div>
                          <div className='rigth-container-box'>
                            <h3 className='rigth-container-title'>{elem.descripe}</h3>
                            <p className='rigth-container-par'>{elem.price} <strong>azn</strong></p>
                            <p className='rigth-container-par'>{elem.title}</p>
                            <p className='rigth-container-par'>{elem.titleOne}</p>
                            <div className='div-btn'>
                                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                            <button className='btn-to-buy'
                                   onClick= {() =>{
                                    dispatch(
                                        addItemToCart({
                                            id: elem.id,
                                            img: elem.image,
                                            price: elem.price,
                                            quantity
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
export default AboutProduct;