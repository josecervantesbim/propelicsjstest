/*
*  PROPELICS JS TEST by jfcervantes.moreno@gmail.com
*  March 13 2017
*  For a test of specific problem please select the number of the problem to require the apropiate input.
*/


/*
Write a function that computes the list of the first 100 Fibonacci numbers.

Fibonnacci succession being defined as k subindex n= k subindex n-1+k subindex n-2
*/
function sumaFibonacci(valorSucesion)
{
var k=new Array;
k[0]=0;
k[1]=1;


for(i=0; i<valorSucesion;i++){
	if(valorSucesion==1) //Excepcion de condicion inicial k=1
			{
			
			console.log("Fibonacci"+valorSucesion+"="+k[0]);
			document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+"Fibonacci1"+k[0]+"<br>";
		}

	if(valorSucesion==2) //Excepcion de condicion inicial k=2
		{
			if(i==1){
			console.log("Fibonacci"+(valorSucesion-1)+"="+k[0]);
			console.log("Fibonacci"+valorSucesion+"="+k[1]);			
			
			document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+"Fibonacci1="+k[0]+"<br>";
			document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+"Fibonacci2="+k[1]+"<br>";
			}
		}

		
	
	if(valorSucesion>=3)
	{
	
		
		if(i==1)
		{
			console.log("Fibonacci1="+k[0]);
			console.log("Fibonacci2="+k[1]);						
			
			document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+"Fibonacci1="+k[0]+"<br>";
			document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+"Fibonacci2="+k[1]+"<br>";
		}

		else if(i>1){
		k[i]=k[i-1]+k[i-2];
		console.log("Fibonacci"+(i+1)+"="+k[i]);	
		document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+"Fibonacci"+(i+1)+"="+k[i]+"<br>";
		}
	}
	
	}

}

