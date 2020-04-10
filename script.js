const carouselSlide = document.querySelector('carousel-slide');
const carouselImages = document.querySelectorAll('carousel-slide');

//buttons
const prevBtn =document.querySelector('#prevBtn');
const nextBtn =document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

//button listeners
// if (counter >= carouselImages.length -1) return;
// nextBtn.addEventListener('click',function(){
//    carouselSlide.style.transition = "transform 0.4s ease-in-out"
//    counter++;
//    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
//    console.log("HELLO");
// });

// prevBtn.addEventListener('click',function(){
//     if (counter <= 0) return;
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
//     counter--;
//     carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
//  });

//  carouselSlide.addEventListener('transitionend', function(){
//      if (carouselImages[couter].id === 'lastClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
//      }
//      if (carouselImages[couter].id === 'firstClone'){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
//      }
//  });