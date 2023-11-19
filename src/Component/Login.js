import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        
        <div className='auth-form-container'>
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

                <label htmlFor='password'>Password</label>

                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                <button className='btn' type="submit">Login</button>
                <label>test</label>
            </form>
            <button  className='link-btn' onClick={()=>props.onFormSwitch("login")}>Already have an account? Login Here</button>
        </div>
        

    )
}

