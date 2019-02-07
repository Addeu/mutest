const fs = require('file-system');

function renderQuiz() {
  let textTorender = fs.readFileSync('./uploads/quiz.txt', 'utf8');
  if (textTorender != null || undefined) {
    const wholeQuestionPattern = /\d+?\. .+(\r\n(\r\n[a-z||A-Z]\. .+)+)/gm;
    const promptPattern = /\d+?\. .+/;
    const fOptionPattern = /[a-z||A-Z]\. .+/;
    const cOptionPattern = /[a-z||A-Z]\. .+!/;
    let wholeQuestion = textTorender.match(wholeQuestionPattern);
    const questionJSONed =
    {wholeQuestion: wholeQuestion,
     prompt: function() {return this.wholeQuestion.match(promptPattern)},
     fOptions: function() {return this.wholeQuestion.match(fOptionPattern)},
     cOption: function() {return this.wholeQuestion.match(cOptionPattern)},
    };
    return questionJSONed;
  }
}

module.exports = renderQuiz;
