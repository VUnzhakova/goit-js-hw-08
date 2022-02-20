import throttle from 'lodash.throttle';

const refsFormEl = document.querySelector('.feedback-form');
const formData = {};

refsFormEl.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }),
);

refsFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});

function populateTextarea() {
  if (!localStorage.length) {
    return;
  }

  const localStorageFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  const keys = Object.keys(localStorageFormData);

  for (const key of keys) {
    refsFormEl.elements[key].value = localStorageFormData[key];
  }
}

populateTextarea();
