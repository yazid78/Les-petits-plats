let effacerinput = document.querySelector(".svgCroix");
effacerinput.style.display = "none";

effacerinput.addEventListener("click", () => {
  inputElement.value = "";
  effacerinput.style.display = "none";
  genererEtAfficherRecettes();
});

inputElement.addEventListener("input", () => {
  effacerinput.style.display = "block";
});
