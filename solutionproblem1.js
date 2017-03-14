/*
*  PROPELICS JS TEST by jfcervantes.moreno@gmail.com
*  March 13 2017
*  For a test of specific problem please select the number of the problem to require the apropiate input.
*/


/*Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the array
*  ["November", "is", "the", "coolest", "month", "of", "the", "Year"] gets printed as:
*
*
      ************
      * November *
      * is *
      * the *
      * coolest *
      * month *
      * of *
      * the *
      * Year *
      ************
*
*/
function nombreMarco(listadoStrings)
{

var numeroStrings=listadoStrings.length;  //Obtenemos el numero de elementos en el array
var mayorValorArray=0;						//Acumulador para obtener el string mas largo del arreglo
var diferenciaString=0;						//Guardara la diferencia entre el mayor valor de array contra todos los demas
var guardaEspacios="";						//Guarda el numero de espacios a guardar
//Recorrido de ciclo para comparar 
for (i=0; i<numeroStrings; i++)
	{
		console.log("Tamaño palabra:"+listadoStrings[i].length);
	if(mayorValorArray<listadoStrings[i].length){mayorValorArray=listadoStrings[i].length}
	}

//Transformacion del arreglo  String igual a string mas espacios de valor arreglo
for(i=0;i<numeroStrings;i++)
	{
		
	if(listadoStrings[i].length<mayorValorArray){
		diferenciaString=(mayorValorArray-listadoStrings[i].length);
		console.log("Me faltan estos espacios:"+diferenciaString);	
			guardaEspacios="";
			for(j=0;j<diferenciaString;j++){
				guardaEspacios=guardaEspacios+" ";
			}
		
		listadoStrings[i]="*"+listadoStrings[i]+guardaEspacios+"*";
		
			}
	else listadoStrings[i]="*"+listadoStrings[i]+"*";	
	}	

bordeAsterisco="";	
//Crear bordes superior e inferior
for (k=0;k<mayorValorArray;k++){
	bordeAsterisco=bordeAsterisco+"*";
	}
//Correccion de espacios
bordeAsterisco=bordeAsterisco+"**";	
listadoStrings.unshift(bordeAsterisco);
listadoStrings.push(bordeAsterisco);	

//Otorgando el resultado del arreglo actualizado
for(i=0;i<listadoStrings.length;i++)
{
	console.log(listadoStrings[i]);
	document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+listadoStrings[i]+"<br>";
}
}
