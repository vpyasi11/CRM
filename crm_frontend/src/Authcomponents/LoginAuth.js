import React, { useState } from 'react'
import './LoginAuth.css'
import ResetPassword from './ResetPassword';


function LoginAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // now creating a state to toggle between reset password and default login
    const [passwordChecker, setPasswordChecker] = useState('login')

    // function to check credential during submmit click
    function handleLogin(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        if (!email || !password || password.length <! 8 ||!email.includes('@') ||!email.includes('.') ) {
            alert('Please enter your credentials')
            return;
        }

    }

    // function to check if state is login or not when clicked on forgot function
    function toResetpassword() {
        console.log('reset password working');
        setPasswordChecker('reset')
    }

    return (

        <div className='login-container bg-info'>
            {passwordChecker === 'login' &&

                <div className='login-form'>
                    <div className='login-header'>
                        <h2>Login Here</h2>
                    </div>
                    <div className='login-email'>
                        <div>Email</div>
                        <input type="text" placeholder='User email' onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='login-password'>
                        <div>Password</div>
                        <input type="text"  placeholder='User password' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='login-btn'>
                        <button type='submit' onClick={handleLogin}>Login</button>
                    </div>
                    <div className='login-footer'>
                        <form type="submit" onClick={()=>toResetpassword()}>Don't remember your password?</form>
                    </div>
                </div>

            }


            {/*here i am checking and falsifying the default state value  */}
            {passwordChecker !== 'login' && <ResetPassword />}


        </div>

    )
}

export default LoginAuth
