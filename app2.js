/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 1:
Which value does x have after
execution of the following code?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
let x = "Pooh"; 
let y = "Tigger";
let z = y; //z = "Tigger"
y = x;  //y = "pooh"
x = z;
 
// Answer: "Tigger"



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 2:
Write a function secondIndexOf, taking two strings
and determining the second occurrence of the second
string in the first string. If the search string
does not occur twice, -1 should be returned.
 
Example: secondIndexOf('White Rabbit', 'it') should return 10.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function secondIndexOf(s1, s2) {
 // Use indexOf twice.
    // const s1Low = s1.toLowerCase();
    // const s2Low = s2.toLowerCase();
    const indexOfFirst = s1.indexOf(s2); 
    // console.log(`The index of the first "${s2}" from the beginning is ${indexOfFirst}`);  
    // console.log(`The index of the secound "${s2}" is ${s1.indexOf(s2, (indexOfFirst + 1))}`); 
    const a = s1.indexOf(s2, (indexOfFirst + 1));
    console.log(a);
}
secondIndexOf('White Rabbit', 'it');
 

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 3:
Write a function equals that checks two values
for strict equality. If the two values are equal,
the string 'EQUAL' should be returned. If they
are unequal, you should get 'UNEQUAL'.
 
Example: equals(1, 1) should return 'EQUAL' and equals(1, 2)
should return 'UNEQUAL'.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function equals(a, b) {
 // Initialize a variable with 'UNEQUAL'.
    
 // Use 'if' to set the variable to 'EQUAL' if necessary.
 // Return the variable.
 if(a === b) {
        return "EQUAL";
    } else {
        return "UNEQUAL";
    }
}
equals(1, 1);

function equals2(a,b) {
    return a === b ? `EQUAL` : `UNEQUAL`
}
equals2(1, 1);
 
const equals3 = (a, b) => a === b ? 'EQUAL' : 'UNEQUAL'
equals3(1,2)


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 4:
Write an if/else statement with the following condition:
 
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young".
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function ageChecker4(age) {
    // if(age >= 18){
    //     return "Old enough";
    // } else {
    //     return "Too young";
    // }

    // validator
    if(age >= 150 || age < 0 || isNaN(age)) {
        console.log("Stop it");
        return 
    }
    return age >= 18 ? `Old enough` : `Too young`
}
ageChecker4(13);


const ageChecker5 =(age) => age >=18 ? `Old enough` : `Too young`
ageChecker5(19);

// Infinity NaN(not a number)


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 5:
Write a function repdigit that determines whether a two-digit
decimal is a repdigit or not. If the decimal is a repdigit,
'Repdigit!' should be returned, otherwise 'No Repdigit!'.
 
Example: repdigit(22) should return 'Repdigit!' and repdigit(23)
should return 'No Repdigit!'.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function repdigit(n) {
    // Calculate the ones digit
    // of n with modulo 10.
    const ones = (n % 10);
    // Calculate the tens digit
    // of n by dividing by 10
    const tens = Math.floor(n / 10);
    // and rounding down.
    // Compare ones and tens digits.


    // if(ones === tens){
    //     return "Repdigit!";
    // } else {
    //     return "No Repdigit!";
    // }
    return ones === tens ? `Repdigit` : `No Repdigit!`
}
repdigit(23);
    
function repdigit2(n) {
    return [11,22,33,44,55,66,77,88,99].includes(n) ? `Repdigit` : `No Repdigit!`
}
repdigit2(44);

   /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   Question 6:
   Write a function unequal that checks 3 values for strict inequality.
   The function should return true if all three parameters are strict
   unequal. Otherwise false.
    
   Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2)
   should return false.
   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
    
   function unequal(a, b, c) {
    //return a !== b && ...
    return a !== b && a !== c && b !== c
        // if(a !== b && a !== c && b !== c){
        //     return "true";
        // } else {
        //     return "false";
        // }
   }
   unequal(1, 2, 3);


   /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 7:
Which of these alerts are going to execute?
 
What will the results of the expressions be inside if(...)?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
 
//  Answer: only execute first, third
// true || false  --- correct 
// true && false  --- uncorrect
// false || true && true --- correct

// false undifind null 0 “” NaN 


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 8:
Write the code which asks for a login with prompt.
 
If the visitor enters "Admin", then prompt for a password,
if the input is an empty line or Esc – show “Canceled”, if it’s
another string – then show “I don’t know you”.
 
The password is checked as follows:
 
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
 
Refer to the schema below:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

function question() {
    const userName = prompt('Please enter user name')
    if (userName === null || userName === '') {
      return 'Canceled'
    }
    if (userName !== 'Admin') {
      return `I don't know you`
    }
    const password = prompt('Please enter your password')
    if (password === null || password === '') {
      return 'Canceled'
    }
    if (password !== 'TheMaster') {
      return 'Wrong password'
    }
    return 'Welcome!'
  }
  question()

  
// ------------------------------------------------------------


const userName = prompt("Please enter user name");
    console.log(userName);
if(userName === "Admin"){
    password = prompt("Please enter your password");
} else if(userName === ""  || userName === null) {
    console.log("Canceled");
} else {
    console.log("I don't know you");   
}
if(password === "TheMaster"){
    console.log("Welcome!");
} else if(password === "") {
    console.log("Canceled");
} else {
    console.log("Wrong password");
}


