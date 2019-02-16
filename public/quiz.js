document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/quizes', {method: 'get'})
  .then(res => res.json())
  .then(data => {
    let object = data;
    cardsCreation(object);
    renderPrompt(object);
    renderOptions(object);
    getCorrectOptions(object);
    chargeButtons();
    setCounter();
    console.log(object);
  });
});

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

//extracts corret options and pushes into an array
let correctOptions = [];
function getCorrectOptions(info) {
  for (let i in info) {
    correctOptions.push(info[i].cOption.join(''));
  };
  return correctOptions;
};

function chargeButtons() {
  let btn = document.getElementsByClassName('btn');
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", isCorrect);
    let toCheck = btn[i].innerHTML + '!';
    function isCorrect() {
        if (correctOptions.indexOf(toCheck) != -1) {
          btn[i].classList.remove('blue');
          btn[i].classList.add('green');
          setCounter(1);
        } else {
          btn[i].classList.remove('blue');
          btn[i].classList.add('red');
        };
    };
  };
};
let result = 0;
function setCounter(i) {
  let counter = document.getElementById('counter');
  if (i > 0) {result += 1};
  counter.innerHTML = `${result}/${correctOptions.length}`;
};
