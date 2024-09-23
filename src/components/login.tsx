import React, { useState } from 'react';
import './form.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState<any>(null);

    const handleLogin = async (e: React.FormEvent) => {
        /*e.preventDefault();
        try {
            const user = await Auth.signIn(email, password);
            const userInfo = await Auth.currentUserInfo();
            setUserData(userInfo);
        } catch (error) {
            console.error('Error signing in', error);
        }*/
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>

            {userData && (
                <div>
                    <h3>Logged in as: {userData.attributes.email}</h3>
                    <p>Favorite Sport: {userData.attributes['custom:favoriteSport']}</p>
                </div>
            )}
        </div>
    );
};

export default Login;
