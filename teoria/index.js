console.log("Hola Mundo");
var variable=true;
console.log(variable);
const constante=5
console.log(constante);
variable=false
console.log(variable)
// constante=6
// console.log(constante)
var numero1=5
var numero2=6
var respuesta=numero1+numero2
console.log("la respuesta es:" + respuesta)
var respuesta= Math.pow(numero1,numero2)
console.log("la respuesta es:" + respuesta)
var respuesta= Math.pow(numero1,4)-(numero1/numero2+45)
console.log("la respuesta es:" + respuesta)
var respuesta= numero1==numero2
console.log("la respuesta es:" + respuesta)

//operadores de asignacion
var a=1
a+=5
// a-=5
// a**=2
console.log(a)

// condicional IF

var numero=8
if (numero==7)
{
    console.log("si es 7")
}
else if(numero==8)
{
    console.log("es igual a 8")
}
else
{
    console.log("no lo es")
}

var numero0=8
if (numero0%2==0)
{
    console.log("es numero par")
}
else
{
    console.log("es numero impar")
}

//bucles
var i=0
while (i<10)
{   
    console.log(i)
    i+=1 
}

for(var j=0;j<10;j+=1)
{
    console.log(j)
}

//funciones
function cafetera(ingrediente1,ingrediente2)
{
    if(ingrediente1=="leche" && ingrediente2=="cafe") 
    {
        return
    }
}


