/*const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
*/
setInterval(() => {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hour = time.getHours() % 12;

  document.querySelector(".second-hand").style.transform = `rotate( ${
    seconds * 6 + 90
  }deg)`;

  document.querySelector(".min-hand").style.transform = `rotate( ${
    minutes * 6 + 90
  }deg)
  `;

  document.querySelector(".hour-hand").style.transform = `rotate( ${
    hour * 30 + 90
  }deg)
  `;
}, 1000);
