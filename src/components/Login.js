import React, { useState } from 'react'
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault(); // prevent refresh

      auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(err => alert(err.message))
  }

  return (
    <div className='login'>
      <div className='login-header'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
          className="login-logo"
        />
      </div>

      <div className='login-box'>
        <h1>Sign In</h1>
        <form>
          <input 
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type='text'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button onClick={signIn} className='login-button'>Sign In</button>
        </form>

        <div className='login-help'>
          {/* check box */}
          <p>Remember me</p>
          <p>Need help?</p>
        </div>

        <div className='login-signup'>
          <p>New to Netflix?</p>
          <span>Sign up now</span>
        </div>
      </div>

    </div>
  )
}

export default Login
