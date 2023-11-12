document.addEventListener("DOMContentLoaded", function() {
  var getting = getCookie("Termo-aceite-cookie");
  if (getting === 'Aceito') {return null;}
  let alert = document.getElementById('alert-accept-cookie');
  alert.classList.remove('d-none');
  alert.classList.add('d-block');
});
function registraIPCookie() {
  let alert = document.getElementById('alert-accept-cookie');
  alert.classList.remove('d-block');
  alert.classList.add('d-none');
  setCookie("Termo-aceite-cookie", "Aceito", 7);
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}