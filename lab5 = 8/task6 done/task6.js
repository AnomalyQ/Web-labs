let num = prompt('Введите число, которое хотите возвести в квадрат!');
function square(num) {
    return num * num;
}
alert('Число в квадрате >> ' + square(num));

let a = prompt('Введите 1 число!');
let b = prompt('Введите 2 число!');
function sum(a, b) {
    return Number(a) + Number(b);
}
alert('Сумма чисел >> ' + sum(a, b));

a = prompt('Введите 1 число!');
b = prompt('Введите 2 число!');
let c = prompt('Введите 3 число!');
function func(a, b, c) {
    return (Number(a) - Number(b)) / Number(c);
}
alert('Вот итог >> ' + func(a, b, c));

let day = prompt('Введите число от 1 до 7!');
function week(day) {
    switch (Number(day)) {
        case 1: return 'Понедельник'; break;
        case 2: return 'Вторник'; break;
        case 3: return 'Среда'; break;
        case 4: return 'Четверг'; break;
        case 5: return 'Пятница'; break;
        case 6: return 'Суббота';break;
        case 7: return 'Воскресенье'; break;
        default: return 'Написано ж от 1 до 7!'; break;
    }
}
alert(week(day));