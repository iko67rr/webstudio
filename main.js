let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("ведите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [ ],
    savings: false
};

let qustiotOne = prompt("Введите обязательную статью расходов в этом месяце?", '');
let qustionTwo = prompt("Во сколько обойдется?");
let qustiotThree = prompt("Введите обязательную статью расходов в этом месяце?", '');
let qustionFour = prompt("Во сколько обойдется?", '');

appData.expenses.qustiotOne = qustionTwo;
appData.expenses.qustiotThree = qustionFour;

alert(appData.money / 30);

