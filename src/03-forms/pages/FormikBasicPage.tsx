import React from 'react'
import '../styles/styles.css'

import { useFormik, FormikErrors } from 'formik'

interface FormValues {
    name: string,
    lastName: string,
    email: string,
}

export const FormikBasicPage = () => {

    const validate = (values: FormValues) => {

        const errors: FormikErrors<FormValues> = {};

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.lastName) {
            errors.lastName = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        return errors;

    }

    const { handleChange, handleSubmit, handleBlur, errors, touched, handleReset, values } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { console.log(values) },
        validate: validate
    });

    return (
        <div>
            <h1>Formic Basic Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>

                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    name='name'
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                />
                {touched.name && errors.name && <span>{errors.name}</span>}

                <label htmlFor='name'>Last Name</label>
                <input
                    type="text"
                    name='lastName'
                    onBlur={handleBlur}
                    value={values.lastName}
                    onChange={handleChange}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='name'>Email</label>
                <input
                    type="email"
                    name='email'
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Register</button>

            </form>

        </div>
    )
}
