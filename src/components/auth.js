
import {auth,googleProvider} from '../config/firebase' ;
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth' ;
import {useState} from 'react' ;


const Auth=()=>{

    const [email,setEmail]=useState("") ;
    const [password,setPassword]=useState("") ;

    console.log(auth?.currentUser?.email) ;

    const signIn=async ()=>{
        try{ await createUserWithEmailAndPassword(auth,email,password) ;}
        catch(error){
            console.log(error.message) ;
        }
  
    }

    const signInWithGoogle=async ()=>{
        try{ await signInWithPopup(auth,googleProvider) ;}
        catch(error){
            console.log(error.message) ;
        }
   
    }

    const logOut=async ()=>{
        try{ await signOut(auth) ;}
        catch(error){
            console.log(error.message) ;
        }
  
    }

    return (
        <div>
                   <input placeholder="email.." onChange={(e)=>setEmail(e.target.value)}/>
                   <input placeholder="password.." type="password" onChange={(e)=>setPassword(e.target.value)} />
                   <button onClick={signIn}>Sign In</button>
                   <button onClick={signInWithGoogle}>Sign In With Google</button>
                   <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default Auth ;