 var music1 = new Audio('ToBeContinuedFortnite.m4a');
 var music2 = new Audio('OneDirection.mp3');
 var audio = document.querySelectorAll('Audio');
   function startTime() {
     const now = new Date();
     let jam = now.getHours();
     let menit = now.getMinutes();
     let detik = now.getSeconds();
     menit = checkTime(menit);
     detik = checkTime(detik);
     document.getElementById('clock').innerHTML = jam + ":" + menit + ":" + detik;
     setTimeout(startTime, 1000);
   }
  
   function checkTime(i){
     if(i < 10){i = "0" + i};
     return i;
   }

   function dropdownfunction(){
     document.getElementById('dropdown1').classList.toggle("show");

   }

   function stopallaudio(){
     audio.forEach(function(audio){
       audio.pause();
       audio.currentTime = 0;
     });
   }
   function playmusic1(){
     stopallaudio();
     music1.loop = true;
     music1.play();
   }
   function playmusic2(){
     stopallaudio();
     music2.loop = true;
     music2.play();
   }
  
   window.onclick = function(event) {
    if(!event.target.matches('.dropbutton')){
       var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for(i = 0; i < dropdowns.length; i++){
        var opendropdown = dropdowns[i];
         if(opendropdown.classList.contains('show')){
            opendropdown.classList.remove('show');
         }
       }
    }
   }
