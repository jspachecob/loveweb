
  // Función para calcular el progreso
  function calcularProgreso() {
    const fechaInicio = new Date('2024-03-11');
    const fechaFin = new Date('2024-09-11');
    const fechaActual = new Date();
    
    const totalDias = Math.floor((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));
    const diasTranscurridos = Math.floor((fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));
    
    const porcentaje = (diasTranscurridos / totalDias) * 100;
    return porcentaje;
   
  }
  

  // Función para actualizar la barra de progreso
  function actualizarBarra() {
    const porcentaje = calcularProgreso();
    const progressBarFill = document.getElementById('progress');
    progressBarFill.style.width = porcentaje + '%';
    document.getElementById("porcentaje").innerHTML = Math.floor(porcentaje) + "%"
    setTimeout(actualizarBarra, 1000);
  }

  actualizarBarra();

