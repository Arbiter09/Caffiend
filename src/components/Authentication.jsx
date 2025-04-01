import {useState} from 'react'

export default function Authentication() {

    const [isRegistration, setIsRegistration] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [authenticating, setAuthenticating] = useState(false)
    
    return (
        <>
            <h2 className="sign-up-text"> Sign Up / Login</h2>
            <p>Sign in to your account!</p>
            <input placeholder="Email" />
            <input placeholder="********" type="password" />
            <button><p>Submit</p></button>
            <hr />
            <div className="register-content">
                <p>Don&apos;t have an account?</p>
                <button><p>Sign Up</p></button>
            </div>
        </>
    )
}