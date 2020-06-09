// CHAPTER # 1

// Task # 1
// alert('Welcome to the page');

// Task # 2
// alert('Error! Please enter a valid password');

// Task # 3
// alert("Welcome to JS Land..\nHappy Coding!");

// Task # 4
// alert('Welcome To JS Land..\nHappy Coding!\nPrevent This Page from addign addtional dialogue boxes');

// Task # 5
// alert('Hello! I can run JS from my web browsers console');

/*--------------------------------------------------------------*/

// CHAPTER # 2

// Task # 1
// var username;

// Task # 2
// var myname = "Muhammad Ahmed Anis";

// Task # 3
// var message = "Hello World";
// alert(message);

// Task # 4
// var name="Jhone Doe";
// var age="15 years old";
// var degree="Certified Mobile App Developer";
// alert(name);
// alert(age);
// alert(degree);

// Task # 5
// var p = "Pizza\nPizz\nPiz\nPi\nP";
// alert(p);

// Task # 6
// var email = "amdans4";
// alert (email + "@gmail.com");

// Task # 7
// var book = 'A smarter way to learn JS';
// alert('I am trying to learn form ' + book);

// Task # 8
// document.writeln("Yeah! I can write HTML content through JS");

// Task # 9
// var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);

/*--------------------------------------------------------------*/

// CHAPTER # 3

// Task # 1
// var age =15;
// alert('I am ' + age + ' years old');

// Task # 2
// var track = 14;
// alert('You visited this site ' +track+ ' times');

// Task # 3
// var year = 1999;
// document.writeln('my birth year is ' +year+ '<br>' + ' Datatype of my declared var is int');

// Task # 4
// var name = prompt('enter your name');
// var product = prompt('which product do you want to order?');
// var quantity = prompt('enter quantity');
// document.writeln(name + " ordered " +quantity+ " " +product+ " from XYZ store" );

/*--------------------------------------------------------------*/

// CHAPTER # 4

// Task # 1

// var a,b,c;
// console.log(a,b,c);

// Tash # 2

// LEGAL VARIABLE NAMES
// var a = "abc";
// var a1 = "abc";
// var dollar$ = "abc";
// var AppDotJs = "abc";
// var myAlert = "alert";

// ILLEGAL VARIABLE NAMES
// var 1 = "cant be a number"
// var "a" = "cant be in quotation mark";
// var alert = "illegal keyword";
// var a b = "illegal spaces"
// var -abc = "illegal sign"
// alert(-abc);

// Task # 3

// var heading = "Rules for naming JS variables";
// var dot = ".", underScore = "_", num = "numbers", dollar = "$", letter = "letter", CaseSensitive = "case sensitive", keywords = "JS Keywords";
// document.write(heading.bold());
// document.writeln("<br>" + "Variable names can only contain " + dot + " , " + num + " , " + dollar + " and " + underScore+ " For example ; $my_1stVar");
// document.writeln("<br>" + "Variable names begin with a " +letter+ " , " +dollar+ " or " +underScore+ " For example ; $name, _nam or name");
// document.writeln("<br>" + "Variable names are " +CaseSensitive);
// document.writeln("<br>" + "Variable names must not be any " +keywords);

/*--------------------------------------------------------------*/

// CHAPTER # 5

// Task # 1

// var a = +prompt("Enter first integer");
// var b = +prompt("Enter second integer");
// var c = (a + b);
// alert(c);

// Task # 2

// var a = +prompt("Enter first integer");
// var b = +prompt("Enter second integer");
// var c = (a + b), d = (a - b), e = (a * b), f = (a / b), g = (a % b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);

// Task # 3

// var a;
// document.writeln("Value after var declaration is " +a);
// a = +prompt("enter some value");
// document.writeln("<br>"+"the initial value is "+a);
// a++;
// document.writeln("<br>"+"the incremented value is: "+a);
// a = a+7;
// document.writeln("<br>"+"val after addition is: "+a);
// a--;
// document.writeln("<br>"+"val after decrement is: "+a);
// a = a%3;
// document.writeln("<br>"+"remainder is: "+a);

// Task # 4

// var ticketPrice = 600;
// var a = +prompt("how many tickets you want?");
// var totalPrice = ticketPrice*a;
// document.writeln("total cost to buy "+a+" tickets is "+totalPrice);

// Task # 5

// var a = +prompt("enter table number");
// for(b = 1; b<13; b++){
//     c=(a*b);
//     document.writeln(a+ " x " +b+ " = " +c +"<br>");
// }

// Task # 6

// var c = +prompt("enter temp in Celsius");
// var f = (c * 9/5)+32;
// document.writeln(c+" Celsius is "+f+" in Fahrenheit");
// f = +prompt("enter temp in Fahrenheit");
// c = (f - 32)*5/9;
// document.writeln("<br>"+f+" Fahrenheit is "+c+" in Celsius");