import React, { useState } from "react";
import './Login.css';
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();


    auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
          history.push('/')
        })
        .catch(error=> alert(error.message))

    
  }

  const register = e =>{
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          
          if(auth){
            history.push('/')
          }
        })
        .catch(error=>alert(error.message))


   
  }


    
  return (
    <div className='login'>
        <Link to='/'>
      <img className='login_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=""/>
      </Link>
      <div className='login_container'>
          <h1>Sign-in</h1>

          <from>
              <h5>E-mail</h5>
              <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

              <button onClick={signIn} type="submit"  className='login_signInButton'>Sign In</button>
          </from>
          <p>
          By signing in you agree to amazon condition of use and sale.Please see our privacy notice, 
          our cookies notice and our interest based ad notice.
          </p>

          <button onClick={register}  className='login_registerButton'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
