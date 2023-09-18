import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem({date, title, amount}) {

  return (
    <Card className="expense-item">
      <div>
      <ExpenseDate date={date}/>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
    </Card>
  );
}

export default ExpenseItem;