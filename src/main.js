
//smooth header transition
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    console.log("scrolled")
    document.getElementsByTagName("header")[0].classList.add("bg-light", "backdrop-blur-sm", "shadow-lg");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("bg-light", "backdrop-blur-sm", "shadow-lg");
  }
};


//Functional card/image carousel
  window.addEventListener("load", (event) => {

    var card1 = document.getElementById('card1');
  var card2 = document.getElementById('card2');
  var card3 = document.getElementById('card3');
  var image1 = document.getElementById('img1');
  var image2 = document.getElementById('img2');
  var image3 = document.getElementById('img3');

    card1.onclick= function() {
card1.classList.add("bg-light");
card1.classList.remove("bg-white");
card2.classList.remove("bg-light");
card2.classList.add("bg-white");
card3.classList.remove("bg-light");
card3.classList.add("bg-white");

 image1.style.animation= "load 0.4s ease-in-out 0s";
  image1.style.display = "block";
 
  console.log(image1)
  image2.style.display = "none";
  image3.style.display = "none";
}

    card2.onclick= function() {
card1.classList.remove("bg-light");
card1.classList.add("bg-white");
 card2.classList.add("bg-light");
card2.classList.remove("bg-white");
card3.classList.remove("bg-light");
card3.classList.add("bg-white");

  image1.style.display = "none";
  console.log(image2)
  image2.style.animation= "load 0.4s ease-in-out 0s";
  image2.style.display = "block";
  image3.style.display = "none";
} 

    card3.onclick= function(){
card1.classList.remove("bg-light");
card1.classList.add("bg-white");
card2.classList.remove("bg-light");
card2.classList.add("bg-white");
card3.classList.add("bg-light");

card3.classList.remove("bg-white");
  image1.style.display = "none";
  console.log(image3)
  image2.style.display = "none";
  image3.style.animation= "load 0.4s ease-in-out 0s";
  image3.style.display = "block";
} 
});

function changeImage(imageName) {
  document.getElementById('mainImage').src = `./src/images/${imageName}`;
  const thumbnails = document.getElementsByClassName('thumbnail');
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove('thumbnail-selected');
  }
  document.querySelector(`[onclick="changeImage('${imageName}')"]`).classList.add('thumbnail-selected');
}

window.onload = function() {
  changeImage('quarkgif1.gif');
};

