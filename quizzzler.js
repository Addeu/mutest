const fs = require('file-system');

function renderQuiz() {
  let textTorender = fs.readFileSync('./uploads/quiz.txt', 'utf8');
  if (textTorender != null || undefined) {
    //const wQuestionPattern =/\d+(?=.)\. .+\r\r\[a-d]. \w+.+/gm/;
    const qPattern = /(\d+(?=.)\. .+)/g;
    const  falseOptionPattern = /[a-d](?=.). .+/g;
    let question = textTorender.match(qPattern);
    let options = textTorender.match(falseOptionPattern);
    //let wQuestion = textTorender.match(wQuestionPattern);
    let nTasks = question.length;
    let questionJSONed = {question: question,
    fOptions: options, nTasks: nTasks}; //wQuestion: wQuestion};
    return questionJSONed;
  }
}

module.exports = renderQuiz;
