// http://nicholasjohnson.com/javascript/javascript-for-programmers/exercises/arrays/

 
// 1.
for (let i = 10; i >= 0; i--) {
  alert("Number: " + [i]);
 if( i == 0 ) {
  alert("Blast off!")
}
}

// 2.
products = ['Cats',
 'Cheese',
 'Spanners', 
 'Lemons',
 'Candyfloss'].forEach(function(products){
    console.log(products);
  });

// 3.  

let toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes']
let MakingPizza = 4;

function makingPizza (){
    if (MakingPizza = toppings.length) {
        return("Making Pizza: " + toppings.join('-'));
        // MakingPizza = MakingPizza + toppings;
      } 
      
}
makingPizza ()