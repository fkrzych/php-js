var usersArr = [
    {username: 'Jan Kowalski', birthYear: 1983, salary: 4200},
    {username: 'Anna Nowak', birthYear: 1994, salary: 7500},
    {username: 'Jakub Jakubowski', birthYear: 1985, salary: 18000},
    {username: 'Piotr Kozak', birthYear: 2000, salary: 4999},
    {username: 'Marek Sinica', birthYear: 1989, salary: 7200},
    {username: 'Kamila Wiśniewska', birthYear: 1972, salary: 6800},
];

function welcomeUser(array)
{
    let str = '';
    for (let $i = 0; $i < array.length; $i++)
    {
        console.log(str.concat('Hello ',array.username));
    }
}

welcomeUser(usersArr);