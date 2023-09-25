import React, { useRef, useState } from 'react';
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "../../../firebase";
import {useDispatch} from "react-redux";
import {login} from "../../../features/userSlice";

const SignIn = () => {

    const [signUp,setSignUp] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const register = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(login({
                uid : user.uid,
                email : user.email
            }))
        })
        .catch((error)=>{
            console.error(error.code);
            console.error(error.message);
        })
    }

    const signIn = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(login({
                uid : user.uid,
                email : user.email
            }))
        })
        .catch((error)=>{
            console.error(error.code);
            console.error(error.message);
        }) 
    }

  return (
    <>
    {
        !signUp ? ( <div className='signIn'>
        <div className="signIn_content">
            <h2>Sign In</h2>
            <form onSubmit={signIn}>
                <input ref={emailRef} type='email' placeholder='Email' />
                <input ref={passwordRef} type='password' placeholder='Password' />
                <button>Sign In</button>
            </form>
            <span>New to NetFlix? <p onClick={()=>setSignUp(true)}>Sign Up Now</p></span>
        </div>
    </div>) : ( <div className='signUp'>
            <div className="signUp_content">
                <h2>Sign Up</h2>
                <form onSubmit={register}>
                    <input ref={emailRef} type='email' placeholder='Email' />
                    <input ref={passwordRef} type='password' placeholder='Password' />
                    <button>Sign Up</button>
                </form>
                <span>Already a member? <p onClick={()=>setSignUp(false)}>Sign In Now</p></span>
            </div>
        </div>)
    }
       
    </>
  )
}

export default SignIn;