function startSurprise(){
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");

  // music starts after click
  document.getElementById("bgMusic").play();
}

function showThanks(){
  document.getElementById("thanks").classList.remove("hidden");
}
