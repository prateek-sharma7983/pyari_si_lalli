// function startSurprise(){
//   document.getElementById("page1").classList.add("hidden");
//   document.getElementById("page2").classList.remove("hidden");


//   document.getElementById("bgMusic").play();
// }

// function showThanks(){
//   document.getElementById("thanks").classList.remove("hidden");
// }


// ---------- Surprise Logic ----------



// ---------- Page & Music ----------
function startSurprise(){
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");

  document.getElementById("bgMusic").play().catch(()=>{});
}

function showThanks(){
  document.getElementById("thanks").classList.remove("hidden");
}

// ---------- EmailJS (NO DESIGN CHANGE) ----------
document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("6il8QkWv3NipOMSPo");

  const sendBtn = document.getElementById("sendWish");
  const msgBox = document.getElementById("wishMessage");

  // Agar HTML me ye elements already hain
  if(!sendBtn || !msgBox){
    console.log("Message elements HTML me nahi mile");
    return;
  }

  sendBtn.addEventListener("click", function () {

    const message = msgBox.value;

    if(message.trim() === ""){
      alert("Please message likho 🙂");
      return;
    }

    emailjs.send("service_4xfaqz7", "template_s7r8k8l", {
      message: message
    })
    .then(() => {
      alert("Message aa gaya ❤️");
      msgBox.value = "";
    })
    .catch((err) => {
      alert("Message nahi gaya ❌");
      console.log(err);
    });

  });
});
