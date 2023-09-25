import React, { useState } from 'react';
import "./Login.css";
import SignIn from './SignIn/SignIn';

const Login = () => {

    const [signIn,setSignIn] = useState(false);

  return (
    <>
        <div className='login'>
            <div className='login_header'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
                <button onClick={()=>setSignIn(true)}>
                    Sign In
                </button>
            </div>

            <div className="login_content">
                {
                    signIn ? (<SignIn />) : (<><h1>Unlimited movies, TV shows and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form>
                        <input type='text' placeholder='Email address' />
                        <button onClick={(e)=>{e.preventDefault();setSignIn(true)}}>Get Started</button>
                    </form></>)
                }   
            </div>

            <div className="login_fade"></div>
        </div>
    </>
  )
}

export default Login;