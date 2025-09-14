import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';



const Login = () => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)

    const handleSignIn = () =>{
        

        console.log('signin is starting');

        signInWithPopup(auth, provider).then(result =>{
            console.log(result.user);
            setUser(result.user);

        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleSignOut = () =>{
          signOut(auth).then( () =>{
            console.log('Sign out done')
            setUser(null)
          })
          .catch(error =>{
            console.log(error)
          })
    }

    return (
        <div>
            <h1 className='mb-5'>Please Sign in</h1>
            
            

            {
                user ?
                 <button onClick={handleSignOut} className='bg-green-200 p-2 rounded-lg'>Sign Out</button>
                  :
                 <button onClick={handleSignIn} className='bg-green-200 p-2 rounded-lg'>Sign In</button>
            }

            {
                user && <div className=''>
                  <h1>{user.displayName}</h1>
                  <p>{user.email}</p>
                  <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;