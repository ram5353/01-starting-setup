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
          <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} ></ExpenseItem>
          <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} ></ExpenseItem>
          <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount} ></ExpenseItem>
          <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount} ></ExpenseItem>
        </Card>
      </div>
      );
}

export default Expenses