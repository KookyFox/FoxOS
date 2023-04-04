function closeWindow(windw) {
  document.getElementById(windw).style.display = "none";
};




document.getElementById("trashcan").addEventListener("dblclick", openWindow("window3"),false);

function openWindow(target){
  document.getElementById(target).style.display = "block";
}
