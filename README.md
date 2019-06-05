# Fatec Pretty Siga
Serves website with student's information from Centro Paula Souza's SIGA. Access the live version on [Glitch](https://prettysiga.glitch.me).

*Serve página da web com informações de estudante do SIGA do Centro Paula Souza. Acesse a versão no ar no [Glitch](https://prettysiga.glitch.me).*

## Overview (*Visão Geral*)
The Node.js runs a express server, which serves a website where the student can log in. 
After recieving the credentials from the student, the server sends them to the API,
which returns the student's information.
The information is then rendered in a EJS template, and the rendered document is sent to the student.

*O Node.js roda um servidor express, que serve um website onde o estudante pode realizar login.
Após receber as credenciais do estudante, o servidor os envia para a API,
que retorna as informações do estudante.
A informação é então renderizada em um modelo EJS, e o documento HTML renderizado é enviado ao estudante.*

## Contributing (*Contribuindo*)
You are free to contribute to this project by pull requests or contacting me for suggestions.

*Você é livre para contribuir a esse projeto através de pull requests ou me contatando para sugestões.*
## Prerequisites (*Pré-requisitos*)
With Node.js installed, you will to install the project's 
[dependencies](https://github.com/g-otn/fatec-pretty-siga/network/dependencies): express, ejs and fatec-api.

*Com o Node.js instalado, você precisa instalar as 
[dependências](https://github.com/g-otn/fatec-pretty-siga/network/dependencies) do projeto: express, ejs e fatec-api.*
```
npm i -S express ejs fatec-api
```
