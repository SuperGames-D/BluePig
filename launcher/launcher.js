function download() {
version = document.getElementById("version").value
if (version == "1_2") {
window.location.href = "https://github.com/SuperGames-D/BluePig/raw/main/BluePig.zip"
document.getElementById("message").innerHTML = "Your download is starting..."
document.getElementById("message").style = "font-size: 20px;"
}
if (version == "1_0") {
window.location.href = "https://github.com/SuperGames-D/BluePig/raw/main/1.0/BluePig.zip"
document.getElementById("message").innerHTML = "Your download is starting..."
document.getElementById("message").style = "font-size: 20px;"
}
if (version == "1_1") {
window.location.href = "https://github.com/SuperGames-D/BluePig/raw/main/1.1/BluePig.zip"
document.getElementById("message").innerHTML = "Your download is starting..."
document.getElementById("message").style = "font-size: 20px;"
}
if (version == "none") {
document.getElementById("message").innerHTML = "Please select a version"
document.getElementById("message").style = "font-size: 20px; color: red;"
}
  if (version == "web") {
    window.location.href = "https://supergames-d.itch.io/blue-pig"
document.getElementById("message").innerHTML = "Redirecting to page..."
document.getElementById("message").style = "font-size: 20px;"
  }
}


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
