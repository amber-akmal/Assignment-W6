//- Write a program that takes the number of units consumed by a user if it is greater than 100 then
// add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% 
//of tax Where the tax amount will be calculated by the amount of bill.
let B =201
if (B>100 && B<=200){console.log(B+(B*10/100));}
if (B>200 && B<=500){console.log(B+(B*15/100));}
if (B>500){console.log(B+(B*25/100));}
