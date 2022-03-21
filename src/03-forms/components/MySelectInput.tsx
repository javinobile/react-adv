import { useField, ErrorMessage } from 'formik'


interface Props {
    label: string;
    name: string;
    placeHolder?: string;
    [x: string]: any;
}

export const MySelectInput = ({ label, ...props }: Props) => {

    const [field, meta] = useField(props)

    return (
        <>

            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
