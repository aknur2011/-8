let html_date = document.getElementById('date')

let objdate = new Date()

let date = objdate.getDate()//chislo al

html_date.innerHTML = date

// let html_day = document.getElementById('day')
// let day = objDate.getDay()
// day = day-1
// let arrayDays = [
//     'Monday', 
//     'Tuesday', 
//     'Wednesday',
//     "Thursday", 
//     'Friday', 
//     'Sunday',
//     'Saturday']

// html_day.innerHTML = arrayDays[day]

let html_day = document.getElementById('day');
let day = objdate.getDay();

let arrayDays = [
    'Воскресенье',
    'Понедельник', 
    'Вторник', 
    'Среда', 
    'Четверг', 
    'Пятница', 
    'Суббота'
];
html_day.innerHTML = arrayDays[day];

// Месяц
let html_month = document.getElementById('month');
let month = objdate.getMonth();

let arrayMonths = [
    'Январь', 
    'Февраль', 
    'Март', 
    'Апрель', 
    'Май', 
    'Июнь', 
    'Июль', 
    'Август', 
    'Сентябрь', 
    'Октябрь', 
    'Ноябрь', 
    'Декабрь'
];
html_month.innerHTML = arrayMonths[month];

// Год
let html_year = document.getElementById('year');
html_year.innerHTML = objdate.getFullYear();





