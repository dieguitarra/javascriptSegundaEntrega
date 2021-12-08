//Primer boton
let boton = document.getElementById("botonSaludar");
boton.addEventListener("click", function () {
  usuario = prompt("ingrese su usuario");
  alert("Hola " + usuario);
});
//Segundo boton
class Alumno {
  constructor(nombre, dni, edad, fecha) {
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.fecha = fecha;

    this.datos = function () {
      console.log("El nombre es: " + this.nombre);
      console.log("El dni es: " + this.dni);
      console.log("La edad: " + this.edad);
      console.log("La fecha de nacimiento es: " + this.fecha);
    };
  }
}

let alumnos = [];
let boton2 = document.getElementById("cargarAlumnoId");
boton2.addEventListener("click", function cargarAlumno() {
  let alumno = new Alumno("Pedro", 33345655, 16, "15/06/2008");
  alert("Los datos ingresados deben ser: nombre ej. " + alumno.nombre);
  alert("Los datos ingresados deben ser: dni ej." + alumno.dni);
  alert("Los datos ingresados deben ser: edad ej." + alumno.edad);
  alert("Los datos ingresados deben ser: fecha ej." + alumno.fecha);

  alert("Ingrese sus datos personales");
  let nombreAlumno = prompt("Ingrese su nombre");
  let dniAlumno = prompt("Ingrese su dni");
  let edadAlumno = prompt("Ingrese su edad");
  let fechaAlumno = prompt("Ingrese su fecha de nacimiento");

  let alumnoData = new Alumno(nombreAlumno, dniAlumno, edadAlumno, fechaAlumno);
  console.log(alumnoData);
  alumnoData.datos();
});
//Sexto boton
function capturar() {
  function talleres(taller, horario) {
    this.taller = taller;
    this.horario = horario;
  }
  let nombreTaller = document.getElementById("taller").value;
  let nombreTaller2 = document.getElementById("horario").value;

  nuevoTaller = new talleres(taller, horario);
  elTaller();
}
let baseDatos = [];
function elTaller() {
  baseDatos.push(nuevoTaller);
  console.log(baseDatos);
  let valor = document.getElementById("taller");
  let valor2 = document.getElementById("horario");
  console.log(valor + valor2);
  let lista = document.getElementById("listaTaller");
  let nuevaLi = document.createElement("li");
  nuevaLi.innerHTML = `${valor.value + ": " + valor2.value}`;

  lista.appendChild(nuevaLi);
}
function borrarTalleres() {
  let lista = document.getElementById("listaTaller");
  lista.removeChild(lista.lastChild);
}

//Cuarto boton
let boton4 = document.getElementById("calificacionesId");
boton4.addEventListener("click", function calificaciones() {
  let sumaTotal = 0;
  let cantidadCalificaciones = 6;
  for (let i = 1; i <= 6; i++) {
    let calificacionIngresada = parseInt(
      prompt("ingrese sus calificacion nº: " + i)
    );
    sumaTotal = sumaTotal + calificacionIngresada;
  }
  let resultadoFinal = sumaTotal / cantidadCalificaciones;

  if (resultadoFinal >= 7) {
    alert("Aprobado");
  } else if (resultadoFinal >= 4) {
    alert("Tenés que esforzarte más");
  } else {
    alert("Lamentablemente tenés que recursar");
  }
});

//Quinto boton
let boton5 = document.getElementById("notasId");
boton5.addEventListener("click", function notas() {
  let notas = [];
  let calificacionNotas;
  for (let i = 0; i < 10; i++) {
    calificacionNotas = prompt("ingrese todas sus calificaciones");
    notas.push(calificacionNotas);
  }
  notas.sort((a, b) => {
    return a - b;
  });
  console.log(notas);
});
//Sexto boton
let boton6 = document.getElementById("materiasId");
boton6.addEventListener("click", function materias() {
  let valor = document.getElementById("listaMaterias");
  let lista = document.getElementById("lista");
  let nuevaLi = document.createElement("li");
  nuevaLi.innerHTML = `${valor.value}`;
  nuevaLi.style.color = "blue";
  lista.appendChild(nuevaLi);
});
let boton6Bis = document.getElementById("borrarMateriasId");
boton6Bis.addEventListener("click", function borrarMaterias() {
  let lista = document.getElementById("lista");
  lista.removeChild(lista.lastChild);
});
