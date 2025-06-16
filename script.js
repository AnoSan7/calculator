let buttons=document.querySelectorAll(".buttons");
let result=document.querySelector(".result");
// result.textContent="ok";
buttons.forEach(btn=>{
    btn.addEventListener("click",e=>result.textContent+=btn.textContent);
})
let op='';
let num1='';
let num2='';
const per=document.querySelector("#per");
const equals=document.querySelector("#equals");
const add=document.querySelector("#add");
const minus=document.querySelector("#minus");
const multiply=document.querySelector("#multiply");
const divide=document.querySelector("#divide");
const expo=document.querySelector("#expo");
const clear=document.querySelector("#clear");
const allClear=document.querySelector("#allClear");

add.addEventListener("click",e=>{
    if(result.textContent!=''){
        num1=result.textContent;
        op='+';
        result.textContent='';
    }
})
allClear.addEventListener("click",e=>{
    result.textContent='';
    num1='';
    num2='';
    op='';
})
per.addEventListener("click",e=>{
    if(result.textContent!=''){
        result.textContent=Number(result.textContent)/100;
    }
})
minus.addEventListener("click",e=>{
    if(result.textContent!=''){
        num1=result.textContent;
        op='-';
        result.textContent='';
    }
})
multiply.addEventListener("click",e=>{
    if(result.textContent!=''){
        num1=result.textContent;
        op='*';
        result.textContent='';
    }
})
divide.addEventListener("click",e=>{
    if(result.textContent!=''){
        num1=result.textContent;
        op='/';
        result.textContent='';
    }
})
expo.addEventListener("click",e=>{
    if(result.textContent!=''){
        num1=result.textContent;
        op='^';
        result.textContent='';
    }
})
clear.addEventListener("click",e=>{
    if(result.textContent!=''){
        result.textContent=result.textContent.slice(0,-1);
    }
})
equals.addEventListener("click",e=>{
    if(result.textContent!='' && num1!=''){
        num2=result.textContent;
        switch(op){
            case '+':
                result.textContent=Number(num1)+Number(num2);
                break;
            case '-':
                result.textContent=Number(num1)-Number(num2);
                break;
            case '*':
                result.textContent=Number(num1)*Number(num2);
                break;
            case '/':
                if(Number(num2)===0){
                    result.textContent='Error';
                }
                else {
                    result.textContent=Number(num1)/Number(num2);
                }
                break;
            case '^':
                result.textContent=Math.pow(Number(num1), Number(num2));
                break;
        }
        num1='';
        num2='';
        op='';
    }
})