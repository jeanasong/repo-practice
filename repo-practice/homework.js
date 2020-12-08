// Write a for loop for the given output:

 // 1, 3, 5, 7, 9

/* let i = 1;
for (let i = 1; i < 10; i +=2) {
    console.log(i);
} */

// Write a for loop for the given output:

// 2, 4, 6, 8, 10

/* let i = 2;
for (let i = 2; i < 11; i +=2) {
    console.log(i);
} */

// write a for loop that iterates between 0 and 10 and prints all even numbers.

/* let i = 0;
for (let i = 0; i <=10; i++) {
    if (i === 0) {
        console.log(i + " is even");
    } else if (i % 2 === 0) {
        console.log(i + " is even");
    }
} */

// write a for lopp that iterates between 1 - 20.
// Prins “even” for all even numbers, and “odd” for all odd numbers.

/* let i = 1;
for (let i = 1; i <=20; i++) {
    if (i === 1) {
        console.log(i + " is even");
    } else if (i % 2 === 1) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
} */

// create a loop that outputs multiples of 3 starting at 6 ending at 60.

/* let i = 6
for(let i = 6; i <=60; i+=3) {
    console.log(i);
} */

// print all prime numbers between 1 - 20.

 /* let counter = 0
for (let counter = 2; counter <= 20; counter++) {

    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
} */

// What will be the output of the following code?
// Answer is 3.

/* let x = 8; y = 24;
if (x > y)
{
    console.log(x - y);
}
else
{
    if (x < y)
    {
        console.log(y / x);
    }
    else
    {
        console.log(x + y)
    }
} */

// write a loop to output 1 - 10, "even" for even numbers, and "odd" for odd number.

/* for (i = 1; i <=10; i++) {
    if(i % 2 === 0) {
        console.log(i + " even");
    } else {
        console.log(i + " odd");
    }
} */

/* console.log("for loop =======");
// for loop
 for(i = 1; i <= 10; i++) {
    console.log(i);
    // break;
} 
console.log("while loop =======");
// while loop
 var i = 1;
while(i <= 10) {
    console.log(i);
    // break;
    i++;
} 
console.log("do...while loop =======");

// do.. while loop
 var i = 1;
do {
    console.log(i);
    i++;
    // break;
}while(i<=10); 
console.log("foreach or forin loop ======");

// foreach or forin loop
let sub = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i in sub) {
console.log(sub[i]);
// break;
} */

// Using a while loop for intergers between 0 and 20.
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other intergers should not be output.
/* let i = 0;
while(i <=20) {
    if(i % 2 === 0)
    console.log(i * 3);
    i++
} */

// will check back

/* let counter = 0;
while('counter = 0; counter <= 20; counter++') {

    let notPrime = false;
    for (let i = 0; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
} */

// print the change of $6 in quaters
// while loop
/* let amountpaid = 10;
var cost = 4;
let AmountofQuaters = 10 * 4;
while(cost >= 1) {
    cost--
    AmountofQuaters -= 4
}
console.log(AmountofQuaters) */

// for loop

/* let amountpaid = 10;
var price = 4;
let quaters =0;
for(amountpaid = 10; amountpaid > price; amountpaid-=.25) {
    quaters++;
}
console.log(quaters); */

// Using a while loop, print out all prime numbers between 0 - 20
// Use a while loop to print out the even number from 1 to 20.
// (You'll need Modulus for this. And an IF Statement.)

 /* for(let i=1;i<=10;i++) { 
    if (i%2==0){
    console.log(i +" :even");
 }
}
var isPrime;console.log("1 is odd");for (var i=2;i<=20; i++) {
    if (i%2==1) {
    var temp = Math.floor(Math.sqrt(i)); for(var l=2; l<=temp; l++){
    if(i%l !== 0){
    isPrime=true;
    } else {
        isPrime=false;
    }

    }
    if (isPrime){
        if (i%2!=0)
        console.log(i+ " is prime && odd");

    } else {
        console.log(i+ " is odd");
 }
}  if(i%2==0) {
    console.log(i+" is even");
 }
} */

/* a = 1; 
sum = 0; 
 
while(a <= 20) { 
  sum = sum + a; 
  a = a + 1; 
} */
 
// echo sum;
// Use a while loop to add up the numbers 1 to 20 into one variable.
// Print out the sum at the end
/* let sum = 0;
let number = 1;
while (number <= 20) {
    sum += number;
    number++;
}
console.log("sum = " + sum); */
