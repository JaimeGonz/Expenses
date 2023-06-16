import React, { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
  // const titleChangeHandler = (event) => {
  //     setUserInput(prevState => {
  //         return {
  //             ...prevState,
  //             enteredTitle: event.target.value
  //         }
  //     });
  // }

  // const amountChangeHandler = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         enteredAmount: event.target.value,
  //     });
  // }

  // const dateChangeHandler = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         enteredDate: event.target.value,
  //     });
  // }
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const inputChangeHandler = (type, value) => {
    if (type === 'title') {
      setTitleInput(value);
    } else if (type === 'amount') {
      setAmountInput(value);
    } else {
      setDateInput(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };

    props.onSaveExpenseData(expenseData);

    setTitleInput('');
    setAmountInput('');
    setDateInput('');
  };

  return (
    <form id='form' onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={titleInput}
            onChange={(event) => {
              inputChangeHandler('title', event.target.value);
            }}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amountInput}
            onChange={(event) => {
              inputChangeHandler('amount', event.target.value);
            }}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2023-01-01'
            max='2025-12-31'
            value={dateInput}
            onChange={(event) => {
              inputChangeHandler('date', event.target.value);
            }}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
