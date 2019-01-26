document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/quizes', {method: 'get'}).then(res => res.json()).then(data => {
    let object = data;
    renderQuestion(object);
  });
});

function renderQuestion(info) {
  const prompt = document.getElementById("prompting");
  const options = document.getElementsByClassName('btn');
  prompt.innerHTML = info.question.join('');
  console.log(options.length);
  for(let i = 0; i < options.length; i++) {
    options[i].innerHTML = info.fOptions[i];
  };
};
