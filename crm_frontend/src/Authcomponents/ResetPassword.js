import React, { useState } from 'react'
import './LoginAuth.css'

function ResetPassword() {
    
    
    const [email, setEmail] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        if (!email) {
            alert('Please Enter your Credentials')
            return;
        }
        console.log("in resetpassword component--",email);
    }
    return (
        <div className='login-container bg-info'>
        <div className='login-form'>
            <div className='login-header'>
                <h2>Login Here</h2>
            </div>
            <div className='login-email'>
                <div>Email</div>
                <input type="text" placeholder='User email'onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className='login-btn'>
                <button type='submit'onClick={handleLogin}>Login</button>
            </div>
            


        </div>
    </div>
    )
}

export default ResetPassword
