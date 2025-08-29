import React, { useState } from 'react'
import './Form.css'


function Form( {addExpense} ) {
    const [formData, setFormData] = useState({
        expense: "",
        description: "",
        category: "",
        amount: "",
        date: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        const newExpense = {
            expense: formData.expense,
            description: formData.description,
            category: formData.category,
            amount: Number(formData.amount),
            date: new Date(formData.date)
        };

        addExpense(newExpense);

        // reset fomr
        setFormData({
            expense: "",
            description: "",
            category: "",
            amount: "",
            date: "" 
        });
    }

    return (
        <div className='form-border'>
            <h2>Add Expense</h2>
            <p>Enter your expense details below</p>
            <form action="" id="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='expense' 
                    required
                    placeholder='Eneter expense' 
                    value={formData.expense} 
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name='description' 
                    required
                    placeholder='Enter expense description'
                    value={formData.description}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name='category'
                    required
                    placeholder='Enter expense category'
                    value={formData.category}
                    onChange={handleChange}
                />
                <input 
                    type="number"
                    name='amount'
                    required
                    placeholder='Enter amount'
                    value={formData.amount}
                    onChange={handleChange}
                />
                <input 
                    type="date"
                    name='date'
                    required
                    value={formData.date}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    id="submit"
                />
            </form>
        </div>
    )
}

export default Form
