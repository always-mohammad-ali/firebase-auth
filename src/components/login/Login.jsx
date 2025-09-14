import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';



const Login = () => {

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
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

    const handleGithubSignIn = () =>{
       console.log('github login is starting');
       
       signInWithPopup(auth, githubProvider)
       .then(result =>{
        console.log(result)
        setUser(result.user)
       })
       .catch(error =>{
        console.log(error)
       })
    }
    const handleGithubSignOut = () =>{
        signOut(auth).then(() =>{
            console.log('sign out done')
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
                  <>
                    <button onClick={handleSignOut} className='bg-green-200 p-2 rounded-lg'>Google Sign Out</button>

                    <button onClick={handleGithubSignOut} className='bg-green-200 p-2 rounded-lg ml-5'>Github Sign Out</button>
                  </>
                 
                  :
                 <>
                   <button onClick={handleSignIn} className='bg-green-200 p-2 rounded-lg'>Sign In with Google</button>

                   <button onClick={handleGithubSignIn} className='ml-5 bg-green-200 p-2 rounded-lg'>Sign In with Github</button>
                 </>
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