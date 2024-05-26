import React, { useState } from "react";
import './LoginForm.css';
import avocado from '../Assets/avocado_4.png'




    const LoginForm = () => {
        const [isMember, setIsMember] = useState(false);
    
        const toggleForm = () => {
            setIsMember(!isMember);
        };
  
    return(
        <section id='loginForm_section'>
            
        <div className='wrapper'>
        <img className="img-form" src={avocado} alt='avocado'/>
        
              {isMember ? (
                    <form method="post" id='form-login' action="/">
                        <h1>Login</h1>
                        <div>
                            <input
                                type='email'
                                className="input-box"
                                placeholder='E-mail'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                className="input-box"
                                placeholder='Password'
                                required
                            />
                        </div>
                        <button className="create-account-btn" type="submit">Log in</button>
                        <div className="registr-link">
                            <p className="form-sup-text">
                            Create  Account <a a className='a-sign-up' href='#' onClick={toggleForm}>Sign Up</a>
                            </p>
                        </div>
                    </form>
                ) : (
                    <form method="post" id='form-signup' action="/">
                        <h1>Create Your Account</h1>
                        <p className="form-sup-text">Бесплатные материалы</p>
                        <div>
                            <input
                                type='text'
                                className="input-box"
                                placeholder='Username'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type='email'
                                className="input-box"
                                placeholder='E-mail'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                className="input-box"
                                placeholder='Password'
                                required
                            />
                        </div>
                        <button className="create-account-btn" type="submit">Create account</button>
                        <div className="registr-link">
                            <p className="form-sup-text">
                                Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
                            </p>
                            <p className="par-account">
                                Already a member? <a className='a-log-in' href='#' onClick={toggleForm}>Log in here</a>
                            </p>
                        </div>
                    </form>
                )}

        </div>
        </section>
    )
}
export default LoginForm;