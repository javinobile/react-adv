import React from 'react'
import { useField, ErrorMessage } from 'formik'

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCustomCheck = ({ label, ...props }: Props) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label>
                <input type='checkbox' {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
