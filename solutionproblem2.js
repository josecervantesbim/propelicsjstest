/*
*  PROPELICS JS TEST by jfcervantes.moreno@gmail.com
*  March 13 2017
*  For a test of specific problem please select the number of the problem to require the apropiate input.
*/


/*
Write a function such that if an element in an MxN matrix is 0 , its entire row and column are set to 0 and then printed
out.
// Original input
[
[1, 2, 3],
[4, 0, 6],
[7, 8, 9]
]
// Result
[
[1, 0, 3],
[0, 0, 0],
[7, 0, 9]
]
*/
function matrizCruzCero(matriz)
{
var cuentaCeros=0;
var guardaIndicesX=new Array;
var guardaIndicesY=new Array;

//Primero recorremos la matriz buscando todos los ceros y su ubicación
for(i=0;i<matriz.length;i++)
	{
		for (j=0;j<matriz[i].length;j++)
		{
		
		if(matriz[i][j]==0)
			{
				cuentaCeros=cuentaCeros+1;
				guardaIndicesX.push(i);
				guardaIndicesY.push(j);
				console.log(i+","+j+" cuentaActual="+cuentaCeros);
			}
		}
	}

//Convertimos los elementos de la posicion en ceros
for(k=0;k<cuentaCeros;k++)
	{
	for(i=0;i<matriz.length;i++)
		{
			for(j=0;j<matriz[i].length;j++)
			{
				if(guardaIndicesX[k]==i)
				{
					matriz[i][j]=0;
				}
				if(guardaIndicesY[k]==j)
				{
					matriz[i][j]=0;
				}
			}
		}
	}
	
//Mostramos el resultado en consola y pantalla
for (i=0;i<matriz.length;i++)
		{
	console.log(matriz[i]);
	document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+matriz[i]+"<br>";
		}	

}

