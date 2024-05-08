import './Program.css';
import { data } from '../Data/data';
import ProgramMap from './Program'


const Program = () =>{
    return(
        <div>
           
            <div className='program-main-container'>
                <h2 className='title-program'>Мои программы</h2>
            </div>
            <div className='program-container'>
                <div className='program-box'>
                {data.map(prog => <ProgramMap key={prog.id} prog={prog}/>)}
                   
                    <button>Подробнее</button>
                </div>

            </div>
     


        </div>
    )
}
export default Program;