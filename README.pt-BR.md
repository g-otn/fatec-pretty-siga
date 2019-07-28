# Fatec Pretty Siga
Serve página da web com informações de estudante do SIGA do Centro Paula Souza. Acesse a versão no ar no [Glitch.com](https://prettysiga.glitch.me).

## Visão Geral
The Node.js runs a express server, which serves a website where the student can log in. 
After recieving the credentials from the student, the server sends them to the API,
which returns the student's information.
The information is then rendered in a EJS template, and the rendered document is sent to the student.

O Node.js roda um servidor express, que serve um website onde o estudante pode realizar login.
Após receber as credenciais do estudante, o servidor os envia para a API,
que retorna as informações do estudante.
A informação é então renderizada em um modelo EJS, e o documento HTML renderizado é enviado ao estudante.

## Construído Com
Node.js:
- Express.js
- ejs
- fatec-api

Veja as [dependências](https://github.com/g-otn/fatec-pretty-siga/network/dependencies).

## Contribuindo
Pull requests são bem vindos.
