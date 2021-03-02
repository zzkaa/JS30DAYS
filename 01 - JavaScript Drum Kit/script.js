/*window.addEventListener("keydown", function (e) {
  const audio = document.querySelectorAll("audio");
  if (audio.dataset.key === e.keyCode) play(audio);
});
consol
*/
window.addEventListener("keydown", function (e) {
  document.querySelectorAll(".key").forEach(function (k) {
    if (Number(k.dataset.key) === e.keyCode) k.classList.add("playing");
  });

  document.querySelectorAll("audio").forEach(function (a) {
    if (Number(a.dataset.key) === e.keyCode) {
      a.currentTime = 0;
      a.play();
    }
  });
});

window.addEventListener("transitionend", function (e) {
  document.querySelectorAll(".key").forEach(function (k) {
    if (Number(k.dataset.key) !== e.keyCode) k.classList.remove("playing");
  });
});
