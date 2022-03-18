import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

interface FormData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const RegisterPage = () => {

    const { onChange, onSubmit, name, password, email, confirmPassword } = useForm<FormData>(
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

                <input type="text" name='name' value={name} onChange={(event) => onChange(event)}
                    placeholder="Name" />

                <input type="email" name='email' value={email} onChange={(event) => onChange(event)}
                    placeholder="Email" />

                <input type="password" name='password' value={password} onChange={(event) => onChange(event)}
                    placeholder="Password" />

                <input type="password" name='confirmPassword' value={confirmPassword} onChange={(event) => onChange(event)}
                    placeholder="Repeat Password" />

                <button type='submit'>Register</button>

            </form>
        </div>
    )
}
