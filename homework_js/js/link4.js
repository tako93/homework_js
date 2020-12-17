// http://nicholasjohnson.com/javascript/javascript-for-programmers/exercises/intro/

// 1.
alert('Hello world');
alert('Hello world');

// 2.
let daysInYear = 365.25;
let daysInWeek = 7;
let yearsInLifetime = 80;


    console.log((daysInYear + daysInWeek + yearsInLifetime)/3);

// 3.
let greeting = 'hello ';
let name = 'world';

let result = greeting + name;

alert(result);

// 4.
function repl(){
    let newresult = result.replace(/[lo]/g, '1');
    
    return newresult
    }
   alert (repl());

// 5.
function rever(){
   let newresult = result.split('').reverse().join('');;
    
   return newresult
    }
   alert (rever());


// 6.

let Morning = '5:00 AM — 11:59 AM';
let Afternoon = '12:00 PM — 4:59 PM';
let Evening = '5:00 PM — 4:59 AM';


let time = Evening;

if (time == Morning ) {
  alert(`Morning + ${Morning}`);
} else if (time == Afternoon) {
  alert(`afternoon + ${Afternoon}`);
} else if (time == Evening) {
  alert(`Evening + ${Evening}`);
}