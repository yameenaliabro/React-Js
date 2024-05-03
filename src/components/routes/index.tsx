import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoApplication from '../todo'
import Calculator from '../Calculator'
import MultiStepsForm from '../multi-form'
import SSoLogin from '../sso'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<TodoApplication/>} index/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/multiform' element={<MultiStepsForm/>}/>
        <Route path='/sso' element={<SSoLogin/>}/>
    </Routes>
  )
}

export default MainRoutes