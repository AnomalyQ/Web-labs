let string = prompt('Введите строку');
let http = string.startsWith("http://");
let html = string.endsWith(".html");

alert("Начинается с 'http://': " + ((http) ? "да" : "нет") + "\n" + "Заканчивается '.html': " + (html ? "да" : "нет"));