import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

interface FormData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const RegisterPage = () => {

    const { onChange, onSubmit, reset, isValidEmail, name, password, email, confirmPassword } = useForm<FormData>(
        {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    )


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit} noValidate>

                <input
                    type="text"
                    name='name'
                    value={name}
                    onChange={(event) => onChange(event)}
                    placeholder="Name"
                    className={`${name.length <= 0 && 'has-error'}`}
                />
                {name.length <= 0 && <span>El campo nombre es requerido</span>}

                <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={(event) => onChange(event)}
                    placeholder="Email"
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>El campo email es inválido</span>}

                <input
                    type="password"
                    name='password'
                    value={password}
                    onChange={(event) => onChange(event)}
                    placeholder="Password"
                    className={`${name.length <= 0 && 'has-error'}`}
                />
                {password.length <= 0 && <span>El campo es obligatorio</span>}
                {password.length > 0 && password.length < 6 && <span>El password debe tener mínimo 6 caracteres</span>}

                <input
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={(event) => onChange(event)}
                    placeholder="Repeat Password"
                    className={`${name.length <= 0 && 'has-error'}`}
                />
                {confirmPassword.length <= 0 && <span>El campo es obligatorio</span>}
                {confirmPassword.length > 0 && password !== confirmPassword && <span>Las contraseñas deben coincidir</span>}


                <button type='submit'>Register</button>
                <button onClick={reset} type='button'>Reset</button>

            </form>
        </div>
    )
}
