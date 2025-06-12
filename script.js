let buttons=document.querySelectorAll(".buttons");
let result=document.querySelector(".result");
// result.textContent="ok";
buttons.forEach(btn=>{
    btn.addEventListener("click",e=>result.textContent+=btn.textContent);
})