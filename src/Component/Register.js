import React, { useState } from 'react';




export const Register = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>

            <input value={name} onChange={(e) => setName(e.target.value)} type="name" />

                <label htmlFor='email'>Email</label>

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

                <label htmlFor='password'>Password</label>

                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                <button className='btn' type="submit">Register</button>
            </form>
            <button className='link-btn' onClick={()=>props.onFormSwitch("register")}>Don't have an account? Register Here</button>
        </div>
    )
}