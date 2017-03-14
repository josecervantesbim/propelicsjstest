/*
*  PROPELICS JS TEST by jfcervantes.moreno@gmail.com
*  March 13 2017
*  For a test of specific problem please select the number of the problem to require the apropiate input.
*/


/*
Write a function that computes
4* k=1 to k=1000000 where 4*(((-1) ^ k+1)/2k-1)

*/
function calcularFuncion(valor)
{
var acumuladoResultado=0.00000000000000001*10/10;
acumuladoResultado=acumuladoResultado-0.00000000000000001;
console.log("valorinicial"+parseFloat(acumuladoResultado));
for(i=1;i<=valor;i++)
{
	acumuladoResultado=acumuladoResultado+Math.pow(-1,i+1)/((i*2)-1);
		if(i==valor)
				{
			document.getElementById("resultado").innerHTML=parseFloat(4*acumuladoResultado);	
			// WTF!! El resultado parece PI
				}	

}

}

