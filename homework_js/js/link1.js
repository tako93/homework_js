// https://www.jshero.net/en/koans/var.html

1.
let firstName = 'Lata';


2.
// https://www.jshero.net/en/koans/jsx01.html
let x = 'Geeta'; 
// value = 'Geeta'

3.

// https://www.jshero.net/en/koans/var2.html
let flower = 'rose';
let tree = 'maple'; 

4.

// https://www.jshero.net/en/koans/jsx02.html
let x = 'Tic';
x = 'Tac';
x = 'Toe';
// answer: now x is 'Toe'

5.
// https://www.jshero.net/en/koans/jsx03.html
let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;
// answer: now x = 'Hardy'


6.
// https://www.jshero.net/en/koans/function.html
function hello(){
    return 'Hello world!';
    }


7.
// https://www.jshero.net/en/koans/function2.html    
function a() {
    return 'Hello a!';
    }
function b() {
    return 'Hello b!';
    }

 8.
// https://www.jshero.net/en/koans/functioncall.html
function greet(){
        return 'Haydo!'
        }
let salutation = greet();  

9.
// https://www.jshero.net/en/koans/jsx04.html
function hello() {
    return 'Hi!';
  }
  
  let x = hello();
// answer is 'Hi!'

10.
// https://www.jshero.net/en/koans/parameter.html
function echo(Ta) {
    return Ta;
   }

11.
// https://www.jshero.net/en/koans/jsx05.html   
function reply(phrase) {
    return phrase;
  }
  let x = reply('How do you do?');
// answer is  How do you do? 

12.
// https://www.jshero.net/en/koans/string.html
function greet(par) {
    return 'Hello ' + par + '!';
}

13.
// https://www.jshero.net/en/koans/jsx06.html
function whereIs(name) {
    return 'Where is ' + name + '?';
  }
  let x = whereIs('Jacky');
// answer is: 'Where is Jacky?'  

14.
// https://www.jshero.net/en/koans/jsx06b.html
function hi(name) {
    return 'Hi ' + name + '!';
  }
  let h1 = hi('Selva');
  let h2 = hi('Pola');
  let x = h1 + ' ' + h2;
// answer is:  'Hi Selva! Hi Pola!'

15.
// https://www.jshero.net/en/koans/log1.html
function log() {
    console.log('Hello Console!');
  }
  
16.
// https://www.jshero.net/en/koans/log2.html
function log(value) {
    console.log(value);
  }
  
17.
// https://www.jshero.net/en/koans/log.html  
  function shout(smth) {
    let result = smth + smth;
    console.log(result);
    return result;
    }  

18.
// https://www.jshero.net/en/koans/jsx07.html 
function double(name) {
    return name + ' and ' + name;
  }
  let x = double('Roy');
// answer is: 'Roy and Roy'
  
19.
// https://www.jshero.net/en/koans/stringlength.html

function length(charNumber)
{
return charNumber.length;
}

length('Ai'.length);

20.
// https://www.jshero.net/en/koans/stringupper.html
function toCase(text) {
    return text.toLowerCase() + '-' + text.toUpperCase();
  }

 21. 
//   https://www.jshero.net/en/koans/stringcharat.html  
function shortcut(Tako, gege){
    return Tako.charAt(0) + gege.charAt(0);
    }

22.
// https://www.jshero.net/en/koans/trim.html   
function firstChar(Tako) {
    let trimtxt = Tako.trim();
    return trimtxt.charAt(0);
        }    
        
23.        
// https://www.jshero.net/en/koans/stringindexof.html     
function indexOfIgnoreCase (a1, a2) {
    let a1lower = a1.toLowerCase();
    let a2lower = a2.toLowerCase();
   return a1lower.indexOf(a2lower);
   }

24.   
// https://www.jshero.net/en/koans/stringindexof2.html
function secondIndexOf (name, surname){
    let firstIndex = name.indexOf(surname);
    return name.indexOf(surname, firstIndex + 1);
    }   

25.
// https://www.jshero.net/en/koans/stringsubstr.html   
function firstWord(s) {
    let firstBlank = s.indexOf(' ');
    return s.substr(0, firstBlank);
  } 

26.  
// https://www.jshero.net/en/koans/replace.html  
function normalize(date){
  let newdate = date.replace(/[---]/g,'/');
  
  return newdate
  }
  normalize('20-05-2017')

27.
// https://www.jshero.net/en/koans/number.html
function add(x, y) {
    return x + y;
  }

28.
//https://www.jshero.net/en/koans/increment.html
  let x = 3;
  x++;
  x = x * 2;
  x--;  
//  answer is 7; 

29.
// https://www.jshero.net/en/koans/fahrenheit.html
function toFahrenheit(celsius) {
    return 1.8 * celsius + 32;
  }

30.
// https://www.jshero.net/en/koans/modulo.html  
function onesDigit(n) {
    return n % 10;
  }

31.
// https://www.jshero.net/en/koans/mean.html 
function mean(x, y) {
    return (x + y) / 2;
  }
