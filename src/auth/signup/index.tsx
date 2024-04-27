import React, { useCallback, useState } from 'react'
import { formData } from '../../types/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../components/firebase'

function Signup() {

    const [formData, setFormData] = useState<formData>({
        email: "",
        password: ""
    })


    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            const response = createUserWithEmailAndPassword(auth, formData.email, formData.password)
            console.log("🚀 ~ onSubmit ~ response:", response)
        } catch (error) {
            console.log("🚀 ~ onSubmit ~ error:", error)
        }
    }, [formData])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='email' placeholder='enter the email address' onChange={onChange} value={formData.email} />
                <input type='password' placeholder='enter the email address' onChange={onChange} value={formData.password} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup