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
  var typed = new Typed('#typed', {
    strings:
      [
        "Contracted vs non contracted spend distribution across category level 1.",
        "Sales trend for last 3 years in India geography.",
        "Top 5 campaigns this year by revenue uplift.",
        "Best performing medical representatives by call commitments and physician coverage.",
        "What is top of the mind awareness for Brand XYZ.",
        "Which is the most selling category for stores near Central business district.",
        "Average delay in cycle time for PR approval across categories.",
        "Customer Delinquency by 30- 60 days and 60-90 days and 90 + days.",
      ],
    typeSpeed: 30,
    startDelay: 1200,
    backSpeed: 20,
    backDelay: 500,
    loop: true,
    loopCount: false,
    showCursor: false,
    cursorChar: "|",
  });
}, delay);

// typed.js

