const saludoConNombre = (nombre) => {

    do{
        nombre = prompt("Ingrese su nombre")

        if(!isNaN(nombre) || (nombre === "")){
            alert("Caracter no permitido")
        }
        else{
            alert("Buenas " + nombre + ", bienvenido al sistema estudiantil")
        }

    }while(!isNaN(nombre) || (nombre == ""))
    

};

const recorridaListaAlumnos = () => {
    let mensaje = '';

    listaDeAlumnos.forEach((el, index) => {
        let nombre = el.nombre;
        let apellido = el.apellido;
        let materia = el.materia;

        mensaje += `${index + 1}) ${nombre} ${apellido} - Materia: ${materia}\n`;
    });

    alert(`Alumnos cargados al sistema: \n\n${mensaje}`);
};


const agregarAlumno = (nombre, apellido, materia, nota) => {
    do {
        nombre = prompt("Nombre del Alumno")

        if (!isNaN(nombre) || nombre.trim() === "") {
            alert("Caracter no permitido");
        };
    } while (!isNaN(nombre) || nombre.trim() === "");

    do {
        apellido = prompt("Apellido del alumno")
        
        if (!isNaN(apellido) || apellido.trim() === "") {
            alert("caracter no permitido");
        }
    } while (!isNaN(apellido) || apellido.trim() === "");
2
    do {
        materia = prompt("Materia cursada")
        
        if (!isNaN(materia) || materia.trim() === "") {
            alert("Caracter no permitido");
        };
    } while (!isNaN(materia) || materia.trim() === "");

    do {
        nota = parseFloat(prompt("Ingrese la nota"))
        
        if (isNaN(nota) || nota < 1 || nota > 10) {
            alert("Ingresar numero no mayor a 10");
        };
    } while (isNaN(nota) || nota < 1 || nota > 10);

    const nuevoAlumno = new Alumno(nombre, apellido , materia , nota);

    listaDeAlumnos.push(nuevoAlumno);

};

const listaDeAlumnos = [];

class Alumno{
    constructor (nombreAlumno, apellidoAlumno, materiaAlumno, notaAlumno) {
        this.nombre = nombreAlumno;
        this.apellido = apellidoAlumno;
        this.materia = materiaAlumno;        
        this.nota = notaAlumno;
    }
};
const notasDeAlumnos = () => {
    const NotaAlumno = listaDeAlumnos.sort((a, b) => b.nota - a.nota);

    NotasAlumnos = NotaAlumno.map((alumno, index) => `${index + 1}) ${alumno.nombre} ${alumno.apellido}. Nota Del alumno: ${alumno.nota}.`)

    const NotasSistema = NotasAlumnos.join(`\n`);
    
    alert(`Notas cargadas al sistema:\n\n${NotasSistema}`)
}


saludoConNombre();

let opcion;

do{
    opcion = parseInt(prompt("Ingrese una opción.\n\n\n1) agregar alumno al sistema.\n2) Ver listado de alumnos.\n3) Notas de los alumnos.\n\n0) Presione para salir."))
    switch (opcion) {  
        case 0 : 
        alert("Sistema finalizado")
        break;
        case 1 : 
            agregarAlumno()
            break;        
        case 2 :     
            if(listaDeAlumnos.length === 0){
                alert("No se encontraron alumnos en el sistema")
            }else{
                recorridaListaAlumnos()};
            break;
        case 3 :
            if(listaDeAlumnos.length === 0){
                alert("No se encontraron notas subidas al sistema")
            }else{
                notasDeAlumnos()};
            break;

        default :
        alert("Accion no permitida")
    
    }
}while(opcion !== 0);
