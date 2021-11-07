let check = (a, b) => {
    return a === b ? 0 : ((Number(a) > Number(b)) ? 1 : -1);
}

alert(check(prompt('Введите a!'), prompt('Введите b!')));