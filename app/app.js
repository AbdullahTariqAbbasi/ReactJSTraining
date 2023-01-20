async function f() {
    document.getElementById('status').innerHTML = 'Deploying in 5 seconds'
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Deployed!!!"), 5000)
    });
    let result = await promise; // wait until the promise resolves (*)
    alert(result);
}


function asynchronous_operational_method() {
  let first_promise = new Promise((resolve, reject) => resolve("Hello"));
  let second_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve(" GeeksforGeeks..");
      }, 1000);
  });
  let combined_promise = Promise.all([first_promise, second_promise]);
  return combined_promise;
  }
    
  async function display() {
  let data = await asynchronous_operational_method();
  console.log(data);
  }
    
  // display();