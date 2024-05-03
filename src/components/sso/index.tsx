import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd'
import React from 'react'
import { FaGooglePlusG } from 'react-icons/fa'

function SSoLogin() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='flex justify-center items-center w-full h-[20vh]'>
            <Button className='!flex !items-center !justify-center' onClick={() => loginWithRedirect()}>Login With <FaGooglePlusG /></Button>
        </div>
    )
}

export default SSoLogin