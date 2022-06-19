import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

  const [filteredyear, setFilteredYear] = useState('2020')

  const getSelectedYear = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredyear} onSelectedyear={getSelectedYear} />
          {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        </Card>
      </div>
      );
}

export default Expenses