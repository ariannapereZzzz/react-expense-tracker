import React, {useState} from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenses = props.expenses
  const [filteredYear, setFilteredYear] = useState('2020');


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
   
  return (
    <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}>
        </ExpensesFilter>
      <Card>
        <ExpenseItem 
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}/>
        <ExpenseItem 
          title={expenses[1].title} 
          amount={expenses[1].amount} 
          date={expenses[1].date}/>
        <ExpenseItem 
          title={expenses[2].title} 
          amount={expenses[2].amount} 
          date={expenses[2].date}/>
        <ExpenseItem 
          title={expenses[3].title}
          amount={expenses[3].amount} 
          date={expenses[3].date}/>
      </Card>
      </div>
);
}

export default Expenses;