import React, { useState } from 'react'
import './Form.css'


function Form() {
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

        console.log(newExpense);

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
                    placeholder='Eneter expense' 
                    value={formData.expense} 
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name='description' 
                    placeholder='Enter expense description'
                    value={formData.description}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name='category'
                    placeholder='Enter expense category'
                    value={formData.category}
                    onChange={handleChange}
                />
                <input 
                    type="number"
                    name='amount'
                    placeholder='Enter amount'
                    value={formData.amount}
                    onChange={handleChange}
                />
                <input 
                    type="date"
                    name='date'
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
