//Write a program that converts given number of days in to 
//weeks and days such as 17 days = 2 weeks and 3 days.
let x=31;
if (x<6) {console.log (x+'days');}
if (x>=7) {console.log (Math.floor(x/7)+'week '+(x%7)+'days ');}

