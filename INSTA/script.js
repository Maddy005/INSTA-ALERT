
var ls =document.getElementById("li");
var li =document.getElementById("ls");


var ln1 =document.getElementById("line1");
var ln2 =document.getElementById("line2");
var change=document.getElementById("lett");
var btn =document.getElementById("ok");
var cir=document.querySelector(".circle");

btn.addEventListener('click',()=>{

change.classList.toggle("time");

if(btn){
    ls.style.display="block";
    li.style.display="block";
    ln1.style.display="none";
    ln2.style.display="none";
    
    console.log(btn)
}
else {
  btn. innerHTML="You've Spent 1h on Instagram Today";
   
}


});
btn.addEventListener('click',()=>{
  change.innerHTML="I know you will keep scrolling";

});