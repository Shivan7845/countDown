
//   // Set the countdown date and time
//   var countdownDate = new Date("June 30, 2023 00:00:00").getTime();

//   // Update the countdown every second
//   var countdown = setInterval(function() {
//     // Get the current date and time
//     var now = new Date().getTime();

//     // Find the time remaining between now and the countdown date
//     var timeRemaining = countdownDate - now;

//     // Calculate the days, hours, minutes, and seconds remaining
//     var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//     // Display the countdown timer
//     document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";

//     // Check if the countdown has ended
//     if (timeRemaining < 0) {
//       clearInterval(countdown);
//       document.getElementById("countdown").innerHTML = "Countdown has ended!";
//     }
//   }, 1000);

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


