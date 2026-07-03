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
"R_1.jpeg",
"R_2.jpeg",
"R_3.jpeg",
"R_4.jpeg"
];

let current = 0;

setInterval(() => {
    // 1. Pehle current number waali photo screen par dikhao
    document.querySelector(".hero").style.backgroundImage = `url('${photos[current]}')`;
    
    // 2. Ab agli photo ke liye number ko 1 badhao
    current++;
    
    // 3. Agar number 4 (photos.length) ho jaye, toh wapas 0 kar do
    if (current >= photos.length) {
        current = 0;
    }
}, 4000);

