import React, { use, useState } from 'react'
import './App.css'
import Header from './HeaderComponent/Header'
import { expenses } from './data'
import Form from './FormComponents/Form'

function App() {
  const [expense, setExpense] = useState(expenses)

  return (
    <>
      <Header />
      <div>
        <Form />
      </div>
    </>
  )
}

export default App
