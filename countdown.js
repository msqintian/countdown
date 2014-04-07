function countdown(seconds){
  if(seconds >= 0) {
    console.log(seconds);
    seconds--;
    setTimeout(function(){
      countdown(seconds)
    }, 1000);
  }
}

countdown(10);
