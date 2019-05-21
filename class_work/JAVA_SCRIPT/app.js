
// var test = 1, 
//     second = 'abcd',
//     bool = true,
//     n = null,
//     un = undefined;

// var fff = 'abcd';
// var fff2 = fff;
// fff2 = 'aaaaaaa';

// var obj1 = {
//     id: 0,
//     name: 'test',
//     name2: {
//         first_name: 'vasya'
//     }
// };

// // var obj2 = obj1;//imena odinakovie t.k. objiekti peredautca po ssilke
// var obj2 = Object.assign({}, obj1);

// obj2.name ='new value';

// console.log(obj1.name); 
// console.log(obj2.name);

// JSON.parse(JSON.stringify(obj1)); //izbavliaem ot ssilok object

// for(var i=0; i<10; i++){
//     obj1.id = 1;
//     debugger;
// }


// var b = 0;
// while(b<10){
// console.log(b);
// b++;
// }

// var arr1 = ['a', 1, 5, 'sdf'];

// for (var i in arr1){
//     console.log(i);
// }

// arr1.forEach(function(val, index){  //call back function 
// console.log(index, val);
// })

// console.log(calc(2, 3));

// function calc(a, b){
//     return a + b;
// }

// function multiFunction(a){
//     return function(b){
//         return a+b;
//     }
// }

// var sw =5;
// switch(sw){
//     case 5:
//         console.log('case:', 5)
//         break;
//     default:
//         console.log('default')
// }

// function testArg(a, b, c){
//     console.log(a,b,c);
// }

//***********add as many arguments - will show like array */
// function testArg(){
//         console.log(arguments); 
//     }

//************ PROTOTYPES*******************

// function testClass(){  //snachala smotrit esli function, esli net to prototype
//     this.run = function(){
//         console.log('adfsdgssd');
//     }
//     }

// testClass.prototype.abc = 'abc';
// testClass.prototype.run = function(){
//     console.log('methpd ruun')
// }

// var app = new testClass();
// app.run();


//*******CLASS WORK */
// var a = 3;
// var b = 4;

// function calc(a, b){
//     return a * b;
// }

// console.log(calc(a, b));


function CalcClass(a,b){
    this.a = a;
    this.b = b;

    this.mult = function(){
        return a * b;
    }

    this.add = function(){
        return a + b;
    }

    this.subs = function(){
        return a - b;
    }

    this.dev = function(){
        return a / b;
    }

    this.print = function(answer){
        console.log(answer);
    }
}

var app = new CalcClass(2,3);
app.print(app.dev());