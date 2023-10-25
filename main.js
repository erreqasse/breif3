let pl = document.getElementById("pl");
let inc = document.getElementById("inc");
let con = document.getElementById("number");
let total = document.querySelector("#total");
let tot = document.getElementById("tot");
let pl1 = document.getElementById("pl1");
let inc1 = document.getElementById("inc1");
let con1 = document.getElementById("number1");
let total1 = document.querySelector("#total1");
let pl2 = document.getElementById("pl2");
let inc2 = document.getElementById("inc2");
let con2 = document.getElementById("number2");
let total2 = document.querySelector("#total2");
let number4 = 0;
pl.addEventListener("click",function(){
    con.value++;
    total.textContent = 20 * con.value ;
    number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
    console.log(this.textContent)
    console.log(number4);
})
inc.addEventListener("click",function(){
    con.value--;
    total.textContent = 20 * con.value 
    number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
})
con.addEventListener("input", function(){
    total.textContent = 20 * con.value
     number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
}) 

pl1.addEventListener("click",function(){
    con1.value++;
    total1.textContent = 20 * con1.value 
    number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
})
inc1.addEventListener("click",function(){
    con1.value--;
    total1.textContent = 20 * con1.value 
     number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
})
con1.addEventListener("input", function(){
    total1.textContent = 20 * con1.value
     number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
}) 

pl2.addEventListener("click",function(){
    con2.value++;
    total2.textContent = 20 * con2.value
     number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
    
})
inc2.addEventListener("click",function(){
    con2.value--;
    total2.textContent = 20 * con2.value
    number4 = +total.textContent + +total1.textContent + +total2.textContent
    tot.textContent = number4;
})
con2.addEventListener("input", function(){
    total2.textContent = 20 * con2.value
    number4 = +total.textContent + +total1.textContent + +total2.textContent;
    tot.textContent = number4;
    console.log(number4);
})


