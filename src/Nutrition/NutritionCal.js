import { useEffect, useState } from 'react';
import { Nutrition } from "./Nutrition";
import Swal from 'sweetalert2';
import './Nutrition.css'
import LoaderPage from '../Loader/LoaderPage';



function NutritionCal() {

const MY_ID = 'a97dc4d3';
const MY_KEY = '196b95d36fd654dc4afdf2ad74370b0c'


const [mySearch, setMySearch] = useState ();
const [wordSubmmited, setWordSubmmited] = useState('');
const [myNutrition, setMyNutrition] = useState ();
const [stateLoader, setStateLoader] = useState(false);


const getNutrition = async (ingr) =>{
  setStateLoader(true);
  const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${MY_ID}&app_key=${MY_KEY}`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingr: ingr })
    
  })

   

  if(response.ok) {
    setStateLoader(false);
    const data = await response.json();
    console.log(data)
    setMyNutrition(data);
  }
    else {
      setStateLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Add unit!",
        
      });

  }

}

useEffect(() => {
  if (wordSubmmited !== '') {
    let ingr = wordSubmmited.split(/[,,;,\n,\r]/);
    getNutrition(ingr);
  }
}, [wordSubmmited])


useEffect(() =>{
const timer = setTimeout (() =>setStateLoader(false), 5000);
return() => clearTimeout(timer)

}, [])

const myRecipeSearch = e => {
  setMySearch(e.target.value);
}
const finalSearch = e => {
  e.preventDefault();
  setWordSubmmited(mySearch);
}
  return (
    <section id="nutritionCal_section">
    <div className="nutrition-container">
      {stateLoader && <LoaderPage />}
     
      <div className='image-container'>
      <div className="centered">
        <h1 className='title-program'> Калькулятор калорий</h1>
      <form onSubmit={finalSearch}>
        <input
          placeholder="Выбери продукт..."
          onChange={myRecipeSearch}
          className='input'
        />
        <button className='nutrition-submit' type="submit">Начать</button>
      </form>
      </div>
      </div> 
     
      <div className='table' >
        <ul className='ul-instraction'>
          <li className='instraction'>
          Введите элемент на английском языке: 1 banan 100 gr rice  т.д ...
          </li>
            <li className='my-search'>
              <b><i>  {mySearch}</i></b>
            </li>
        {
          myNutrition && <li className='par-nutrients'><span>"Total calories":{myNutrition.calories} kcal</span></li>
        }
        
        {
          myNutrition && Object.values(myNutrition.totalNutrients)
            .map(({ label, quantity, unit,index }) =>
              <Nutrition
               key={index}
                label={label}
                quantity={quantity}
                unit={unit}
              />
            )
        }
        </ul>
      </div>
   
    </div>
    </section>
  );
}

export default NutritionCal;
