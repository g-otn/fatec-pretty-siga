# Fatec Pretty Siga
Serves website with student's information from Centro Paula Souza's SIGA. Access the live version on [Glitch](https://prettysiga.glitch.me).

***Veja este README.md em [Português brasileiro](https://github.com/g-otn/fatec-pretty-siga/blob/master/README.pt-BR.md).***

## Overview
The Node.js runs a express server, which serves a website where the student can log in. 
After recieving the credentials from the student, the server sends them to the API,
which returns the student's information.
The information is then rendered in a EJS template, and the rendered document is sent to the student.

## Built With
Node.js:
- Express.js
- ejs
- fatec-api

See [Dependencies](https://github.com/g-otn/fatec-pretty-siga/network/dependencies).

## Contributing
Pull requests are welcome.
