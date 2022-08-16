// code your solution here

//saturdayFun function
function saturdayFun(saturFun = "roller-skate") {
    return `This Saturday, I want to ${saturFun}!`;
}
console.log(saturdayFun());

//mondayWork function
function mondayWork(mondWork = "go to the office"){
    return `This Monday, I will ${mondWork}.`;

}
console.log(mondayWork());

//wrapAdjective function
function wrapAdjective(wrap = "*"){
    return function (adjective = "a hard worker"){
        return `You are ${wrap}${adjective}${wrap}!`;
    }
}

function wrapAdjective(wrap = "||"){
    return function (adjective = "a dedicated programmer"){
        return `You are ${wrap}${adjective}${wrap}!`;
    }
}

