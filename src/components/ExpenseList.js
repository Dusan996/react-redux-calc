import React from 'react';
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteExpenses } from '../actions/expenseAction';

const ExpenseList = ({ expenses, deleteExpenses }) => {

    return (
        <>
            <ul className="list">
                {expenses.map((expense) => {
                    return <Item key={expense.id} expense={expense}
                    />
                })}
            </ul>
            {expenses.length > 0 ? <button className="btn" onClick={deleteExpenses}>
                Clear expenses <MdDelete className="btn-icon" />
            </button> : null}
        </>
    )
}

const mapStateToProps = state => ({
    expenses: state.expenses
})
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ deleteExpenses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
