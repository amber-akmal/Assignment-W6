"use strict";
//Write a program that takes temperature and check it. If it is cold then suggest the user to wear 
//warm clothes and so on according to the weather.
//temprature T<8 --COLD
//temperature T>8 && T<18 --NORMAL
//temperature T>18 ---HOT
let T = 51;
if (T < 8) {
    console.log("It is cold wear warm clothes");
}
if (T > 8 && T < 18) {
    console.log("Temperature is normal wear Normal clothes");
}
if (T > 18) {
    console.log("Temperature is Hot wear light clothes");
}
