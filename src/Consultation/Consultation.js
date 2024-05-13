import { dataConsultation } from '../Data/dataConsultation'
import ConsultationMap from './ConsultationMap'

const Consultation = () =>{
    return(
        <section id='consultation_section'>
        <div >
            <div className='title-consultation'>
            Мои консультации
            </div>
            <div className="center-consultation-container">
            <div className='consultation-container'>
                <div className='consultation-box'>
                {dataConsultation.map(consult => <ConsultationMap key={consult.id} consult={consult}/>)}
                </div>
            </div>
                

            </div>
            

        </div>
        </section>
    )
}
export default Consultation