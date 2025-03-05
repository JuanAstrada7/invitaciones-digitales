// Función para obtener datos del usuario
const obtenerDatos = () => {
    const nombre = prompt("¿Cuál es tu nombre?");
    const evento = prompt("¿Qué evento estás celebrando?");
    const fecha = prompt("¿Cuál es la fecha del evento?");
    return { nombre, evento, fecha };
};

// Función para procesar la invitación
const procesarInvitacion = (datos) => {
    const { nombre, evento, fecha } = datos;
    const mensaje = `¡Hola ${nombre || "invitado"}! Estás invitado a la ${evento || "celebración"} el ${fecha || "fecha no especificada"}.`;
    return mensaje;
};

// Función para mostrar el resultado
const mostrarResultado = (mensaje) => {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += `<p>${mensaje}</p>`; // Agregar en lugar de reemplazar
    alert(mensaje);
};

// Uso de un array para almacenar invitaciones
const listaInvitaciones = [];

// Función para agregar invitaciones a la lista
const agregarInvitacion = (invitacion) => {
    listaInvitaciones.push(invitacion);
    console.log("Invitación agregada:", invitacion);
};

// Función para mostrar todas las invitaciones
const mostrarInvitaciones = () => {
    console.log("Lista de Invitaciones:");
    listaInvitaciones.forEach((invitacion, index) => {
        console.log(`${index + 1}: ${invitacion}`);
    });
};

// Función principal que controla el flujo
const generarInvitaciones = () => {
    let cantidad = parseInt(prompt("¿Cuántas invitaciones deseas generar?"));
    
    // Validación de entrada con ciclo while
    while (isNaN(cantidad) || cantidad <= 0) {
        cantidad = parseInt(prompt("Por favor, ingresa un número válido de invitaciones a generar:"));
    }

    // Ciclo for para generar múltiples invitaciones
    for (let i = 0; i < cantidad; i++) {
        const datos = obtenerDatos();
        const mensaje = procesarInvitacion(datos);
        mostrarResultado(mensaje);
        agregarInvitacion(mensaje); // Agregar la invitación a la lista
    }
};

// Evento para el botón
document.getElementById("generar-invitacion").addEventListener("click", generarInvitaciones);

// Mostrar todas las invitaciones al cargar la página
window.onload = mostrarInvitaciones;