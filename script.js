// Seleccionamos el formulario por su ID
const form = document.getElementById('form');

// Agregamos un evento 'submit' al formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el comportamiento predeterminado (recargar la página)

  // Obtenemos los datos del formulario
  const formData = new FormData(form);

  // Extraemos los valores
  const name = formData.get('name');
  const email = formData.get('email');
  const age = formData.get('age');
  const description = form.querySelector('#description').value; //alternativa a form data por ser un selector
  const recommend = formData.get('recommend');
  const comment = form.querySelector('#comment').value;//alternativa a form data por ser un textarea

  // Recogemos los valores de los checkboxes seleccionados
  const languages = [];
  form.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    languages.push(checkbox.value);
  });

  // Mostramos los datos en la consola
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Age:', age);
  console.log('Description:', description);
  console.log('Recommend:', recommend);
  console.log('Languages:', languages);
  console.log('Comment:', comment);
});
