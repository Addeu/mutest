const fs = require('file-system');

 module.exports = {
  startReading:  function () {
  const text = fs.readFileSync(`./uploads/quiz.txt`, `utf8`);
  const questionPattern = /(".+?")/g;
  const opptionPattern = /(\d\w+)/;
  const question = text.match(questionPattern);
  const optionA = text.match(opptionPattern);
  const optionB = text.match(opptionPattern);
  const optionC = text.match(opptionPattern);
  const optionD = text.match(opptionPattern);
  return question, optionA, optionB, optionC, optionD;
 }
}
