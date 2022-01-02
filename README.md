<h1 align="center">Talker Manage 🫂 </h1>
<h2 align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Talker%20Manager&uri=https%3A%2F%2Fgithub.com%2Fdefauth98%2Ftalker-manager%2Fblob%2Fmain%2FInsomnia_2021-11-06.json)

</h2>

Projeto desenvolvido durante o modulo de backend da Trybe. Consiste em uma API para registro de talkers para estudar o módulo fs (file system) do NodeJS e ExpressJS.

### :computer: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js][nodejs]
- [Cripto JS][cripto]
- [Express][express]
- [Jest][jest]
- [Eslint][eslint]

[nodejs]: https://nodejs.org/
[cripto]: https://www.npmjs.com/package/crypto-js
[express]: https://expressjs.com/pt-br/
[jest]: https://jestjs.io/pt-BR/
[eslint]: https://eslint.org/

### :station: Rotas

**Autenticação**

- POST **/login** - Gera um token usando a lib cripto

**Talker (Necessita autenticação):**

- POST **/talker** - Registra um novo talker
- PUT **/talker/:id** - Edita um talker
- DELETE **/talker/:id** - Deleta um talker
- GET **/talker** - Lista todos os talkers
- GET **/talker/:id** - Lista um talker pelo ID

### :rocket: Como rodar o projeto

```sh
# Clone o repositório
git clone https://github.com/defauth98/talker-manager

# Instale as dependências
npm i

# Rode o projeto
npm start

# Rodar os teste
npm test

# Rotar os teste com o coverage report
npm run test:coverage
```

### :bust_in_silhouette: Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/defauth98">
        <img src="https://avatars.githubusercontent.com/u/52966246?v=4" width="100px;" alt=""/>
        <br />
          <sub>
            <b>Daniel Ribeiro</b>
          </sub>
      </a>
    </td>
  </tr>
</table>
