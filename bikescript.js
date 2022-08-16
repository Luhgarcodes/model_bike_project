let bikes = document.querySelectorAll(".bikess");
let big = document.querySelector('.bigbiker');
const bg=document.querySelector('.container');
const path = document.querySelector('.path');

bikes.forEach(bike =>{ 
    bike.addEventListener("click", ()=>{
        big.src = bike.src;
        if(bike.id == "bike1"){
            bg.style.background ="linear-gradient(to right ,green,orange)";
            path.style.background = "white";
        } 
        else if(bike.id == "bike2"){
            bg.style.background ="linear-gradient(to left ,grey,gold)";
            path.style.background = "white";
        }        
        else if(bike.id == "bike3"){
            bg.style.background ="linear-gradient(to ,gold,white)";
            path.style.background = "white";
        } 
    })
});