// console.log("Hello Timer");
var secondhtml =  document.querySelector("#secondhtml")
var minutehtml = document.querySelector("#minutehtml")
var hourhtml = document.querySelector("#hourhtml")

var hours = 0
var seconds = 0
var minutes = 0


var timer;

function startTimer(){
   timer = setInterval(function(){

      seconds++
      secondhtml.innerHTML = "0" + seconds
      

      if(seconds > 9){

               secondhtml.innerHTML = seconds
              }

      if(secondhtml.innerHTML == 60){
         seconds = "00"
         secondhtml.innerHTML = "00"
         minutes++
         minutehtml.innerHTML = "0" + minutes
         
         }

         if(minutes > 9){
            minutehtml.innerHTML = minutes
         }

         if(minutes == 60){
            minutes = "00"
            minutehtml.innerHTML = "00"
            hours++
            hourhtml.innerHTML = "0" + hours

         }

         if(hours > 9){
            hourhtml.innerHTML = hours
         }
        
   } , 1000)

}

     
    


function stopTimer(){
   clearInterval(timer)
   
}

function resetTimer(){
    seconds = "00"
    minutes = "00"
    hours = "00"


    secondhtml.innerHTML = "00"
    minutehtml.innerHTML = "00"
    hourhtml.innerHTML = "00"
}