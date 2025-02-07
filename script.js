const buttonextension=document.getElementById("button-extension")
const image=document.getElementById("image-extension1")
const image1=document.getElementById("extension1")
const image2=document.getElementById("extension2")
const imageboard=document.getElementById("extension-board")
let timeout=0;
buttonextension.addEventListener("mouseenter",()=>{
    timeout=setTimeout(()=>{
        image.style.display="block";
    },1000)
    image1.style.display="none";
    image2.style.display="block";
});
buttonextension.addEventListener("mouseleave",()=>{
    clearTimeout(timeout)
    image.style.display="none";
    image1.style.display="block";
    image2.style.display="none";
});
let click=0;
buttonextension.addEventListener("click",()=>{
    if (click==0){
        image1.style.display="none";
        image2.style.display="block";
        imageboard.style.display="block";
        click=click+1;
    }
    else{
        click=0;
        image1.style.display="block";
        image2.style.display="none";
        imageboard.style.display="none";
    }
});
let button_face=0
const faceshow=document.getElementById("faceshow")
const buttonface=document.getElementById("button_face1")
buttonface.addEventListener("mouseenter",()=>{
    button_face=setTimeout(()=>{
    faceshow.style.display="block";
    },1000)
});
buttonface.addEventListener("mouseleave",()=>{
    clearTimeout(button_face)
    faceshow.style.display="none";
});
const addtabbutton=document.getElementById("addtabbutton")
const addtab1=document.get