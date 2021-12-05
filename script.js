(function () {
  "use strict";

  //Music

  document.getElementById("mute").addEventListener("click",mute);

  var muted=false;

  function mute(){
    if(muted===false){
      document.getElementById("Jingle_Bells").pause(); 
      document.getElementById("Bells_Ringing").pause();
      hohoho.pause();
      clearInterval(hohoInt);
      muted=true;
    }
    else{
      document.getElementById("Jingle_Bells").play(); 
      document.getElementById("Bells_Ringing").play();
      hohoInt = setInterval(function(){hohoho.play();},12000);
      muted=false;
    }
  } 
  // Ho Ho Ho St Nick by Acclivity
  // Licensed under Creative Commons: By Sampling Plus 1.0 License
  // https://creativecommons.org/licenses/sampling+/1.0/s
  var hohoho = new Audio("HoHoHo.mp3");
  hohoho.play();
  var hohoInt = setInterval(function(){hohoho.play();},12000);

  //Snow

  window.addEventListener('resize', function () { 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }); 

  window.addEventListener("load",snow);

  function snow(){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var snowLimit = 400;

    function draw(){
      var snow = [];

      for(var i = 0; i < snowLimit; i++)
      {
        snow.push({
          x: Math.random()*canvas.width,
          y: Math.random()*canvas.height,
        })
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "white";
      ctx.beginPath();
      for(var i = 0; i < snowLimit; i++)
      {
        var p = snow[i];
        ctx.moveTo(p.x, p.y);
        ctx.fillText('*',p.x, p.y);
      }
      ctx.fill();
    }

  setInterval(draw, 100);
  }

  //Animated Santa

  var santa1=document.getElementById("santa1");
  var santa2=document.getElementById("santa2");
  var santa3=document.getElementById("santa3");

  function animateSanta(){
    document.getElementById("santa1").style.display="block";
    setTimeout(function(){ santa1.style.display="none"; santa2.style.display="block"; }, 100);
    setTimeout(function(){ santa2.style.display="none"; santa3.style.display="block"; }, 200);
    setTimeout(function(){ santa3.style.display="none"; santa1.style.display="block"; }, 300);
  }

  animateSanta();
  setInterval(animateSanta, 400);


  //Animated Town

  function shotTownObject(){
    var number = Math.floor((Math.random() * 10) + 1);
    var townObject=document.querySelector(".townObject"+number);

    while(townObject.classList.contains('shotTownObject')){
      //console.log("Istnieje"+number);
      number = Math.floor((Math.random() * 10) + 1);
      townObject=document.querySelector(".townObject"+number);
      //console.log("Zmiana numeru");
    }

    townObject.classList.add('shotTownObject');
    //console.log("Strzał"+number);
    
  }

  shotTownObject();
  setInterval(shotTownObject,3500); //<--***Dla róznych przegladarek i rozdzielczości bardziej odpowiednie inne wartosci***

  function checkIfOut(){ 
    for(var i=1; i<=10; i++){
      var townObjectPos=document.querySelector(".townObject"+i);
      var townObjectBoundries = townObjectPos.getBoundingClientRect();
      if(townObjectBoundries.right>window.innerWidth+500){
          townObjectPos.classList.remove('shotTownObject');
      }
    }
      
  }
  setInterval(checkIfOut,1000);
})(document);