
var countdownDate = new Date("December 31 , 2023 00:00:00").getTime();
// console.log(countdownDate);

var countdown = setInterval(function(){
    
    var now = new Date().getTime();
    
    var timeRemaining = countdownDate - now;
    // console.log(timeRemaining);

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
     var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
   

    document.querySelector(".countdown").innerHTML = days + " D: " + hours + " H: "+minutes + " M: " + seconds + " S: "
    if(timeRemaining < 0){
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "Countdown has ended"
    }

}, 1000);


