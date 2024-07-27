const yesbtn = document.getElementById("yes");

yesbtn.addEventListener("click", () => {
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "flex";
});
