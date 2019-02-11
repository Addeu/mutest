document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/quizes', {method: 'get'})
  .then(res => res.json())
  .then(data => {
    let object = data;
    cardsCreation(object);
    renderPrompt(object);
    renderOptions(object);
    getCorrectOptions(object);
    console.log(object);
  });
});

let correctOptions = [];
let btn = document.getElementsByClassName('btn');

function cardsCreation(info) {
  for (let t = Object.keys(info).length; t > 0; t--) {
    document.body.innerHTML += `<div class="container center">
      <div class="row">
        <div class="col s12 m10">
          <div class="card-panel blue z-depth-3">
            <span class="prompting white-text center-align flow-text">
            </span>
            <div class="divider blue"></div>
            <div class="row forOptions">
            </div>
          </div>
        </div>
      </div>
    </div>`
  };
};

function renderPrompt(info) {
  const prompts = document.getElementsByClassName('prompting');
  for (let i = 0; i < Object.keys(info).length; i++) {
    prompts[i].innerHTML = info[i].prompt;
  };
};

function renderOptions(info) {
  const renderPlace = document.getElementsByClassName('forOptions');
  for (let i = 0; i < renderPlace.length; i++) {
    let optionsNumber = info[i].fOptions.length;
    for (let j = 0; j < optionsNumber; j++) {
      renderPlace[i].innerHTML += `<a class="btn waves-effect blue lighten-2 waves-light btn-large z-depth-3 col3">${info[i].fOptions[j]}</a>
                <div class="divider blue"></div>`;
   };
  };
};

function getCorrectOptions(info) {
  for (let i in info) {
    correctOptions.push(info[i].cOption.join(''));
  };
  console.log(correctOptions);
  return correctOptions;
};






/* OLD RENDERING FUNCTION
function cardsCreation(info) {
  for (let t = info.nTasks; t > 0; t--) {
    document.body.innerHTML += `<div class="container center">
      <div class="row">
        <div class="col s12 m10">
          <div class="card-panel blue z-depth-3">
            <span class="prompting white-text center-align flow-text">
            </span>
            <div class="divider blue"></div>
            <div class="row">
            <a class="btn waves-effect blue lighten-2 waves-light btn-large z-depth-3 col3"></a>
                        <div class="divider blue"></div>
            <a class="btn waves-effect blue lighten-2 waves-light btn-large z-depth-3 col3"></a>
                        <div class="divider blue"></div>
            <a class="btn waves-effect blue lighten-2 waves-light btn-large z-depth-3 col3"></a>
                        <div class="divider blue"></div>
            <a class="btn waves-effect blue lighten-2 waves-light btn-large z-depth-3 col3"></a>
            </div>
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
*/
