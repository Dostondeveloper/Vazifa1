// /confrim

let a = confirm ("Are yuo a student")
console.log(a);
let b = confirm ("are you a student")
console.log(b);

var c = 1;
while(a < 10){
    switch (true) {
        case (a <= 5):
            console.log(a);
            break;
        case (a > 5 && a < 8):
            console.info(a);
            break;
        case (a >= 8):
            console.warn(a);
            break;
    }
  a++;
}

var d = 1;
while(a < 10){
	if(a <= 5) { console.log(a); }
	if(a > 5 && a < 8) { console.info(a); }
	if(a >= 8) { console.warn(a); }
	a++;
}

const myarray= [ [ 'id', 42 ], [ 'name', 'franc' ] ]
const object = Object.fromEntries(myarray); 
console.log(object);

let x = 5;
let salom =  document.getElementById('hello')
salom.innerHTML = x

$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });