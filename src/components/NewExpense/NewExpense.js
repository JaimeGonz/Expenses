import React, { useState } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
import "./ExpenseForm.css";

export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClickedButton(false);
  };

  const [clickedButton, setClickedButton] = useState(false);

  const buttonHandler = () => {
    setClickedButton(true);
  };

  const cancelHandler = () => {
    setClickedButton(false);
  };

  return (
    <div className="new-expense">
      <div className="new-expense-alternative">
        {!clickedButton && (
          <button onClick={buttonHandler}>Add New Expense</button>
        )}
        {clickedButton && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={cancelHandler}
          />
        )}
      </div>
    </div>
  );
};
