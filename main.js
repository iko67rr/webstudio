let money = prompt('Ваш бюджет?');
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        qustiotOne: "",
        qustionTwo: "",
    },
    optionalExpenses: "",
    income: [ ],
    savings: false
};

let qustiotOne = prompt('Введите обязательную статью расходов в этом месяце?');
let qustionTwo = prompt('Во сколько обойдется?');

alert(money/30);