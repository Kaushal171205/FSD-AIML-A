function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('register end');
      resolve();
    }, 4000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Send Email end');
      resolve();
    }, 3000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('login');
      resolve();
    }, 3000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get data end');
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


register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .catch((err) => console.error(err));

console.log('call other application');
