import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditting, setIsEditting] = useState(false);

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditting(false);
    };

    const startEdittingHandler = () => {
        setIsEditting(true);
    };
    const stopEdittingHandler = () => {
        setIsEditting(false);
    };

    return (
        <div className="new-expense">
            {!isEditting && (
                <button onClick={startEdittingHandler}>Add Expense</button>
            )}
            {isEditting && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseData}
                    onCancel={stopEdittingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
