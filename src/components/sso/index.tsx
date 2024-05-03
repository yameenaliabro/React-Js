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

const b = { name:"Ali", f: function(){ var self = this; console.log(this.name); (function(){ console.log(this.name); console.log(self.name); })(); } } b.f(); Huzaifa Aamir 14:15 (function(){ setTimeout(()=> console.log(1),5000); console.log(2); setTimeout(()=> console.log(3),0); console.log(4); })(); You 14:18 first console.log after the five second the is 2 and the immedetially  is console.log(4) Hover over a message to pin it keep 2 and 4 INTERVIEW - BACKEND - UMER