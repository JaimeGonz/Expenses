import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const newExpenseList = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={newExpenseList} />
        <ExpensesList items={newExpenseList} />
        {/* {!newExpenseList.length && (
          <p style={{ color: "white" }}>No expenses found.</p>
        )}
        {newExpenseList &&
          newExpenseList.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
