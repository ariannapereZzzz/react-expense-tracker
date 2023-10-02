import React, {useState} from 'react'
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenses = props.expenses
  const [filteredYear, setFilteredYear] = useState('2020');


  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }))
   
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
      </div>
);
}

export default Expenses;