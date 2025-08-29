import React from 'react'

function TableItem( {id, expense, description, category, amount, date, onDelete} ) {
    // Format date into YYYY-MM-DD
    const formattedDate = date instanceof Date ? date.toISOString().split("T")[0] : date;

    return (
        <tr>
            <td>{expense}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>{formattedDate}</td>
            <td><button onClick={() => onDelete(id)}>Remove</button></td>
        </tr>
    );
}

export default TableItem;
