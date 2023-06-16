import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// A component is a JS Function
const ExpenseItem = (props) => {
  return (
    // Rule: It may have only one root component
    // Inside the root you can have multiple components
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} /> {/* If doesn't have content */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

// Stateless component => Does't have any state
