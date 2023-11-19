from zeep import Client

# Substitua a URL pelo caminho correto para o seu arquivo WSDL
wsdl_url = 'http://localhost:3000/quiz?wsdl'
client = Client(wsdl_url)

# Obtém a pergunta do servidor
question_response = client.service.getQuestion()
question = question_response.question

print(f'Pergunta: {question.text}')
print(question.options)

# Simula a resposta do usuário (substitua a opção conforme necessário)
user_answer = {'id': 1, 'selectedOption': 3}
answer_response = client.service.submitAnswer(user_answer)
print(answer_response.result)
