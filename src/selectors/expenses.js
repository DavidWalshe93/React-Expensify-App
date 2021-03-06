// Created by David Walshe on 25/02/2020

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
        return 0
    });
};

export default getVisibleExpenses;