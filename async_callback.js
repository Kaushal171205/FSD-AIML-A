function login(cb){
  setTimeout(function(){
    console.log("Name : Kaushal Sharma")
    cb();
  },5000)  
}
function getData(cb){
  setTimeout(function(){
    console.log("Roll no.: 2300321530101")
    cb();
  },5000)  
}
function displayData(cb){
  setTimeout(function(){
    console.log("displayData")
    cb();
  },5000)  
}
function AttemptTest(cb){
  setTimeout(function(){
    console.log("AttemptTest")
    cb()
  },5000)  
}
function logout(){
  setTimeout(function(){
    console.log("logout")
  },5000)  
}
login(() => {
  getData(() => {
    displayData(() => {
      AttemptTest(() => {
        logout();
      });
    });
  });
});
console.log("call other app")