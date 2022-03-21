import '../styles/styles.css'
import * as Yup from 'yup';
import { Formik, Form } from 'formik'
import {MyCustomCheck, MySelectInput, MyTextInput} from '../components'


export const FormikAbstractPage = () => {


    return (
        <div>
            <h1>Formic Abstract Page Tutorial</h1>

            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}

                onSubmit={(values) => { console.log(values) }}

                validationSchema={
                    Yup.object({
                        name: Yup.string().required('Required'),
                        lastName: Yup.string().required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        terms: Yup.boolean().required('Required'),
                        jobType: Yup.string().required('Required'),
                    })
                }
            >
                {
                    (formik) => (

                        <Form>
                            <MyTextInput label={'Name'} name={'name'}/>
                            <MyTextInput label={'Last Name'} name={'lastName'}/>
                            <MyTextInput label={'Email'} name={'email'}/>

                            <MySelectInput label={'Puesto'} name={'jobType'}>
                                <option value="">Select</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                            </MySelectInput>

                            <MyCustomCheck label={'Términos y Condiciones'} name={'terms'}/>

                            <button type='submit'>Register</button>

                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
