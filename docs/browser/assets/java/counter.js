function numCounter(tagId,maxCount,speed){
  var initialNumber = 0;
  function counter(){
      document.getElementById(tagId).innerHTML = initialNumber;
      ++initialNumber;
  }
  var counterDelay = setInterval(counter,speed);
  function totalTime(){
      clearInterval(counterDelay);
  }
  var totalPeriod = speed * (maxCount);
  setTimeout(totalTime, totalPeriod);
}

numCounter("Projects",44,100);
numCounter("Clients",12,400);
numCounter("Partners",436,10);
