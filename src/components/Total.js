import React from 'react';
import { connect } from 'react-redux';


const TotalSpending = ({ expenses }) => {
    return (
        <>
            <h1>
                total spending: <span className="total">
                    $ {expenses.reduce((acc, curr) => {
                        return acc += parseInt(curr.amount);
                    }, 0)}
                </span>
            </h1>
        </>
    )
}

const mapStateToProps = state => ({
    expenses: state.expenses
})

export default connect(mapStateToProps, null)(TotalSpending);