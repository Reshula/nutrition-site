 const FreeItem = ({name}) =>{
    return(<div >
        <div>
         <img src={`./${name.img}.jpg`} alt='item'/>
        <p><strong>{name}</strong></p>
        </div>

    </div>)
} 
export default FreeItem;