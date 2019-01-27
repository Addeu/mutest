document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/quizes', {method: 'get'})
  .then(res => res.json())
  .then(data => {
    let object = data;
    cardsCreation(object);
    renderQuestion(object);
  });
});

function cardsCreation(info) {
  for (let t = info.nTasks; t > 0; t--) {
    document.body.innerHTML += `<div class="container">
      <div class="row">
        <div class="col s12 m5 l12">
          <div class="card-panel blue z-depth-3">
            <span class="prompting white-text center-align flow-text">
            </span>
            <a class="btn waves-effect blue waves-light btn-large z-depth-3"></a>
            <a class="btn waves-effect blue waves-light btn-large z-depth-3"></a>
            <a class="btn waves-effect blue waves-light btn-large z-depth-3"></a>
            <a class="btn waves-effect blue waves-light btn-large z-depth-3"></a>
          </div>
        </div>
      </div>
    </div>`
  };
};

function renderQuestion(info) {
  const prompts = document.getElementsByClassName("prompting");
  const options = document.getElementsByClassName('btn');
  for (let j = 0; j < prompts.length; j++) {
    prompts[j].innerHTML = info.question[j];
  };
  for(let i = 0; i < options.length; i++) {
    options[i].innerHTML = info.fOptions[i];
  };
};
