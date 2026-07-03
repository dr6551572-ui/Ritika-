window.onload=()=>{

setTimeout(()=>{

document.getElementById("intro").style.display="none";

},2500);

}

// Music

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

playing=true;

}else{

music.pause();

playing=false;

}

}

// Surprise

document.getElementById("surpriseBtn").onclick=()=>{

document.getElementById("finalMessage").style.display="block";

document.getElementById("finalMessage").scrollIntoView({

behavior:"smooth"

});

}

const envelope=document.getElementById("envelope");

envelope.onclick=()=>{

envelope.classList.toggle("open");

}

const photos=[
"images/R_1.jpeg",
"images/R_2.jpeg",
"images/R_3.jpeg",
"images/R_4.jpeg"
];

let current=0;

setInterval(()=>{

current++;

if(current>=photos.length){

current=0;

}

document.querySelector(".hero").style.backgroundImage=`url('${photos[current]}')`;

},4000);
