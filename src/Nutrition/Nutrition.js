export const Nutrition = ({ label, quantity, unit,index}) =>{
    return(
        <div key={index}>
               <p><b>{label}</b> - {quantity.toFixed(0)} {unit}</p>

        </div>
    )
}