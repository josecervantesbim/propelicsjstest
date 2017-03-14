/*
*  PROPELICS JS TEST by jfcervantes.moreno@gmail.com
*  March 13 2017
*  For a test of specific problem please select the number of the problem to require the apropiate input.
*/


/*
Write a function that convert the given number into a Roman Numeral - The function needs to receive a Number and
Return a String (The Number can be between 1 and 3999)
Example:
getRomanNumeral(512);
Prints: DXII
*/
function hazteRomano(soyDecimal) {
	var
		valores = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		romanosky = [],
		num, letra, val, pos, insert

	for(var i = 6; num = valores[i], letra = letras[i]; i--) {
		// Suficientemente grande
		if(soyDecimal >= num) {
			// Número de letras repetidas
			var r = Math.floor(soyDecimal / num); 

			// Restamos el actual
			soyDecimal -= r * num; 

			if(r < 4){
				// Metemos las letras
				while(r--){
					romanosky.push(letra);
				}
			} else {
				// No se pueden repetir 4+ veces
				val = romanosky.pop(); // Última letra

				// Si es el string vacío o letra == "M" (no hay anterior)
				// usamos la letra anterior a esta
				pos = (val ? letras.indexOf(val) : i) + 1; 

				// Y si letra == "M" -> letras[pos] no existirá y usamos M
				insert = letra + (letras[pos] || 'M'); 

				// Insertamos el string
				romanosky.push(insert);
			}
		} else {
			// Si no vamos a poner letra usamos un ""
			// para que no afecte pop
			romanosky.push('');
		}
	}

	console.log(romanosky.join(''));
	document.getElementById("resultado").innerHTML=document.getElementById("resultado").innerHTML+romanosky.join('')+"<br>";
}
