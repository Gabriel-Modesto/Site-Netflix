
let ico1 = document.getElementById("menu-ico-1")
let ico2 = document.getElementById("menu-ico-2")
let ico3 = document.getElementById("menu-ico-3")
let ico4 = document.getElementById("menu-ico-4")
let ico5 = document.getElementById("menu-ico-5")
let ico6 = document.getElementById("menu-ico-6")
let ico7 = document.getElementById("menu-ico-7")

let descricao1 = document.querySelector(".desc-1");
let descricao2 = document.querySelector(".desc-2");
let descricao3 = document.querySelector(".desc-3");
let descricao4 = document.querySelector(".desc-4");
let descricao5 = document.querySelector(".desc-5");
let descricao6 = document.querySelector(".desc-6");
let descricao7 = document.querySelector(".desc-7");

let btn1 = document.getElementById("botao-pergunta-1");
let btn2 = document.getElementById("botao-pergunta-2");
let btn3 = document.getElementById("botao-pergunta-3");
let btn4 = document.getElementById("botao-pergunta-4");
let btn5 = document.getElementById("botao-pergunta-5");
let btn6 = document.getElementById("botao-pergunta-6");
let btn7 = document.getElementById("botao-pergunta-7");

btn1.addEventListener("click", botao1);
btn2.addEventListener("click", botao2);
btn3.addEventListener("click", botao3);
btn4.addEventListener("click", botao4);
btn5.addEventListener("click", botao5);
btn6.addEventListener("click", botao6);
btn7.addEventListener("click", botao7);

function botao1(){
    if(descricao1.style.display === 'block' ){
        descricao1.style.display = 'none';
    }else{
        descricao1.style.display = 'block';
    }
};

function botao2(){
    if(descricao2.style.display === 'block'){
        descricao2.style.display = 'none';
    }else{
        descricao2.style.display = 'block';
    }
};
function botao3(){
    if(descricao3.style.display === 'block' ){
        descricao3.style.display = 'none';
    }else{
        descricao3.style.display = 'block';
    }
};

function botao4(){
    if(descricao4.style.display === 'block'){
        descricao4.style.display = 'none';
    }else{
        descricao4.style.display = 'block';
    }
};
function botao5(){
    if(descricao5.style.display === 'block' ){
        descricao5.style.display = 'none';
    }else{
        descricao5.style.display = 'block';
    }
};

function botao6(){
    if(descricao6.style.display === 'block'){
        descricao6.style.display = 'none';
    }else{
        descricao6.style.display = 'block';
    }
};


function botao7(){
    if(descricao7.style.display === 'block'){
        descricao7.style.display = 'none';
    }else{
        descricao7.style.display = 'block';
    }
}



btn1.onclick = () =>{
    ico1.classList.toggle("bx-x")
}
btn2.onclick = () =>{
    ico2.classList.toggle("bx-x")
}
btn3.onclick = () =>{
    ico3.classList.toggle("bx-x")
}
btn4.onclick = () =>{
    ico4.classList.toggle("bx-x")
}
btn5.onclick = () =>{
    ico5.classList.toggle("bx-x")
}
btn6.onclick = () =>{
    ico6.classList.toggle("bx-x")
}
btn7.onclick = () =>{
    ico7.classList.toggle("bx-x")
}





