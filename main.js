let dateNow= new Date();
let Hour=document.querySelector('.hour');
let Min=document.querySelector('.min');
let Sec=document.querySelector('.sec');
let dark = document.querySelector('.dark');
let container=document.querySelector('.container');
let clock=document.querySelector('.clock');
let Clock= new Audio('./assets/Clock.mp3');
Clock.volume=0.1;
function getHour(){
    let d;
    if (dateNow.getHours()===0) {
         d=23;
    }else{
         d=((dateNow.getHours()-1));
    }
    d+= dateNow.getMinutes()/60
    Hour.style.transform=`rotate(${30*d}deg)`;
}
function getMin(){
     let d= dateNow.getMinutes()+ dateNow.getSeconds()/60;
     Min.style.transform=`rotate(${6*d}deg)`;

 }
setInterval(()=>{
    Clock.play();
    Sec.style.transform=`rotate(${6*(dateNow.getSeconds())}deg)`;
    dateNow= new Date();
    getMin();
    getHour();
},1000);
dark.addEventListener('click',()=>{
container.classList.toggle('darkCont');
dark.classList.toggle('light');
clock.classList.toggle('clockD');
Min.classList.toggle('minD');
if (dark.classList.contains('light')){
    dark.textContent='Light Mode';
}else{
    dark.textContent='Dark Mode';

}
})

