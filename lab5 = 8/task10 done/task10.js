let money = prompt('Введите свою зарплату!');
alert('Премия 15%, итог ' + (money *= 1.15));
alert('Налоги 10%, итог ' + (money *= 0.9));
alert('Трата в магазине 90 рублей, итог ' + (money -= 90));
alert('Жена силой отобрала половину, итог ' + (money /= 2));