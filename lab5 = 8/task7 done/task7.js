let a = prompt('Введите a!');
let b = prompt('Введите b!');

function equality(a, b) {
    return Number(a) === Number(b);
}
function checksum(a, b) {
    return Number(a) + Number(b) > 10;
}
function checknum(a) {
    return Number(a) < 0;
}

if (equality(a,b) == true) {
	alert('Числа ' + a + ' и ' + b + ' равны между собой!');
}
else {
	alert('Числа ' + a + ' и ' + b + ' не равны между собой!');
}
if (checksum(a,b) == true) {
	alert('Числа ' + a + ' и ' + b + ' в сумме больше 10!');
}
else {
	alert('Числа ' + a + ' и ' + b + ' в сумме не больше 10!');
}
if (checknum(a) == true) {
	alert('Число ' + a + ' не положительное!');
}
else {
	alert('Число ' + a + ' положительное!');
}