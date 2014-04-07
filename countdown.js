function countdown(seconds){
  for(var i=seconds; i>=0; i--){
    (function(sec){
      setTimeout(function(){
        console.log(sec)
      }, (seconds - sec)*1000);
    })(i);
  }

}

countdown(10);