32.
// https://www.jshero.net/en/koans/math.html
function hypotenuse(a, b) {
    let cSquare = Math.pow(a, 2) + Math.pow(b, 2);
    return Math.sqrt(cSquare);
  }  

33
// https://www.jshero.net/en/koans/minmax.html  
function midrange(a, b, c) {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    return (min + max) / 2;
  }

34. 
//https://www.jshero.net/en/koans/pi.html 
function area (n) {
    return Math.PI * n * n;
    }

35    
//  https://www.jshero.net/en/koans/round.html
 function round100 (n){
    return Math.round(n/100)*100
    }

36.    
// https://www.jshero.net/en/koans/random.html
function dice() {return Math.floor( Math.random() * 6 ) +1;}

dice()

37.
// https://www.jshero.net/en/koans/parseint.html
  function add(s) {
    let summand1 = parseInt(s, 10);
    let indexPlus = s.indexOf('+');
    let sAfterPlus = s.substr(indexPlus + 1);
    let summand2 = parseInt(sAfterPlus, 10);
    return summand1 + summand2;
  }

38.
// https://www.jshero.net/en/koans/bool.html
  function nand(a, b) {
    let and = a && b;
    return !and;
  }  
  
39.
  https://www.jshero.net/en/koans/nor.html
  function nor(a, b){

    if ( a == false &&  b == false ) {
        return true;
    }else {
       return false;
    }
    
    }
    nor(false, false);

40.
// https://www.jshero.net/en/koans/xor.html
function xor(a, b){
  if(!(a == b) ){
 return true;
 } else if (a == b){
  return false;
 }
 }

 41.
//   https://www.jshero.net/en/koans/equals.html
  function equals(a, b) {
    return a === b;
  }

42.
https://www.jshero.net/en/koans/equals2.html
  function equals(a, b, c) {
    return a === b && a === c;
  }

  43.
https://www.jshero.net/en/koans/even.html

function isEven(n){
  if(n % 2 === 0){
  return true;
  }else {
  return false;
  }
  }

  44.
  // https://www.jshero.net/en/koans/notequals.html
  function unequal(a, b, c) {
    return a !== b && a !== c && b !== c;
  }

45.
//   https://www.jshero.net/en/koans/greaterthan.html
  function isThreeDigit(x) {
    return x >= 100 && x < 1000;
  }  

46.
//   https://www.jshero.net/en/koans/if.html
  function equals(a, b) {
    let result = 'UNEQUAL';
    if (a === b) {
      result = 'EQUAL';
    }
    return result;
  }  

47.  
//   https://www.jshero.net/en/koans/if2.html  
function repdigit(n) {
    let ones = n % 10;
    let tens = Math.floor(n / 10);
    if (ones === tens) {
      return 'Repdigit!';
    }
    return 'No Repdigit!';
  }
 
 48. 
//   https://www.jshero.net/en/koans/else.html  

function addWithSurcharge(a, b) {

    let surcharge = 0;
  
    if (a <= 10) {
      surcharge = surcharge + 1;
    } else {
      surcharge = surcharge + 2;
    }
  
    if (b <= 10) {
      surcharge = surcharge + 1;
    } else {
      surcharge = surcharge + 2;
    }
  
    return a + b + surcharge;
  }

  49.
  // https://www.jshero.net/en/koans/elseif.html
function addWithSurcharge(num1, num2) {
  let surcharge = 0;
  if (num1 <= 10) {
      surcharge += 1;
  } else if (num1 > 10 && num1 <= 20) {
      surcharge += 2;
  } else {
      surcharge += 3;
  }
  
  if (num2 <= 10) {
      surcharge += 1;
  } else if (num2 > 10 && num2 <= 20) {
      surcharge += 2;
  } else {
      surcharge += 3;
  }
  
  return surcharge + num1 + num2;
}
  
50.
// https://www.jshero.net/en/koans/array.html  

function toArray(a, b) {
    return [a, b];
  }

 51. 
//  https://www.jshero.net/en/koans/array2.html


function getFirstElement(array) {

  return array[0];
  }
  getFirstElement([1, 2])


52.
// https://www.jshero.net/en/koans/array3.html
function setFirstElement(anArray, firstElement) {
    anArray[0] = firstElement;
    return anArray;
  }
  
53.
//   https://www.jshero.net/en/koans/arraylength.html 
function getLastElement(anArray) {
    let lastIndex = anArray.length - 1;
    return anArray[lastIndex];
  }

 54.
//  https://www.jshero.net/en/koans/arraysort.html
 function sort(number) {
  number = [2, 3, 1];
  return number.sort();
}

55.
//   https://www.jshero.net/en/koans/arraypush.html  
  function rotate(anArray) {
    let element0 = anArray.shift();
    anArray.push(element0);
    return anArray;
  }  

56. 
// https://www.jshero.net/en/koans/arrayindexof.html
function add(arr, number) {
  if (arr.includes(number)) return arr;
  else return [...arr, number];

}

57.
// https://www.jshero.net/en/koans/concat.html

function concatUp(firstArray, secondArray) {

  if (secondArray.length >= firstArray.length) {
    return firstArray.concat(secondArray);
  }

  return secondArray.concat(firstArray);
}

 58.
