export const Nutrition = ({ label, quantity, unit,index}) =>{
    return(
        <div key={index}>
               <li className="list"><span>{label}</span> <em> {quantity.toFixed(0)}</em> <b>{unit}</b></li>

        </div>
    )
}