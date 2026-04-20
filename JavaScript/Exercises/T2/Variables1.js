/*Question 1: Let's play florist. Declare six variables, remembering to name them 
according to their purpose:

- the price of a single rose (8) and the number of roses you have (70)
- the price of a single lily (10) and the number of lilies you have (50)
- the price of a single tulip (2) and the number of tulips you have (120)

Now declare three variables, one each for the roses, lilies, and tulips you have, 
in which you place their total price. Insert the corresponding values into the variables
using the variables declared in the previous step. Finally, declare a variable in which 
you store the price of all your flowers (again, use the previous variables for 
initialization). Display all inventory information in the console in the following form:*/

// Save everything in variables
let rosePrice = 8, lilyPrice = 10, tulipPrice = 2;
let roseNumber = 70, lilyNumber = 50, tulipNumber = 120;

let roseValue = rosePrice * roseNumber;
let lilyValue = lilyNumber * lilyPrice;
let tulipValue = tulipPrice * tulipNumber;

let total = roseValue + lilyValue + tulipValue;

console.log("1-. ROSES: %n Rose price: ", rosePrice, "%n Number of roses: ", roseNumber + "%n Value of roses: ", roseValue);
console.log("1-. LILY: %n Lily price: ", lilyPrice, "%n Number of lilies: ", lilyNumber + "%n Value of lilies: ", lilyValue);
console.log("1-. TULIP: %n Tulip price: ", tulipPrice, "%n Number of tulips: ", tulipNumber, "%n Value of tulips: ", tulipValue);
console.log("Total: ", total);

/* Question 2: Modify the code from the previous example.
Assume that the prices of flowers will be constant (they will not change). 
Declare and initialize the remaining variables in the same way as in the previous 
example. Display all the gathered information in the console. Now decrease the number 
of roses by 20 and lilies by 30.

Display all the collected information in the console again. */

roseNumber = roseNumber - 20;
lilyNumber = lilyNumber - 30;

roseValue = rosePrice * roseNumber;
lilyValue = lilyPrice * lilyNumber;

total = roseValue + lilyValue + tulipNumber;
console.log("1-. ROSES: %n Rose price: ", rosePrice, "%n Number of roses: ", roseNumber + "%n Value of roses: ", roseValue);
console.log("1-. LILY: %n Lily price: ", lilyPrice, "%n Number of lilies: ", lilyNumber + "%n Value of lilies: ", lilyValue);
console.log("1-. TULIP: %n Tulip price: ", tulipPrice, "%n Number of tulips: ", tulipNumber, "%n Value of tulips: ", tulipValue);
console.log("Total: ", total);