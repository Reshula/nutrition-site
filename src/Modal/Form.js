import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import formPic from '../Assets/formPic.jpg';


const Form = ({setIsOpen}) => {
    const [state, handleSubmit] = useForm("meqyevly");
  
    if (state.succeeded) {
      return <div className="thank-you">Ваша заявка успешно отправлена!</div>;
    }
  
    return (
      <div className='form-container'>
    
      <div >
          <img className='form-img' src={formPic} alt=''/>
          <h2>Заявка на консультацию</h2>
          <h4 className='request'>Пожалуйста, кратко опишите суть обращения и имеющиеся заболевания или симптомы</h4>
  
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
  
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ваш E-mail"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
  
        <label htmlFor="tel"></label>
        <input
          id="tel"
          type="tel"
          name="tel"
          placeholder="Ваш телефон"
          required
        />
        <ValidationError
          prefix="Telephone"
          field="tel"
          errors={state.errors}
        />
  
        <label htmlFor="message"></label>
        <input className='textarea'
          id="message"
          name="message"
          placeholder="Кратко опишите суть обращения..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
  
        <button className="submit-btn" type="submit" disabled={state.submitting}>
        Отправить
        </button>
      </form>
      <p className='submit-par'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
      </div>
  
  
  
      </div>
    );
  }
export default Form;