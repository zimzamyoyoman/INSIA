// VANT 
VANTA.WAVES({
  el: "#vant-background",
  color: 0x262e34
})

// TYPING TEXT 

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 75;
var featureSpeed = 15;
var vantSub = document.querySelector('#vant-subtitle');
var vantFeature = document.querySelector('.vant-feature');
var delay = vantSub.innerHTML.length * speed + speed;

// type affect to header
typeEffect(vantSub, speed);

// type effect for feature 1
setTimeout(function () {
  vantFeature.style.display = "inline-block";
  typeEffect(vantFeature, featureSpeed);
}, delay);



