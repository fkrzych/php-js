var usersArr = [
    {username: 'Jan Kowalski', birthYear: 1983, salary: 4200},
    {username: 'Anna Nowak', birthYear: 1994, salary: 7500},
    {username: 'Jakub Jakubowski', birthYear: 1985, salary: 18000},
    {username: 'Piotr Kozak', birthYear: 2000, salary: 4999},
    {username: 'Marek Sinica', birthYear: 1989, salary: 7200},
    {username: 'Kamila Wiśniewska', birthYear: 1972, salary: 6800},
];

var charactersRanczo = [
    {username: 'Lucy Wilska', birthYear: 1974, salary: 6300},
    {username: 'Piotr Kozioł', birthYear: 1962, salary: 3500},
    {username: 'Paweł Kozioł', birthYear: 1962, salary: 16000},
    {username: 'Klaudia Kozioł', birthYear: 1988, salary: 5200},
    {username: 'Arkadiusz Czerepach', birthYear: 1966, salary: 8100},
    {username: 'Fabian Duda', birthYear: 1984, salary: 3200},
    {username: 'Tadeusz Hadziuk', birthYear: 1965, salary: 5000},
];

function welcomeUser(array)
{
    let currentYear = new Date().getFullYear();
    let str = '';
    let usernames = array.map(a => a.username);
    let birthYears = array.map(b => b.birthYear);
    let salaries = array.map(c => c.salary);

    for (let i = 0; i < array.length; i++)
    {
        let age = currentYear - birthYears[i];

        if (salaries[i] > 15000) console.log('Witaj prezesie!');
        else if (salaries[i] < 5000) console.log(str.concat(usernames[i], ', szykuj się na podwyżkę!'));
        else
        {
            if (age % 2 === 0) console.log(str.concat('Witaj, ', usernames[i], '! W tym roku kończysz ', age, ' lat!'));
            if (age % 2 !== 0) console.log(str.concat(usernames[i], ', jesteś zwolniony!'));
        }
    }
}

welcomeUser(usersArr);
console.log('\n');
welcomeUser(charactersRanczo);
