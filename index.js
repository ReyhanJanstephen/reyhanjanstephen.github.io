WebView browser = (WebView) findViewById(R.id.webview);
browser.getSettings().setLoadWithOverviewMode(true);
browser.getSettings().setUseWideViewPort(true);
if(screen.width <= 700){
   document.location = "android\index.html"
   function startTime() {
     const now = new Date();
     let jam = now.getHours();
     let menit = now.getMinutes();
     let detik = now.getSeconds();
     menit = checkTime(menit);
     detik = checkTime(detik);
     const clocklocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
     document.getElementById('clock').innerHTML = jam + ":" + menit + ":" + detik;
     document.getElementById('clockinfo').innerHTML = clocklocal + " Time";
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
    var music3 = document.getElementById("music3");
     if(music1 !== null){
        music1.pause();
        music1.currentTime = 0;
     }
     if(music2 !== null){
        music2.pause();
        music2.currentTime = 0;
     }
     if(music3 !== null){
        music3.pause()
        music3.currentTime = 0;
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
   function playmusic3(){
      stopallaudio();
      var music3 = document.getElementById("music3");
      music3.loop = true;
      music3.play();
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

   const date = new Date();
   const renderCalendar = () => {
    date.setDate(1);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(
     date.getFullYear(),
     date.getMonth() + 1,
     0
    ).getDay();
    const nextDays = 7 - lastDayIndex - 1;
 
    document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();
    document.querySelector(".date p").innerHTML = new Date().toDateString();
 
    let days = "";
 
    for(let x = firstDayIndex; x > 0; x--){
     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
 
    for(let i = 1; i <= lastDay; i++){
     if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()){
        days += `<div class="today">${i}</div>`;
     } else {
        days += `<div>${i}</div>`;
     }
    }
 
    for(let j = 1; j <= nextDays; j++){
     days += `<div class="next-date">${j}</div>`
    }
    monthDays.innerHTML = days; 
   }
   document.querySelector(".prev").addEventListener("click", () =>{
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
   });
   document.querySelector(".next").addEventListener("click", () =>{
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
  });
  renderCalendar();
