// taller ejercicios javascript

// codigos terminados en 0 y 1
  // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
  // 'numeros' en la posición 1.
  // Ej:
  // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
  // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
  // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

  // Tu código aca: 0000293970
  //Realizado por: Santiago Martinez

const readline = require('readline');

// Crear una interfaz para leer entradas desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menorMayor(numeros) {
  if (numeros.length === 0) {
    return [];
  }

  const menor = Math.min(...numeros);
  const mayor = Math.max(...numeros);

  return [menor, mayor];
}

// Función para pedir al usuario que ingrese el arreglo de números
function pedirNumeros() {
  rl.question('Ingresa un arreglo de números enteros separados por comas por ejemplo, 4,6,1,7,15: ', (respuesta) => {
    // Convertir la entrada en un arreglo de números enteros
    const numeros = respuesta.split(',').map(num => parseInt(num.trim(), 10));

    // Verificar si los números son válidos
    if (numeros.some(isNaN)) {
      console.log('Por favor, ingresa solo números enteros válidos separados por comas.');
      rl.close();
      return;
    }

    // Calcular el menor y mayor
    const resultado = menorMayor(numeros);

    // Mostrar el resultado
    console.log(`El menor número es ${resultado[0]} y el mayor número es ${resultado[1]}`);

    // Cerrar la interfaz de readline
    rl.close();
  });
}

// Llamar a la función para iniciar el proceso
pedirNumeros();
