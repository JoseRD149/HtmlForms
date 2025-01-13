const form = document.getElementById('form');


form.addEventListener('submit', function (e) {
  e.preventDefault(); 

 
  const formData = new FormData(form);

  const name = formData.get('name');
  const email = formData.get('email');
  const age = formData.get('age');
  const description = form.querySelector('#description').value; 
  const recommend = formData.get('recommend');
  const comment = form.querySelector('#comment').value;

 
  const languages = [];
  form.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    languages.push(checkbox.value);
  });


  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Age:', age);
  console.log('Description:', description);
  console.log('Recommend:', recommend);
  console.log('Languages:', languages);
  console.log('Comment:', comment);
});
