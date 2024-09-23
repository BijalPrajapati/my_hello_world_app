import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [favoriteSport, setFavoriteSport] = useState('');

    const handleRegister = async () => {
        /*try {
            await Auth.signUp({
                username: email,
                password,
                attributes: { email, 'custom:favoriteSport': favoriteSport }
            });
            alert('Registration successful!');
        } catch (error) {
            alert('Error registering: ' + error.message);
        }*/
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
            <h2>Registration</h2>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Favorite Sport" onChange={(e) => setFavoriteSport(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
