let inputele=document.getElementById("inputelement");
let paraele=document.getElementById("paraele");
let number=Math.ceil(Math.random()*100);
function submit(){
    let inpuval=inputele.value;
    let guessvalue=parseInt(inpuval);
    let diff=guessvalue-number;
    if(guessvalue === number){
        paraele.textContent="Congratulations! you got it right";
        paraele.style.backgroundColor="green";
    }
    else if(diff>=10){
        paraele.textContent="too hight! Try again";
        paraele.style.backgroundColor="grey";
    }
    else if(diff<10 && diff>=0){
        paraele.textContent="high ! you got to near! Try again";
        paraele.style.backgroundColor="blue";
    }
    else if(diff<=-10){
        paraele.textContent="too low! Try again";
        paraele.style.backgroundColor="grey";
    }
    else if(diff>-10 && diff<0){
        paraele.textContent="low! you got to near! Try again";
        paraele.style.backgroundColor="blue";
    }
    else{
        paraele.textContent="please enter valid output";
        paraele.style.backgroundColor="red";
    }
}
function tryagain(){
    paraele.textContent="";
    inputele.value="";
}