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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Multi Steps Form</h1>
            <form onSubmit={onSubmit} className="max-w-lg mx-auto">
                {inputData.map((item, index) => (
                    step === index + 1 && (
                        <input
                            key={item.name}
                            type={item.type}
                            value={item.value}
                            name={item.name}
                            placeholder={item.placeholder}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    )
                ))}
                <div className="flex justify-between">
                    {step > 1 && (
                        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">
                            Previous
                        </button>
                    )}
                    {step < inputData.length && (
                        <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                            Next
                        </button>
                    )}
                    {step === inputData.length && (
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default MultiStepsForm