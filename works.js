         var clutter='';
           var rn="";
           var hitval='';
           var timer=60;
           var score=0;


            function getBubble(){
                for(var i=1;i<=84;i++){
                    rn=  Math.floor(Math.random()*10);
                    clutter +=`<div class="circle">${rn}</div>`;
                

                   }
                   document.querySelector("#pbtm").innerHTML=clutter;
                }
                function getTimer(){
                    setInterval(function(){
                        if(timer>0){
                            timer--;
                        document.querySelector("#timerval").innerHTML=timer;}
                        else{
                            clearInterval(timer);
                            document.querySelector("#timerval").innerHTML="Time-Up";
document.querySelector("#pbtm").innerHTML="<h1>Game-Over<br>Congratulations!</h1>"
document.querySelector("#hit").textContent="Finished";
document.querySelector("#score").textContent="Finished";
                        }
                        
                    },1000)
                }
function getHit(){
    hitval=Math.floor(Math.random()*10);
document.querySelector("#hit").textContent=hitval;
}

function getScore(){
score+=10;
document.querySelector("#score").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",
function(details){
var zb=Number(details.target.textContent);
console.log(zb); // Add this line to see the value of zb

if(zb===hitval){
getScore();
getBubble();
getHit();

}
})



     getBubble();
     getTimer();
     getHit();
    
     



        