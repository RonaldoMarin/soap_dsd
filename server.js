const express = require('express');
const soap = require('soap');

const app = express();

const quizService = {
  QuizService: {
    QuizPort: {
      getQuestion: (args, callback) => {
        const question = {
          id: 1,
          text: 'Qual é a capital do Brasil?',
          options: 'A) Rio de Janeiro, B) São Paulo, C) Brasília, D) Belo Horizonte',
          correctOption: 3,
        };
        callback(null, { question });
      },
      submitAnswer: (args, callback) => {
        const answer = args.answer;
        const result = answer.selectedOption === 3 ? 'Correto!' : 'Incorreto!';
        callback(null, { result });
      },
    },
  },
};

app.listen(3000, () => {
  soap.listen(app, '/quiz', quizService, wsdlPath => {
    console.log(`Servidor SOAP rodando em http://localhost:3000/quiz?wsdl`);
  });
});
