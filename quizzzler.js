const fs = require('file-system');

function renderQuiz() {
  let textTorender = fs.readFileSync('./uploads/quiz.txt', 'utf8');
  if (textTorender != null || undefined) {
    const qPattern = /(\d. \w+.+)/g;
    const  falseOptionPattern = /[a-d]. \w+.+/g;
    let question = textTorender.match(qPattern);
    let options = textTorender.match(falseOptionPattern);
    let questionJSONed = {question: question,
    fOptions: options};
    return questionJSONed;
  }
}

module.exports = renderQuiz;
