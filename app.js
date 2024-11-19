// const clock = document.querySelector("#clock"); /* Can be done in both the ways */
const clock = document.getElementById("clock");
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
