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

const PRECISION = 6;

function formatResult(n){
    if (typeof n !== 'number' || !isFinite(n)) return 'Error';
    if (Number.isInteger(n)) return n.toString();
    // toFixed then parseFloat removes trailing zeros, keeps PRECISION decimals max
    return parseFloat(n.toFixed(PRECISION)).toString();
}

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
        const res = Number(result.textContent) / 100;
        result.textContent = formatResult(res);
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
        let res;
        switch(op){
            case '+':
                res = Number(num1)+Number(num2);
                break;
            case '-':
                res = Number(num1)-Number(num2);
                break;
            case '*':
                res = Number(num1)*Number(num2);
                break;
            case '/':
                if(Number(num2)===0){
                    result.textContent='Error';
                    num1='';
                    num2='';
                    op='';
                    return;
                } else {
                    res = Number(num1)/Number(num2);
                }
                break;
            case '^':
                res = Math.pow(Number(num1), Number(num2));
                break;
        }
        result.textContent = formatResult(res);
        num1='';
        num2='';
        op='';
    }
})