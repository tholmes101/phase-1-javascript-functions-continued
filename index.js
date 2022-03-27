// code your solution here
function saturdayFun(target = "roller-skate") {
    return `This Saturday, I want to ${target}!`;
}
saturdayFun(target);
saturdayFun();

function mondayWork(target = "go to the office") {
    return `This Monday, I will ${target}.`;
 }
 mondayWork(target);
 mondayWork();
 
const symbol = "*"; 
function wrapAdjective(symbol) {
   const innerWrap = function (adj = "special") {
   return `You are ${symbol}${adj}${symbol}!`;
   };
   return innerWrap;
}
wrapAdjective("*");