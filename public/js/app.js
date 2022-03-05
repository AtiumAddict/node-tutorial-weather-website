const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Loading...';
messageTwo.textContent = '';

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const locationParam = search.value;
  fetch('http://localhost:3000/weather?address=' + locationParam).then(
    (res) => {
      res.json().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
