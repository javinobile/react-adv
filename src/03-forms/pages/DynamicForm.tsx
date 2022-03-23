<<<<<<< HEAD
import { Form, Formik } from 'formik';
import { MySelectInput, MyTextInput } from '../components';
import { MyCheckbox } from '../components/MyCheckbox';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

export const DynamicForm = () => {

  const initialValues: { [key: string]: any } = {}
  const requieredFields: { [key: string]: any } = {}

  for (const field of formJson) {
    initialValues[field.name] = field.value

    if (!field.validations) continue;

    let schema = Yup.string();

    for (const rule of field.validations) {
      if (rule.name === 'required') {
        schema = schema.required(rule.message);
      }
      if (rule.name === 'minLength') {
        schema = schema.min((rule as any).chars, rule.message);
      }
      if (rule.name === 'email') {
        schema = schema.email(rule.message);
      }
    }

    requieredFields[field.name] = schema;

  }

  const determineFieldType = (type: string) => {
    switch (type) {
      case 'select':
        return MyTextInput
      default:
        return null
    }
  }

  return (
    <div>
      <h1>Dynamic Formik Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({ ...requieredFields })}
      >

        {({ handleReset }) => (
          <Form
            noValidate
          >
            {
              formJson.map(({ type, name, placeholder, label, value, options }) => {

                switch (type) {
                  case 'select':
                    return (
                      <MySelectInput key={name} label={label} name={name}>
                        <option value={''}>{'Seleccionar'}</option>
                        {options?.map(({ id, name }: any) => <option key={id} value={id}>{name}</option>)}
                      </MySelectInput>
                    )
                    break;
                  case 'checkbox':
                    return <MyCheckbox key={name} label={label} name={name} />
                  default:
                    return <MyTextInput key={name} placeholder={placeholder} type={type} name={name} label={label} />
                    break;
                }



              })
            }

            <button type="submit">Enviar</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}

      </Formik>
    </div>
  )
=======
import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } caracteres`);
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( `Revise el formato del email`);
        }

        // ... otras reglas
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });


export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ (values) => {
                    console.log(values)
                }}
            >
                { (formik) => (
                    <Form noValidate>
                        { formJson.map( ({ type, name, placeholder, label, options }) => {

                            if ( type === 'input' || type === 'password' || type === 'email' ) {
                                return <MyTextInput 
                                            key={ name }
                                            type={(type as any)}
                                            name={ name } 
                                            label={ label } 
                                            placeholder={ placeholder } />

                            } else if ( type === 'select' ) {
                                return (
                                    <MySelect 
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map( ({ id, label }) => (
                                                <option key={ id } value={ id }>{ label }</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }

                            
                            throw new Error(`El type: ${ type }, no es soportado`);
                        })}
                            



                        <button type="submit">Submit</button>
                    
                    </Form>
                )}
            </Formik>

        </div>
    )
>>>>>>> 6751ffa5a6a6c0b60ab498e2e49a23a3d849d16f
}
