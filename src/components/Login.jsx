import {FormForAuth} from './Form'
import {useDispatch} from 'react-redux'
import {setUser} from '../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();

        try{
            signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
        } catch(error) {
            console.log(error)
        }
       
    }
    return (
        <FormForAuth 
            handleClick={handleLogin}
        />
    )
}

export {Login}