let slides = document.querySelectorAll(".slide");
let counter = 0;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
slides.forEach((slide,index)=>{
   slide.style.left = `${index*100}%`;
})
prev.addEventListener("click",()=>{
    counter--;
    slideImg();
    
});
next.addEventListener("click",()=>{
   counter++;
   if(counter>slides.length-1){
    counter = 0;
}
   slideImg();
});

let slideImg=()=>{
    slides.forEach((slide) =>{

        
        slide.style.transform = `translateX(-${counter*100}%)`
        
    })
}