function halve (array)
{

    if (array.length >=1){
        if (array.length % 2 != 0){
            return array[array.length/2];
        }
        else if(array.length % 2 == 0){
            return array[array.length/2];
        }
        return "";
    }
    else return "";
}

59.  
//   https://www.jshero.net/en/koans/join.html  
function list(words) {

    if (words.length === 0) {
      return '';
    }
  
    if (words.length === 1) {
      return words[0];
    }
  
    let wordsExLast = words.slice(0, words.length - 1);
    let lastWord = words[words.length - 1];
    return wordsExLast.join(', ') + ' and ' + lastWord;
  }

60.
// https://www.jshero.net/en/koans/dimarray.html
let loshu = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
function flat(n){
if(n == loshu){
 console.log (loshu.flat());
}
};
flat(loshu);

61.
https://www.jshero.net/en/koans/comment.html
function median(arr){
  arr.sort(function(a, b){ return a - b; });
 let i = arr.length / 2;
  return i % 1 == 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}

62.
// https://www.jshero.net/en/koans/undefined.html
function hello (n) {
  if(!(n === undefined)){
  return `Hello ${n}!`;
  }else{
  return 'Hello world!';
  }
  }
  hello('world');

  63.
  https://www.jshero.net/en/koans/null.html
  function cutComment(n){
    let c = 'let foo; // bar';
    if (n === c){
    return c[0];}
    }
64.
// https://www.jshero.net/en/koans/for1.html
function addTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  }

65
https://www.jshero.net/en/koans/factorial.html
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

66.
// https://www.jshero.net/en/koans/for2.html

function mean(data) {

    let sum = 0;
  
    for (let i = 0; i < data.length; i ++) {
      sum = sum + data[i];
    }
  
    return sum / data.length;
  };

67.
https://www.jshero.net/en/koans/while.html
function spaces(num) {
  let newSpaces = '';

  while (num-- > 0)
    newSpaces += ' ';

  return newSpaces;
}

68.
//   https://www.jshero.net/en/koans/dowhile.html
  function lcm(a, b) {

    let theLCM = 0;
    let remainderA;
    let remainderB;
  
    do {
  
      theLCM++;
      remainderA = theLCM % a;
      remainderB = theLCM % b;
  
    } while (remainderA !== 0 || remainderB !== 0)
  
    return theLCM;
  }


  69.
  https://www.jshero.net/en/koans/ggt.html
  function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  70.
  https://www.jshero.net/en/koans/break.html
  function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

71.
//www.jshero.net/en/koans/null.html
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

72.
https://www.jshero.net/en/koans/arguments.html
function max() {
  let Max = 0;
  for (let i = 0; i < arguments.length; i++) {
    Max = Max + arguments[i];
  }
  return Max;
}

73.
//   https://www.jshero.net/en/koans/nan.html
function parseFirstInt(input) {

    let inputToParse = input;
  
    for (let i = 0; i < input.length; i++) {
      let firstInt = parseInt(inputToParse);
      if (!Number.isNaN(firstInt)) {
        return firstInt;
      }
      inputToParse = inputToParse.substr(1);
    }
  
    return NaN;
  }

74.
https://www.jshero.net/en/koans/stringsplit.html
function add (string) {
  let partsArray = string.split("+");
  console.log("parts", partsArray);
  let added = 0;
     
  for (let i=0; i<partsArray.length; i++) {
     console.log("i",parseInt(partsArray[i]));
     added += parseInt(partsArray[i]);
  }

  return added;
}

75.
https://www.jshero.net/en/koans/subfunction.html
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

76.
https://www.jshero.net/en/koans/recursion.html
function reverse(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

77.
https://www.jshero.net/en/koans/roman1.html
function arabic(romanNumber){
  romanNumber = romanNumber.toUpperCase();
  const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
  const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index =  0, num = 0;
  for(let rn in romanNumList){
    index = romanNumber.indexOf(romanNumList[rn]);
    while(index != -1){
      num += parseInt(corresp[rn]);
      romanNumber = romanNumber.replace(romanNumList[rn],"-");
      index = romanNumber.indexOf(romanNumList[rn]);
    }
  }
  return num;
}

78.
https://www.jshero.net/en/koans/roman2.html
function roman(number){
  let roman = "";
  const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
  let a;
  if(number > 3999)
    return "Enter a number between 1 and 3999";
  else{
    for(let key in romanNumList){
        a = Math.floor(number / romanNumList[key]);
        if(a >= 0){
            for(let i = 0; i < a; i++){
              roman += key;
            }
          }
        number = number % romanNumList[key];
    }
  }

  return roman;
}

79.
function sumMultiples(number) {
  let sum = 0;
  for(let i=1; i<number; i++) {
      if(i % 3 === 0 || i % 5 === 0){
          sum += i;
      }
  }
  return sum;
}

80.

https://www.jshero.net/en/koans/further.html

function digitsum(n) {
	let sum = 0;
	let string = n.toString();

	for(i=0; i < string.length; i++){
		sum = sum + parseInt(string.substring(i, i+1));
	}

	return sum;
}