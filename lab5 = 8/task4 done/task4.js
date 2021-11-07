let time = prompt('Введите число от 1 до 59');
	if (time >= 0 && time <= 14) {
		alert('Число 1 четверти!');
	} 
	if (time >= 15 && time <=29) {
		alert('Число 2 четверти!');
	}
	if (time >= 30 && time <= 44) {
		alert('Число 3 четверти!');
	}
	if (time >= 45 && time <= 59) {
		alert('Число 4 четверти!')
	}
	if (time <= -1 || time >= 60) {
		alert('Я попросил от 1 до 59!')
	}

let week;
let lang = 'ru';
let week_ru = ['Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье'];
let week_by = ['Панядзелак', ' Аўторак', ' Серада', ' Чацвер', ' Пятніца', ' Субота', ' Нядзеля'];
switch (lang) {
	case 'ru':
	default:
		week = week_ru;
		break;
	case 'by':
		week = week_by;
		break;
}
alert(week); 