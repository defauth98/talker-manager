<h1 align="center">Talker Manager API :microphone:</h1>
<h2 align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Talker%20Manager&uri=https%3A%2F%2Fgithub.com%2Fdefauth98%2Ftalker-manager%2Fblob%2Fmain%2FInsomnia_2021-11-06.json)

</h2>

Projeto desenvolvido durante o modulo de backend da Trybe. Consiste em uma API para registro de talkers para estudar o módulo fs (file system) do NodeJS e ExpressJS.

Link para a API: https://defauth98-talker-manager.herokuapp.com/

Link para a documentação da API: https://defauth98-talker-manager.herokuapp.com/api-docs

### 🌟 Habilidades

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.

_(Fonte: readme do [repositório da Trybe](https://github.com/tryber/sd-010-a-project-talker-manager#habilidades))_

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

### :boom: Próximos passos

- [x] Testes unitários na arquitetura MSC
- [ ] Refatorar: Controllers, Services e as validaçoes
- [x] Criar testes unitários para as validações
- [ ] Criar a camada Model
- [ ] 100% de Code Coverage
- [ ] Testes de integração

### :rocket: Como rodar o projeto

```sh
# Clone o repositório
git clone https://github.com/defauth98/talker-manager

# Instale as dependências
npm i

# Rode o projeto
npm start

# Rodar os testes
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
