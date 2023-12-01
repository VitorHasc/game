function jogar (){


var mario1 = document.getElementById('mario');
mario1.play();
var punch = document.getElementById('soco');
var punch2 = document.getElementById('soco3');
var punch3 = document.getElementById('soco2');
var punch1 = document.getElementById('soco2');
var punch4 = document.getElementById('soco3');
var punch5 = document.getElementById('soco');

var sumir = document.getElementById('botao');
sumir.style.display = 'none';

var pont = 0;

document.getElementById('popo').innerHTML = "0";

var randomt = 0;    

var random = 0;
var ap2 = document.getElementById('top1');

function toupeirappear() {
    if (segundoscont == 0)
    {
        clearInterval(intervalob);
    }
    random = Math.floor(Math.random() *6) +1; //2
    if (random == randomt) 
    {
        random = Math.floor(Math.random() *6) +1;
    }
    if (random == randomt)
    {
        random = Math.floor(Math.random() *6) +1;
    }
    if (random == randomt)
    {
        random = Math.floor(Math.random() *6) +1;
    }
    if (random == randomt)
    {
        random = Math.floor(Math.random() *6) +1;
    }
    randomt = random; //2 //2
    console.log(random);
    if (random == 1)
    {
        var ap = document.getElementById('top1');
        var ap2 = document.getElementById('top1');
        ap.style.display = 'block';
        var intervalo1 = 1200;
        var intervalo2 = setInterval(desaparecer, intervalo1);
        function desaparecer(){
            ap2.style.display = 'none';
            console.log("ativei");
            clearInterval(desaparecer);
            clearInterval(intervalo1);
            clearInterval(intervalo2);
        }
    }
    else if (random == 2)
    {
        var ap = document.getElementById('top2');
        var ap2 = document.getElementById('top2');
        ap.style.display = 'block';
        var intervalo1 = 1200;
        var intervalo2 = setInterval(desaparecer, intervalo1);
        function desaparecer(){
            ap2.style.display = 'none';
            console.log("ativei");
            clearInterval(desaparecer);
            clearInterval(intervalo1);
            clearInterval(intervalo2);
        }
    }
    else if (random == 3)
    {
        var ap = document.getElementById('top3');
        var ap2 = document.getElementById('top3');
        ap.style.display = 'block';
        var intervalo1 = 1200;
        var intervalo2 = setInterval(desaparecer, intervalo1);
        function desaparecer(){
            ap2.style.display = 'none';
            console.log("ativei");
            clearInterval(desaparecer);
            clearInterval(intervalo1);
            clearInterval(intervalo2);
        }
    }
    else if (random == 4)
    {
        var ap = document.getElementById('top4');
        var ap2 = document.getElementById('top4');
        ap.style.display = 'block';
        var intervalo1 = 1200;
        var intervalo2 = setInterval(desaparecer, intervalo1);
        function desaparecer(){
            ap2.style.display = 'none';
            console.log("ativei");
            clearInterval(desaparecer);
            clearInterval(intervalo1);
            clearInterval(intervalo2);
        }
    }
    else if (random == 5)
    {
        var ap = document.getElementById('top5');
        var ap2 = document.getElementById('top5');
        ap.style.display = 'block';
        var intervalo1 = 1200;
        var intervalo2 = setInterval(desaparecer, intervalo1);
        function desaparecer(){
            ap2.style.display = 'none';
            console.log("ativei");
            clearInterval(desaparecer);
            clearInterval(intervalo1);
            clearInterval(intervalo2);
        }
    }
    else if (random == 6)
    {
        var ap = document.getElementById('top6');
        var ap2 = document.getElementById('top6');
        ap.style.display = 'block';
        var intervalo1 = 1200;
        var intervalo2 = setInterval(desaparecer, intervalo1);
        function desaparecer(){
            ap2.style.display = 'none';
            console.log("ativei");
            clearInterval(desaparecer);
            clearInterval(intervalo1);
            clearInterval(intervalo2);
        }
    }
    
}

function click1(){
    var dip = document.getElementById('top1');
    dip.style.display = "none";
    pont=pont+1;
    document.getElementById('popo').innerHTML = pont;
    punch1.play();
}
function click2(){
    var dip = document.getElementById('top2');
    dip.style.display = "none";
    pont++;
    document.getElementById('popo').innerHTML = pont;
    punch.play();
}
function click3(){
    var dip = document.getElementById('top3');
    dip.style.display = "none";
    pont++;
    document.getElementById('popo').innerHTML = pont;
    punch3.play();
}
function click4(){
    var dip = document.getElementById('top4');
    dip.style.display = "none";
    pont++;
    document.getElementById('popo').innerHTML = pont;
    punch4.play();
}
function click5(){
    var dip = document.getElementById('top5');
    dip.style.display = "none";
    pont++;
    document.getElementById('popo').innerHTML = pont;
    punch2.play();
}
function click6(){
    var dip = document.getElementById('top6');
    dip.style.display = "none";
    pont++;
    document.getElementById('popo').innerHTML = pont;
    punch5.play();
}

var intervaloc = 1000;
var intervalod = setInterval(tempo, intervaloc);

segundoscont=59;

function tempo(){
    segundoscont--;
    var segundos = document.getElementById('timer').innerHTML = segundoscont;
    if (segundoscont==0)
    {
        sumir.style.display = 'block';
        clearInterval(intervalod);
        ap2.style.display = 'none';
    }
}

var intervaloa = 800;
var intervalob = setInterval(toupeirappear, intervaloa);
window.click1 = click1;
window.click2 = click2;
window.click3 = click3;
window.click4 = click4;
window.click5 = click5;
window.click6 = click6; 
}  