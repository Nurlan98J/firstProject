let link1 = document.getElementById("first")
let link2 = document.getElementById("second")
let link3 = document.getElementById("third")
let link4 = document.getElementById("last")

let firstP = document.getElementById("firstP")
let secondP = document.getElementById("secondP")
let thirdP = document.getElementById("thirdP")
let lastP = document.getElementById("lastP")


link4.addEventListener("click", ()=>{
    lastP.style.backgroundColor= "pink";
    setTimeout(() => {
        lastP.style.backgroundColor= "rgb(207, 202, 178)";
    }, 1000);
    
    lastP.style.transitionDuration = "2s"
    
    
})

link1.addEventListener("click", ()=>{
    firstP.style.backgroundColor= "pink";
    setTimeout(() => {
        firstP.style.backgroundColor= "rgb(207, 202, 178)";
    }, 1000);
    
    firstP.style.transitionDuration = "2s"
    
    
})

link2.addEventListener("click", ()=>{
    secondP.style.backgroundColor= "pink";
    setTimeout(() => {
        secondP.style.backgroundColor= "rgb(207, 202, 178)";
    }, 1000);
    
    secondP.style.transitionDuration = "2s"
    
    
})

link3.addEventListener("click", ()=>{
    thirdP.style.backgroundColor= "pink";
    setTimeout(() => {
        thirdP.style.backgroundColor= "rgb(207, 202, 178)";
    }, 1000);
    
    thirdP.style.transitionDuration = "2s"
    
    
})

