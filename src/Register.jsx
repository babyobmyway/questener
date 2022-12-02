import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => (
    <div>
        <h1>Register</h1>
        <p>
           Есть аккаунт? <Link to="/login">Login</Link>
        </p>
    </div>

)
