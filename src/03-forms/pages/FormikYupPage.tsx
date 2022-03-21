import '../styles/styles.css'
import * as Yup from 'yup';
import { useFormik } from 'formik'


export const FormikYupPage = () => {


    const {
        handleSubmit, errors, touched, getFieldProps,

    } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { console.log(values) },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        })
    });

    return (
        <div>
            <h1>Formic Yup Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>

                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    {...getFieldProps('name')}
                />
                {touched.name && errors.name && <span>{errors.name}</span>}

                <label htmlFor='name'>Last Name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='name'>Email</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Register</button>

            </form>

        </div>
    )
}
