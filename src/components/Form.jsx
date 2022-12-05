import {useState} from 'react'
import Button from 'react-bootstrap/Button';

const FormForAuth = ({handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');   
    return (
        <div>
            <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            />
            <input
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
            />
            <button
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    )
}

export {FormForAuth}