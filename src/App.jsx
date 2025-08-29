import React, { use, useState } from 'react'
import './App.css'
import Header from './HeaderComponent/Header'
import { expenses } from './data'
import Form from './FormComponents/Form'
import Table from './TableComponent/Table'
import Serchbar from './SearchBarComponent/Serchbar'

function App() {
  const [expense, setExpense] = useState(expenses);
  const [searchTerm ,setSearchTerm] = useState("");


  function addNewExpense(expObj) {
    setExpense([expObj, ...expense]);
  }

  function handleDeleteExpense(id) {
    const updatedExpenses = expense.filter((exp) => exp.id !== id);
    setExpense(updatedExpenses)
  }

  const filteredExpenses = expense.filter((exp) => exp.expense.toLowerCase().includes(searchTerm.toLowerCase()));

  const sortedExpenses = [...filteredExpenses].sort((a,b) => a.category.localeCompare(b.category));


  return (
    <>
      <Header />
      <div className='budget-section'>
        <Form addExpense={addNewExpense}/>
        <div>
          <Serchbar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
          <Table expense={sortedExpenses} onDelete={handleDeleteExpense}/>
        </div>
      </div>
    </>
  )
}

export default App
