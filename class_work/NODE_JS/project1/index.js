// console.log("Hello world");

// var list = require('./list');

// console.log(list);

// *******************NINJA*******************

// setTimeout(function(){
// console.log("three seconds have passed");
// },3000);

// var time=0;

// setInterval(function(){
//     time += 2;
//     console.log(time + " seconds have passed");
// },2000);

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + " seconds have passed");
//     if(time>5){
//         clearInterval(timer);
//     }
// },2000);

// console.log(__dirname);
// console.log(__filename);

//***************** */ #5 - Function Expressions*****************

// function sayHi(){
//     console.log('hi');
// }
// sayHi();

// function callFunction(fun){
// fun();
// }

// // -----function expression
// var sayBye = function(){
//     console.log('buy');
// };
// sayBye();

// callFunction(sayBye); //this var is passed to a function and func run 


// ******************* #6 - Modules and require()***************

// var counter = require('./count');

// console.log(counter(['shaun', 'crystal', 'ryu']));

// //************** */ #7 - Module Patterns**************

// var stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 6));

// // **************  #8 - The Node Event Emitter************
//
// var events = require('events');
//
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });
//
// myEmitter.emit('someEvent', 'the event was emitted'); //manually emitting event

// //----------------------------------------------
//
// var events = require('events');
// var util = require('util');
//
// var Person = function (name) {
//     this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter); //custom events attaching to every Person
//
// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
//
// var people = [james, mary, ryu];
//
// people.forEach(function (person) {
//     person.on('speak', function (mssg) {
//         console.log(person.name + ' said: ' + mssg)
//     });
// });
//
// james.emit('speak', 'hey dudes');
// ryu.emit('speak', 'Good morning');

//********************** #9 - Reading & Writing Files (fs)**************

// var fs = require('fs');

//------------synchronic (blocking the code after) ------------------
// var readMe = fs.readFileSync('readme.txt', 'utf8');
//
// // console.log(readMe);
//
// fs.writeFileSync('writeMe.txt', readMe);

// // ---------------------asynchronic (not blocking)------------------

// fs.readFile('readme.txt', 'utf8', function (err, data) {
//     fs.writeFile('writeMe.txt', data, function(){

// });
// });
//
// console.log('test');

// (node:6477) [DEP0013] DeprecationWarning: Calling an asynchronous function without callback is deprecated.



// // ******************** #10 - Creating & Removing Directories*****************
//
// fs.unlink('writeMe.txt');

// // -----------------------sync------------------------
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// // -------------------------async-------------------------
// fs.mkdir('stuff', function () {
//     fs.readFile('readme.txt', 'utf8', function (err, data) {
//         fs.writeFile('./stuff/writeMe.txt', data);
//     })
// });

// fs.unlink('./stuff/writeMe.txt', function () {
//     fs.rmdir('stuff');
// });

// // ************************* #12 - Creating a Server***************
//
// var http = require('http');
//
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('hey ninjas');
// } );
//
// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');

// // ******************* #14 - Readable Streams**************
//
// var http = require('http');
// var fs = require('fs');
//
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
//
//
// myReadStream.on('data', function (chunk) {
//     console.log('new chunk received:');
//     console.log(chunk);
// });

// // ********************* #15 - Writable Streams *********************
//
// var http = require('http');
// var fs = require('fs');
//
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')
//
// myReadStream.on('data', function (chunk) {
//     console.log('new chunk received:');
//     myWriteStream.write(chunk);
// });

// ***************************** #16 - Pipes **********************
// var http = require('http');
// var fs = require('fs');
//
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')
// myReadStream.pipe(myWriteStream);

// //------------------------------------------------
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//
//     var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
//     myReadStream.pipe(res);
// } );
//
// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');

// // ******************** #17 - Serving HTML Pages*******************
// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/html'});
//
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);
// } );
//
// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');
//
// // ********************** #18 - Serving JSON Data ********************
//
// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200,{'Content-Type': 'application/json'});
//     var myObj = {
//         name: 'Ryu',
//         job: 'Ninja',
//         age: 29
//     };
//     res.end(JSON.stringify(myObj))//sending data back to the client
// } );
//
// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');
