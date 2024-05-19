

 const FreeItem = ({item}) =>{
    return(<div >
        <div>
         <img src={`../${item.img}.jpg`} alt='item'/>
        <p><strong>{item.name}</strong></p>
        </div>

    </div>)
} 
export default FreeItem;