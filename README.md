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

## Built With (*Construído Com*)
Node.js:
- Express.js
- ejs
- fatec-api

See [Dependencies](https://github.com/g-otn/fatec-pretty-siga/network/dependencies). *Veja as [dependências](https://github.com/g-otn/fatec-pretty-siga/network/dependencies).*

## Contributing (*Contribuindo*)
Pull requests are welcome. *Pull requests são bem vindos.*

## License (*Licença*)
[BSD 2-Clause "Simplified" License](https://github.com/g-otn/fatec-pretty-siga/blob/master/LICENSE)
