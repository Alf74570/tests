function addition (a, b)
{
    return (a + b);
}

function substraction (a, b)
{
    return (a - b);
}

function multiplication (a, b)
{
    return (a * b);
}

function division (a, b)
{
    return (a / b);
}
module.exports = [addition, substraction, multiplication, division];

let a = 10;
let b = 20;

console.log('Résultat ' + addition(a, b));
console.log('Résultat ' + substraction(a, b));
console.log('Résultat ' + multiplication(a, b));
console.log('Résultat ' + division(a, b));

let nbrSeconde = 365 * 24 * 60 * 60;
let nbrJours = 365;
let nbrHeures = 24;
let nbrMinutes = 60;
let nbrSecondes = 60;

function formatDate(template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
      return template.split(specs[i]).join(item);
    }, template);
}

console.log(formatDate('YYYY-MM-DD', new Date ('2000-01-01T00:00:01')));
console.log(formatDate('YYYY-MM-DD', new Date()));

function dateDiff(date1, date2)
{
    var diff = {};                           
    var tmp = substraction(date2, date1);
 
    tmp = Math.floor(division(tmp, 1000));             
    diff.sec = tmp % 60;                    
 
    tmp = Math.floor(division(substraction(tmp, diff.sec), 60));    
    diff.min = tmp % 60;                 
 
    tmp = Math.floor(division(substraction(tmp, diff.min), 60));    
    diff.hour = tmp % 24;                   
 
    tmp = Math.floor(division(substraction(tmp, diff.hour), 24));   
    diff.day = tmp;
 
    return [diff, diff.sec + multiplication(diff.min, 60) + multiplication(diff.hour, 3600) + multiplication(diff.day,86400) + ' secondes'];
}

let startDate = new Date ('2000-01-01');
let todayDate = new Date();
console.log(todayDate);
console.log(dateDiff(startDate, todayDate));
