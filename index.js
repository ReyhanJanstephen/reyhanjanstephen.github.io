 var music1 = new Audio('fortnitechillmusic.m4a');
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
   function playmusic1(){
     music1.play();
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
