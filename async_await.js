function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('logged out');
      resolve();
    }, 4000);
  });
}

function AttemptTest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Attempt Test');
      resolve();
    }, 3000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('login : kaushal');
      resolve();
    }, 3000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data roll no. 2300321530101');
      resolve();
    }, 3000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('display data end');
      resolve();
    }, 3000);
  });
}
async function main (){
    await login();
    await getData();
    await displayData();
    await AttemptTest();
    await logout();
    console.log('Call Other app');
}
main();
