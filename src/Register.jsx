import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from './components/SignUp'

export const Register = () => (
    <div>
        <h1>Register</h1>
        <SignUp />
        <p>
           Есть аккаунт? <Link to="/login">Login</Link>
        </p>
    </div>

)
