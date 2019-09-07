export const createExpense = expense => {
    console.log('REDUX AKCIJA', expense)
    return {
        type: 'CREATE_EXPENSE',
        payload: expense
    }
}

export const deleteExpenses = () => {
    console.log('brisanje')
    return {
        type: 'DELETE_EXPENSES'
    }
}
export const deleteExpense = id => {
    return {
        type: 'DELETE_EXPENSE',
        payload: id
    }
}