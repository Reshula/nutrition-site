import './Program.css';
import { data } from '../Data/data';
import ProgramMap from './ProgramMap'


const Program = () =>{
    return(
        <section id="program_section">
        <div>
           
            <div className='program-main-container'>
                <h2 className='title-program'>Мои программы</h2>
            </div>
            <div className='program-container'>
                <div className='program-box'>
                {data.map(prog => <ProgramMap key={prog.id} prog={prog}/>)}
                   
                  
                </div>

            </div>
     


        </div>
        </section>
    )
}
export default Program;