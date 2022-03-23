import { Form, Formik } from 'formik'
import { MyTextInput } from '../components'

import '../styles/styles.css'
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={(values) => { console.log(values) }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required')
                        .min(2, 'El nombre debe tener al menos 2 caracteres')
                        .max(15, 'El nombre no puede pasar de 15 caracteres'),
                    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
                    password: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres'),
                    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden').required('La confirmación de la contraseña es requerida')
                })}
            >

                {({ handleReset }) => (
                    <Form>
                        <MyTextInput label={'Nombre'} name={'name'} />
                        <MyTextInput type='email' label={'Email'} name={'email'} />
                        <MyTextInput type='password' label={'Password'} name={'password'} />
                        <MyTextInput type='password' label={'Confirme Password'} name={'confirmPassword'} />

                        <button type='submit'>Register</button>
                        <button onClick={handleReset} type='button'>Reset</button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}
