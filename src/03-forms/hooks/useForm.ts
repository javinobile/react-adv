import React, { useState } from 'react'

export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }


    return {
        onChange,
        onSubmit,
        ...formData
    }
}


