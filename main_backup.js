import {
  Application
} from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);


const hint = document.getElementById('hints');

const onInteract = () => {
  canvas.removeEventListener('pointerdown', onInteract);
  canvas.removeEventListener('pointerup', onInteract);
  hint.style.display = 'none';
};

const onLoad = () => {
  hint.style.display = 'flex';
  canvas.addEventListener('pointerdown', onInteract);
  canvas.addEventListener('pointerup', onInteract);
  preloader.style.display = 'none';
};
const preloader = document.getElementById('preloader');

//app.load("https://prod.spline.design/fM5twUKh8-wZkURa/scene.splinecode  ./scene1.splinecode");
app.load('./scene1.splinecode', {
  credentials: 'include',
  mode: 'no-cors',
}).then(onLoad);

var auctionBtn = document.querySelector(".auction-btn");
var countDownDate = new Date("April 15, 2023 20:00:00").getTime();


auctionBtn.innerHTML = "Peeling Peaches...";
auctionBtn.disabled = true;
//var timeLeft = 7;

var auctionTimer = setInterval(function () {

  //timeLeft -= 1;
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  auctionBtn.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";

  if (distance <= 0) {
    auctionBtn.removeAttribute('disabled');
    clearInterval(auctionTimer);
    auctionBtn.innerHTML = "Live bid: 0.2569Ξ";
    auctionBtn.href = "./peach1.html";
  }
}, 1000);
//});