let numarr = [5, 6, 7, 8];
let composition = 1;
for(let i = 0; i < numarr.length; i++){
	composition *= numarr[i];
}
alert(composition);

let obj = {
	'Минск' : 'Беларусь',
	'Киев' : 'Украина',
	'Москва' : 'Россия'
}
for(key in obj) {
	alert(key + " - это " + obj[key])
}