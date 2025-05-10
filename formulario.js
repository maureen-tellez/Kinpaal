document.getElementById('informesForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = { // Objeto para almacenar los datos del formulario
    nombreAlumno: document.getElementById('InputnameStudent').value,
    edad: document.getElementById('InputageStudent').value,
    gradoInteresado: document.getElementById('collegeyear').value,
    fechaNacimiento: document.getElementById('date').value,
    nombreTutor: document.getElementById('InputnameParent').value,
    ocupacionTutor: document.getElementById('InputocupattionParent').value,
    telefonoTutor: document.getElementById('InputTelephone').value,
    emailTutor: document.getElementById('email').value,
    inscritoAntes: document.querySelector('input[name="inscripcion"]:checked').value //Para los botones de opción (`radio`), usamos `querySelector` para obtener el que esté marcado (`:checked`)   //Luego `.value` obtiene si es `"Sí"` o `"No"`.
                                                                                       
  };

  try {
    const res = await fetch('https://kinpaalbackend.onrender.com/api/alumnos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert('Formulario enviado correctamente ✅');
      document.getElementById('informesForm').reset();
    } else {
      const err = await res.json();
      alert('Error al enviar: ' + (err.message || 'Intenta más tarde.'));
    }
  } catch (error) {
    console.error('Error de conexión:', error);
    alert('No se pudo conectar con el servidor');
  }
});