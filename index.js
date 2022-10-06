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
    var music1 = document.getElementById("music1");
    var music2 = document.getElementById("music2");
     if(music1 !== null){
        music1.pause();
        music1.currentTime = 0;
     }
     if(music2 !== null){
        music2.pause();
        music2.currentTime = 0;
     }
   }
   function playmusic1(){
     stopallaudio();
     var music1 = document.getElementById("music1");
     music1.loop = true;
     music1.play();
   }
   function playmusic2(){
     stopallaudio();
     var music2 = document.getElementById("music2");
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
