// Add expenses
export default (expenses) => {
  // if (expenses.length === 0) {
  //   return 0;
  // } else {
    return expenses
      .map((expense) => expense.amount)
      .reduce((sum, acc) => sum + acc, 0);
  //   const sum = expenses.map(expense => {
  //     return expense.amount;
  //   });
  //   const total = sum.reduce(function (acc, amount) {
  //     return acc + amount;
  // }, 0);
  // return total;
  // console.log(sum, total);
  // }
};