//nav bar mobile:
const hamBtn = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click",(e)=>{
    hamBtn.classList.toggle("closed");
    if(hamBtn.classList.contains("closed")){
        open.classList.remove("hide-mobile");
        close.classList.add("hide-mobile");
        nav.classList.toggle("hide-mobile");
    }else{
        open.classList.add("hide-mobile");
        close.classList.remove("hide-mobile");
        nav.classList.toggle("hide-mobile");
    }
})
// the slider: 
const slideRight = document.querySelector(".right");
const slideLeft = document.querySelector(".left");
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".sec3--card");
const dots = document.querySelectorAll(".dot");
const dotsSet = document.querySelector(".dots");
let index = 1;

slideRight.addEventListener("click",(e)=>{
    if(index < 4){
        let cardWidth = slider.getBoundingClientRect().width;
        cards.forEach((card)=>{
            card.style.transform = `translateX(${-cardWidth*index}px)`;
        });
        dots.forEach((dot,ind)=>{
            if(ind != index){
                dot.classList.remove("selected");
            }else{
                dot.classList.add("selected");
            }
        })
        index++;
    }
});
slideLeft.addEventListener("click",(e)=>{
    if(index>1){
        index--;
        let cardWidth = slider.getBoundingClientRect().width;
        cards.forEach((card)=>{
            card.style.transform = `translateX(${-cardWidth*(index-1)}px)`;
        });
        dots.forEach((dot,ind)=>{
            if(ind != index-1){
                dot.classList.remove("selected");
            }else{
                dot.classList.add("selected");
            }
        })
    }
});
dots.forEach((dot,ind)=>{
    dot.addEventListener("click",(e)=>{
        index = ind+1;
        let cardWidth = slider.getBoundingClientRect().width;
        cards.forEach((card)=>{
            card.style.transform = `translateX(${-cardWidth*(index-1)}px)`;
        });
        dots.forEach((ele)=>{
            ele.classList.remove("selected");
        });
        dot.classList.add("selected");
    })
});