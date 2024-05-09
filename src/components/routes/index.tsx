import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoApplication from '../todo'
import Calculator from '../Calculator'
import MultiStepsForm from '../multi-form'
import SSoLogin from '../sso'
import CalendlyComponent from '../../Calendaly'

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<CalendlyComponent />} index />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/multiform' element={<MultiStepsForm />} />
      <Route path='/sso' element={<SSoLogin />} />
    </Routes>
  )
}

export default MainRoutes