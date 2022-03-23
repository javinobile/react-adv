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
}
