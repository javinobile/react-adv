<<<<<<< HEAD
import { Form, Formik } from 'formik'
import { MyTextInput } from '../components'

import '../styles/styles.css'
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
=======
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
    
    return (
        <div>
            <h1>Register Formik Page</h1>

>>>>>>> 6751ffa5a6a6c0b60ab498e2e49a23a3d849d16f
            <Formik
                initialValues={{
                    name: '',
                    email: '',
<<<<<<< HEAD
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
=======
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                    .max(15, 'El nombre debe de ser menor de 15 caracteres')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('Revise el formato del correo')
                                    .required('Requerido'),
                        password1: Yup.string()
                                        .min( 6, 'Mínimo 6 letras' )
                                        .required('Requerido'),
                        password2: Yup.string()
                                        .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                        .required('Requerido')
                    })
                }
            >
                { ({ handleReset }) => (
                    <Form>
                        <MyTextInput 
                            label="Nombre"
                            name="name"
                            placeholder="Fernando"
                        />

                        <MyTextInput 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john@google.com"
                        />

                        <MyTextInput 
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder="******"
                        />

                        <MyTextInput 
                            label="Confirm password"
                            name="password2"
                            type="password"
                            placeholder="******"
                        />


                        <button type="submit">Create</button>
                        
                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                )}
                

            </Formik>



>>>>>>> 6751ffa5a6a6c0b60ab498e2e49a23a3d849d16f
        </div>
    )
}
