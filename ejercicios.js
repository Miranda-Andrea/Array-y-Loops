// Suma de resistencias en serie
// Función para calcular la suma de resistencias en serie
function sumResisSerie(resistencias) {
    // Verificar si el arreglo de resistencias está vacío
    if (resistencias.length === 0) {
      return "0 ohms"; // Si no hay resistencias, la suma es cero
    }
  
    // Utilizar el método reduce para sumar todas las resistencias
    const sumaResistencias = resistencias.reduce((total, resistencia) => total + Math.abs(resistencia), 0);
  
    return `${sumaResistencias} ohms`;
  }
  
  // Ejemplos
  const resistencias = [-1,  5, 6, 3]; // Resistencias en ohmios
  const sumaTotal = sumResisSerie(resistencias);
  
  console.log(`La suma total de resistencias en serie es: ${sumaTotal}`);
  
//Ejemplo 2 [14, 3.5, 5, 6];
//Ejemplo 3 [8, 15, 100];



//Numero dividido en mitades

function dividirNumeroEnMitades(numero) {
    // Verificar si el argumento es un número
    if (typeof numero !== 'number') {
      return "Por favor, proporciona un número válido.";
    }
  
    // Calcular la mitad del número
    const mitad = numero / 2;
  
    // Devolver las mitades en una matriz
    return [mitad, mitad];
  }
  
  // Ejemplo 
  const numero = 4; // Puedes cambiar este número según tus necesidades
  const mitades = dividirNumeroEnMitades(numero);

  console.log(`El número ${numero} dividido en mitades es: [${mitades.join(', ')}]`);
  


// Sociedad secreta

function nomSociedadSecreta(nombres) {
    // Verificar si el argumento es un arreglo
    if (!Array.isArray(nombres)) {
      return "Por favor, proporciona un arreglo de nombres válido.";
    }
  
    // Filtrar y extraer la primera letra de cada nombre
    const iniciales = nombres.map(nombre => {
      // Verificar si el elemento es una cadena no vacía
      if (typeof nombre === 'string' && nombre.trim() !== '') {
        // Tomar la primera letra y convertirla a mayúscula
        return nombre.trim()[0].toUpperCase();
      } else {
        return ''; // En caso de nombres no válidos, asignar una cadena vacía
      }
    });
  
    // Concatenar las iniciales para formar el nombre de la sociedad secreta
    const nombreSociedadSecreta = iniciales.join('');
  
    return nombreSociedadSecreta || "No hay nombres válidos para formar la sociedad secreta.";
  }
  
  // Ejemplo 
  const miembros = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]; // Puedes cambiar estos nombres según tus necesidades
  const sociedadSecreta = nomSociedadSecreta(miembros);
  
  console.log(`El nombre de la sociedad secreta es: ${sociedadSecreta}`);

  //Ejemplo 1 (["Esperanza", "Franco", "Nia"])`;
  //Ejemplo 3 (['Harry', 'Ron', 'Hermione'])`;


  //Estado en línea

const estadosUsuarios = {
    "Miranda": "activo",
    "Daniela": "inactivo",
    "Isabel": "activo",
    "Odalys": "inactivo",
  };
  
  // Función para mostrar el estado en línea de una lista de usuarios
  function mostrarEstadoEnLinea(listaUsuarios) {
    // Verificar si el argumento es un objeto
    if (typeof listaUsuarios !== 'object' || listaUsuarios === null) {
      return "Por favor, proporciona un objeto válido de estados de usuarios.";
    }
  
    // Iterar sobre los usuarios y mostrar su estado en línea
    for (const usuario in listaUsuarios) {
      if (listaUsuarios.hasOwnProperty(usuario)) {
        const estado = listaUsuarios[usuario];
        const estadoEnLinea = estado === "activo" ? "en línea" : "fuera de línea";
        console.log(`${usuario} está ${estadoEnLinea}`);
      }
    }
  }
  
  mostrarEstadoEnLinea(estadosUsuarios);



  //Matriz de múltiplos
  
  function obtenerMultiplos(numero, longitud) {
    // Verificar si los parámetros son números positivos
    if (typeof numero !== 'number' || typeof longitud !== 'number' || numero <= 0 || longitud <= 0) {
      return "Por favor, proporciona números positivos válidos.";
    }
  
    // Crear una matriz para almacenar los múltiplos
    const multiplos = [];
  
    // Calcular y almacenar los múltiplos en la matriz
    for (let i = 1; i <= longitud; i++) {
      multiplos.push(numero * i);
    }
  
    return multiplos;
  }
  
  // Ejemplo 1
  const num = 2; // Puedes cambiar este número según tus necesidades
  const longitud = 10; // Puedes cambiar esta longitud según tus necesidades
  const resultado = obtenerMultiplos(num, longitud);
  
  console.log(`Los ${longitud} primeros múltiplos de ${num} son: ${resultado.join(', ')}`);
  
  /* Ejemplo 22
  const num = 2; // Puedes cambiar este número según tus necesidades
  const longitud = 10; // Puedes cambiar esta longitud según tus necesidades
  const resultado = obtenerMultiplos(num, longitud);
  
  console.log(`Los ${longitud} primeros múltiplos de ${num} son: ${resultado.join(', ')}`); 
  */



  // Dominio positivo en Array

  function positiDominante(arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length === 0) {
      return "Por favor, proporciona un arreglo no vacío.";
    }
  
    // Verificar si la mayoría de los elementos son positivos
    let conteoPositivos = 0;
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > 0) {
        conteoPositivos++;
      }
    }
  
    return conteoPositivos > arreglo.length / 2;
  }
  
  // Ejemplo 
  const arreglo = [-1, -3, -5, 4, 6767];
  const resul = positiDominante(arreglo);
  
  console.log(resul);
  


//Promedio antípoda

function transformarMatriz(matriz) {
    if (matriz.length % 2 !== 0) {
      const indiceMedio = Math.floor(matriz.length / 2);
      matriz.splice(indiceMedio, 1);
    }
  
    // Dividir la matriz en dos partes iguales
    const mitad1 = matriz.slice(0, matriz.length / 2);
    const mitad2 = matriz.slice(matriz.length / 2);
  
    // Sumar cada número de la primera parte con los números inversos de la segunda parte
    const matrizResultante = mitad1.map((num, index) => num + 1 / mitad2[index]);
  
    // Dividir cada número de la matriz resultante entre 2
    const matrizFinal = matrizResultante.map(num => num / 2);
  
    return matrizFinal;
  }
  
  // Ejemplo de uso
  const matrizEjemplo = [2, 4, 6, 8,];
  const result= transformarMatriz(matrizEjemplo);
  
  console.log(result);
  
