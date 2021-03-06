// navigation changes on scrool

window.onscroll = function () {
  scrollFunction();
};
const header = document.getElementById("header");
const headerItems = header.children;

function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   
    header.style.backgroundColor = "white";
    for (var i = 0; i < headerItems.length; i++) {
      headerItems[i].style.color = "black";
      headerItems[i].addEventListener('mouseenter',function(e){
        e.target.style.color = 'rgb(241, 93, 80)';
      })
       headerItems[i].addEventListener("mouseleave", function (e) {
         e.target.style.color = "black";
       });
      
    }
    header.style.color = "black";
  } else {
   
    header.style.backgroundColor = "transparent";
    for (var i = 0; i < headerItems.length; i++) {
      headerItems[i].style.color = "white";
       headerItems[i].addEventListener("mouseenter", function (e) {
         e.target.style.color = "rgb(241, 93, 80)";
       });
       headerItems[i].addEventListener("mouseleave", function (e) {
         e.target.style.color = "white";
       });
    }
  }
}

//intersection observer for left and right paragraphs

const options = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};
const parRight = document.querySelectorAll(".par-right");
const parLeft = document.querySelectorAll(".par-left");

observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "par-right 0.9s";
    } else {
      entry.target.style.animation = "none";
    }
  });
},options);
parRight.forEach((paragraph) => {
  observerRight.observe(paragraph);
});


observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "par-left 0.9s";
    } else {
      entry.target.style.animation = "none";
    }
  });
}, options);
parLeft.forEach((paragraph) => {
  observerLeft.observe(paragraph);
});

//intersection observer for works

const works = document.querySelectorAll(".work-on-scroll");
const optionsWork = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};
observerWork = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("appear");
    } 
  });
}, optionsWork);
works.forEach((work) => {
  observerWork.observe(work);
});







