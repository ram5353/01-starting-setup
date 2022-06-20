import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

  const [filteredyear, setFilteredYear] = useState('2020')

  const getSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredyear;
  })

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredyear} onSelectedyear={getSelectedYear} />
          <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
      </div>
      );
}

export default Expenses