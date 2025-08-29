import React from 'react'
import './Table.css'
import TableItem from './TableItem';

function Table( {expense, onDelete} ) {
  const sorted = [...expense].sort((a,b) => a.category.localeCompare(b.category))

  const expenses = sorted.map((exp) => {
    return(
      <TableItem key={exp.id} expense={exp.expense} id={exp.id} description={exp.description} category={exp.category} amount={exp.amount} date={exp.date} onDelete={onDelete}/>
    );
  })

  console.log(expenses);
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Delete Expense</th>
          </tr>
        </thead>
        <tbody>
          {expenses}
        </tbody>
      </table> 
    </div>
  )
}

export default Table
