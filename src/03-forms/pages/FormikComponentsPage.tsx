import '../styles/styles.css'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'


export const FormikComponentsPage = () => {


    return (
        <div>
            <h1>Formic Components Tutorial</h1>

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

                            <label htmlFor='name'>Name</label>
                            <Field
                                type="text"
                                name="name"
                            />
                            <ErrorMessage component="span" name="name" />

                            <label htmlFor='name'>Last Name</label>
                            <Field
                                type="text"
                                name="lastName"
                            />
                            <ErrorMessage component="span" name='lastName' />

                            <label htmlFor='name'>Email</label>
                            <Field
                                type="email"
                                name="email"
                            />
                            <ErrorMessage component="span" name='email' />

                            <label htmlFor='jobType'>Puesto</label>
                            <Field
                                as="select"
                                name="jobType">
                                <option value="">Select</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                            </Field>
                            <ErrorMessage component="span" name='jobType' />

                            <label>
                                <Field
                                    type="checkbox"
                                    name="terms"
                                />
                                Términos y Condiciones
                            </label>
                            <ErrorMessage component="span" name='terms' />

                            <button type='submit'>Register</button>

                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
