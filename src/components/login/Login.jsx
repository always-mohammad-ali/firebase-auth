import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';



const Login = () => {
    const provider = GoogleAuthProvider();

    const handleLogin = () =>{
        signInWithPopup(auth, provider)
        console.log('sign is starting')
    }
    return (
        <div>
            <h1 className='mb-5'>Please Sign in</h1>
            <button onClick={handleLogin} className='bg-green-200 p-2 rounded-lg'>Sign/Log in with google</button>
        </div>
    );
};

export default Login;