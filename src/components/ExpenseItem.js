import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({date, title, amount}) {

  return (
    <div className="expense-item">
      <div>
      <ExpenseDate date={date}/>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
}

export default ExpenseItem;