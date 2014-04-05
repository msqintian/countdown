var counter, intervalId;
function countdown(seconds){
  counter = seconds;
  intervalId = setInterval(printTime, 1000);
}

function printTime(){
  console.log(counter);
  counter--;
  if(counter < 0) {
    clearInterval(intervalId);
  }
}

countdown(10);
