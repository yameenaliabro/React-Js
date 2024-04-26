import React, { useState } from 'react'

type formData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    age: number
}

type inputDataType = {
    name: string,
    value: string | number,
    placeholder: string,
    type: "number" | "password" | "text" | "email"
}

function MultiStepsForm() {
    const [formData, setformData] = useState<formData>({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        age: 0,
    })
    const [step, setstep] = useState<number>(1)

    const inputData: inputDataType[] = [
        {
            name: "firstName",
            value: formData.firstName,
            placeholder: "Please enter the firstaNme",
            type: "text",
        },
        {
            name: "email",
            value: formData.email,
            placeholder: "Please enter Email Address",
            type: "email",
        },
        {
            name: "password",
            value: formData.password,
            placeholder: "Please enter Password ",
            type: "password"
        },
        {
            name: "lastName",
            value: formData.lastName,
            placeholder: "Please enter LastName ",
            type: "text",
        },
        {
            name: "age",
            value: formData.age,
            placeholder: "Please enter ages ",
            type: "number"
        }
    ]

    const nextStep = () => {
        setstep(step + 1)
    }

    const prevStep = () => {
        setstep(step - 1)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })

    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("formData", formData)
    }

    return (
        <div>
            <h1>MultiStepsForm</h1>
            <form onSubmit={onSubmit}>
                {inputData.map((item, index) => {
                    return (
                        step === index + 1 && (
                            <>
                                <input
                                    key={item.name}
                                    type={item.type}
                                    value={item.value}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    onChange={handleChange}
                                    required
                                />
                            </>
                        )
                    )
                })}
                {step > 1 && <button onClick={prevStep}>Previous</button>}
                {step < inputData.length && <button onClick={nextStep}>Next</button>}
                {step === inputData.length && <button type="submit">Submit</button>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MultiStepsForm