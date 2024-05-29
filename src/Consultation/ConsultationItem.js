const ConsultationItem = ({id, description}) =>{

    return (
        <div key={id}>
         
             <p>{description.descriptionOne}</p>
            <p>{description.descriptionTwo}</p>
            <p>{description.descriptionThree}</p> 
   

            
                          
        </div>
    )


}
export default ConsultationItem;