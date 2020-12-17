// http://nicholasjohnson.com/javascript/javascript-for-programmers/exercises/closure/

// 1.
let outer = function() {
    let a = "A Local variable"
    let inner = function() {
      alert(a)
    }
    window.fnc = inner
  }
 outer();
 fnc();

// 2.
(function (){
    let a = 'a local variable';
    let inner = function(){
        alert(a);
    }
    window.fnc = inner
})();

fnc();

// 3.
let a = 12;
(function() {
  alert(a);
})();
// answer is 12;

// 4.
let a = 5;
(function() {
  let a = 12;
  alert(a);
})();
// answer is 12

// 5.
let a = 10;
let x = (function() {
  let a = 12;
  return (function() {
    alert(a);
  });
})();
x();
// answer is 12

// 6.
let a = 10;
let x = (function() {
  let y = function() {
    let a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();
// answer is 10

// 7.
let a = 10;
let x = (function() {
  (function() {
    a = 12; 
  })();
  return (function() {
    alert(a);
  });
})();
x();
// answer is 12

// 8.
let a = 10;
(function() {
  let a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();
// answer is 15

// 9.
  let ingredient_1 = 'bread ';
  let ingredient_2 = 'soy ';
  let ingredient_3 = 'jam'; 

(function () {  
  
   let makeSandwich = function() {
   
     console.log(`get - ${ingredient_1} !`)

  step_2 = function addSoy(){
    
    let step_2 = ingredient_1 +' and soy';
    console.log(step_2);
    }
    
  step_3  = function addJam(){
      let step_3 = ingredient_1 + ingredient_2 + ' and jam';
     console.log(step_3);
     }
      
      step_2();
      step_3();
    }
    window.fnc = makeSandwich
 
  fnc();
  console.log('sandwich is done !');
 })()

