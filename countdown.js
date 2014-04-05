function countdown(seconds){
  var count = function(){
    return seconds;
  };

  var descreaseCount = function(){
    return seconds--;
  };

  var intervalId = setInterval(function(){
    console.log(count());
    descreaseCount();
    if(count() < 0){
      clearInterval(intervalId);
    }
  }, 1000);

}

countdown(10);
