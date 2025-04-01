var main = document.querySelector(".main a div img");
var box1 = document.querySelector(".box1");
var first = document.querySelector(".first");
var thumbnailHeadings = document.querySelectorAll(".thumbnail h1"); 
var thumbnail = document.querySelector(".thumbnail");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");


var boxes = document.querySelectorAll(".box1, .box2, .box3, .box4");

var images = document.querySelectorAll(".first, .second, .third, .fourth");

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    
    images.forEach((img) => {
      if (img !== image) {
       
        img.src = "images/overlay2.png";
      }
    });
  });
  image.addEventListener("mouseleave", () => {
    
    images.forEach((img) => {
      if (img.classList.contains("first")) {
        img.src = "images/bigger-science_thumbnail-2.png"; 
      } else if (img.classList.contains("second")) {
        img.src = "images/Capture-dâeÌcran-2023-04-03-aÌ-10.59.43_2-2.jpg"; 
      } else if (img.classList.contains("third")) {
        img.src = "images/Capture daÌeIÌcran 2024-01-04 aIÌ 16.41.06-2.png"; 
      } else if (img.classList.contains("fourth")) {
        img.src = "images/map-interactive.png"; 
      }
    });
  });
});



images.forEach((image)=>{
  image.addEventListener("mouseenter", () => {
    thumbnailHeadings.forEach((heading) => {
      heading.style.fontFamily = '"Londrina Sketch", sans-serif';
      heading.style.color = "rgb(102, 98, 98)";
    });
    thumbnail.style.zIndex = "0"; 

  });


})







box1.addEventListener("mousemove", (dets) => {
  var boxRect = box1.getBoundingClientRect(); 
  var x = dets.clientX - boxRect.left; 
  var y = dets.clientY - boxRect.top;  


  var constrainedX = Math.max(0, Math.min(x, boxRect.width));
  var constrainedY = Math.max(0, Math.min(y, boxRect.height));

  gsap.to(first, {
    x: constrainedX - first.offsetWidth / 2, // Center the element
    y: constrainedY - first.offsetHeight / 2,
    duration: 0.9,
    ease: "power2.out",
  });
});


box2.addEventListener("mousemove", (dets) => {
  var boxRect = box2.getBoundingClientRect();
  var x = dets.clientX - boxRect.left;
  var y = dets.clientY - boxRect.top;

  var constrainedX = Math.max(0, Math.min(x, boxRect.width));
  var constrainedY = Math.max(0, Math.min(y, boxRect.height));

  gsap.to(second, {
    x: constrainedX - second.offsetWidth / 2,
    y: constrainedY - second.offsetHeight / 2,
    duration: 0.5,
    ease: "power2.out",
  });
});


box3.addEventListener("mousemove", (dets) => {
  var boxRect = box3.getBoundingClientRect();
  var x = dets.clientX - boxRect.left;
  var y = dets.clientY - boxRect.top;

  var constrainedX = Math.max(0, Math.min(x, boxRect.width));
  var constrainedY = Math.max(0, Math.min(y, boxRect.height));

  gsap.to(third, {
    x: constrainedX - third.offsetWidth / 2,
    y: constrainedY - third.offsetHeight / 2,
    duration: 0.5,
    ease: "power2.out",
  });
});


box4.addEventListener("mousemove", (dets) => {
  var boxRect = box4.getBoundingClientRect();
  var x = dets.clientX - boxRect.left;
  var y = dets.clientY - boxRect.top;

  var constrainedX = Math.max(0, Math.min(x, boxRect.width));
  var constrainedY = Math.max(0, Math.min(y, boxRect.height));

  gsap.to(fourth, {
    x: constrainedX - fourth.offsetWidth / 2,
    y: constrainedY - fourth.offsetHeight / 2,
    duration: 0.5,
    ease: "power2.out",
  });
});



boxes.forEach((box)=>{
  box.addEventListener("mouseleave", () => {
    images.forEach((img) => {
      
      gsap.to(img, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      thumbnailHeadings.forEach((heading) => {
        heading.style.fontFamily = '';
        heading.style.color = "";
    
       
      });
      thumbnail.style.zIndex = "1";
      
    })

})
})



gsap.from(thumbnailHeadings, {
  y:80,
  duration:1,
  opacity:0,
  stagger:0.1,
  zIndex:1, 
  
 
});

images.forEach((img)=>{
  gsap.from(img, {
    scale:0,
    duration:1.5,
    opacity:0 , 
  });
})


