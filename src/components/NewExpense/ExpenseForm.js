import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>
{
    return (
        <form action="">
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" />
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;