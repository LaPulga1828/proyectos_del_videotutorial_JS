//ELEMENTOS BASICOS

console.log("Hola Mundo");
// var variable=true;
// console.log(variable);
// const constante=5
// console.log(constante);
// variable=false
// console.log(variable)
// // constante=6
// // console.log(constante)
// var numero1=5
// var numero2=6
// var respuesta=numero1+numero2
// console.log("la respuesta es:" + respuesta)
// var respuesta= Math.pow(numero1,numero2)
// console.log("la respuesta es:" + respuesta)
// var respuesta= Math.pow(numero1,4)-(numero1/numero2+45)
// console.log("la respuesta es:" + respuesta)
// var respuesta= numero1==numero2
// console.log("la respuesta es:" + respuesta)


//OPERADORES DE ASIGNACION

// var a=1
// a+=5
// // a-=5
// // a**=2
// console.log(a)


// CONDICIONAL IF

// var numero=8
// if (numero==7)
// {
//     console.log("si es 7")
// }
// else if(numero==8)
// {
//     console.log("es igual a 8")
// }
// else
// {
//     console.log("no lo es")
// }

// var numero0=8
// if (numero0%2==0)
// {
//     console.log("es numero par")
// }
// else
// {
//     console.log("es numero impar")
// }


//BUCLES

// var i=0
// while (i<10)
// {   
//     console.log(i)
//     i+=1 
// }

// for(var j=0;j<10;j+=1)
// {
//     console.log(j)
// }


//FUNCIONES

// let resultado="capuchino"
// function cafetera(ingrediente1)
// {
//     if(ingrediente1=="leche") 
//     {
//         let resultado="otra cosa"
//         return resultado;
//     }
// }
// var tasa = cafetera("leche");
// console.log(tasa);


//DOC

// const txtn1=document.getElementById("n1")
// const txtn2=document.getElementById("n2")
// const respuesta1=document.getElementById("resp1")
// const btncalcular=document.getElementById("calcular1")
// btncalcular.addEventListener('click',calcular1)
// function calcular1(){
//     const op1= parseFloat(txtn1.value) 
//     const op2= parseFloat(txtn2.value) 
//     let resp=op1+op2
//     respuesta1.innertext=resp
//     respuesta1.style="color:purple"
// }


//Arrays

// const respuesta2=document.getElementById("resp2")
// const btnejecutar=document.getElementById("ejecuta")
// let frutas =["Manzana", "Banana","mango","fresa","pera"]
// btnejecutar.addEventListener('click',iniciar)
// function iniciar(){
//     frutas.forEach(function(item,index,array){
//         respuesta2.innerText=item;
//     });
    
// };


//JASON

// async function odtenerData(){
//     const response= await fetch("http://127.0.0.1:5500/teoria/data.json")
//     const json= await response.text();
//     console.log(JSON.parse(json))
// }
// odtenerData();