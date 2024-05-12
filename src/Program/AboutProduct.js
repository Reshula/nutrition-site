import { data } from '../Data/data';
import { useParams, useNavigate } from "react-router-dom";
import './Program.css';

const AboutProduct = () =>{
    const navigate = useNavigate();
    const { name } = useParams()



return(
    <div className='about-product-container'>
     
            {data.filter((item) => item.name === name).map((elem, index) =>{
                return(
                    <div className='main-container-box'  key={index}>
                        <div className='left-container-box'>
                        <img className="info-img"
                        src={`../${elem.image}.jpg`}
                        alt='food' width='50px'/>
                        </div>
                          <div className='rigth-container-box'>
                            <h3 className='rigth-container-title'>{elem.describe}</h3>
                            <p className='ragth-container-par'>{elem.price}</p>
                            <p className='ragth-container-par'>{elem.title}</p>
                            <p className='ragth-container-par'>{elem.titleOne}</p>
                            <div className='div-btn'>
                            <button className='btn-to-buy'>Купить</button>
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