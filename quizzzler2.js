const fs = require('file-system');

function renderQuiz() {
  let textTorender = fs.readFileSync('./uploads/quiz.txt', 'utf8');
  if (textTorender != null || undefined) {
    const wholeQuestionPattern = /\d+?\. .+(\r\n(\r\n[a-z||A-Z]\. .+)+)/gm;
    const promptPattern = /\d+?\. .+/;
    const fOptionPattern = /[a-z||A-Z]\. .+/;
    const cOptionPattern = /[a-z||A-Z]\. .+!/;
    let wholeQuestion = textTorender.match(wholeQuestionPattern);
    const questionJSONed = {};
    for (let i = 0; i < wholeQuestion.length; i++) {
      let question = [];
      question[i] = {};
      question[i]["prompt"] = textTorender.match(promptPattern);
      question[i]["fOptions"] = textTorender.match(fOptionPattern);
      question[i]["cOption"] = textTorender.match(cOptionPattern);
      questionJSONed[i] = question[i];
    }
    return questionJSONed;
  }
}

module.exports = renderQuiz;
