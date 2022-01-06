import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
};
export default Expense;
