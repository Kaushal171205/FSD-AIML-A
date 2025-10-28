function login(){
    waitforfiveseconds();
    console.log("loged in Kaushal")   
}
function getData(){
    waitforfiveseconds();
    console.log("get Data roll no. 2300321530101")   
}

function displayData(){
    waitforfiveseconds();
    console.log("Display data ")   
}
function attemptTest(){
    waitforfiveseconds();
    console.log("Attempt test")
}
function logedOut(){
    waitforfiveseconds();
    console.log("Loged out kaushal")
}
function waitforfiveseconds(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms)
    {}
}
login();
getData();
displayData();
attemptTest();
logedOut();
console.log('call other app')