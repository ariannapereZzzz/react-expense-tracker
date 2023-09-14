import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Sept. 14, 2023</div>
      <div className="expense-item__description">
      <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">$294.67</div>
    </div>
  )
}

export default ExpenseItem;