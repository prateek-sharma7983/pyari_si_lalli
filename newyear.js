
const music = document.getElementById("bgMusic");
music.volume = 0.4;


function startMagic(){
    
    music.play().catch(()=>{});

    document.getElementById("heartScreen").style.display="none";
    document.getElementById("heartRain").style.display="block";

    createHearts();

    setTimeout(()=>{
        document.getElementById("heartRain").style.display="none";
        const main=document.getElementById("mainPage");
        main.style.display="block";
        setTimeout(()=>main.style.opacity="1",100);
    },3000);

    setTimeout(typeEffect,3200);
}


function createHearts(){
    const c=document.getElementById("heartRain");
    for(let i=0;i<40;i++){
        let h=document.createElement("div");
        h.innerHTML="❤️";
        h.className="floatingHeart";
        h.style.left=Math.random()*100+"vw";
        h.style.animationDuration=(Math.random()*2+2)+"s";
        c.appendChild(h);
        setTimeout(()=>h.remove(),3000);
    }
}


const text=`Muski ❤️

💫✨ E pagali sun… ✨💫
Are sun naa pagali… 💕
🌸 Tu ek nanhi si jaan hai
🌸 Tu hai to sirf ek
💞 Par mera poora jahaan hai
✨ Tu itni khubsurat hai ki
jo dekhte rahe… bas dekhte hi rahe 💫
👑 Tu hai to taj kya
👨‍❤️‍💋‍👨 Tu saath hai to aaj kya
🌟 Tu wo hai
jise duaon me manga jaaye
😘 Tu wo hai
jise ek tarfa bhi chaha jaaye
💝 Tu to duniya me ek pari hai
💓 Teri soorat, teri baatein
aur teri har ek adaa pyari hai
😘 Tu hai to main hoon
✨💖 Bas tu hi kaafi hai… 💖✨

`;

let ti=0;
function typeEffect(){
    if(ti<text.length){
        document.getElementById("typingText").innerHTML+=
        text[ti]==="\n"?"<br>":text[ti];
        ti++;
        setTimeout(typeEffect,40);
    }
}


let sIndex=0;
const slides=document.querySelectorAll(".slide");

function showSlide(i){
    slides.forEach(s=>s.classList.remove("active"));
    slides[i].classList.add("active");
}
function nextSlide(){
    sIndex=(sIndex+1)%slides.length;
    showSlide(sIndex);
}
function prevSlide(){
    sIndex=(sIndex-1+slides.length)%slides.length;
    showSlide(sIndex);
}


function showWish(){
    document.getElementById("videoOverlay").style.display="flex";
    const v=document.querySelectorAll(".vSlide");
    let i=0;
    setInterval(()=>{
        v.forEach(x=>x.classList.remove("active"));
        v[i].classList.add("active");
        i=(i+1)%v.length;
    },700);
}



