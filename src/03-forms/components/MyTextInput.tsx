import { useField, ErrorMessage } from 'formik'

interface Props {
    label: string;
    name: string;
    type?: string;
    placeHolder?: string;
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type="text" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
