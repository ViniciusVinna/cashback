# Cashback
[![Netlify Status](https://api.netlify.com/api/v1/badges/79e56956-4d28-445f-b90e-afb8df0d9990/deploy-status)](https://app.netlify.com/sites/cashback-boticario/deploys)
[![Build Status](https://travis-ci.org/ViniciusVinna/cashback.svg?branch=master)](https://travis-ci.org/ViniciusVinna/cashback)
[![codecov](https://codecov.io/gh/ViniciusVinna/cashback/branch/master/graph/badge.svg)](https://codecov.io/gh/ViniciusVinna/cashback)
[![Maintainability](https://api.codeclimate.com/v1/badges/c06c55e767c340053218/maintainability)](https://codeclimate.com/github/ViniciusVinna/cashback/maintainability)

Cashback é um SPA desenvolvido em React como desafio do Grupo Boticário.

## Iniciando o projeto

> A aplicação foi desenvolvida com o `create-react-app`, porém, como existe o fluxo de autenticação em `JWT` e consumo de `API` eu utilizei a solução da `Netlify` para executar a arquitetura do projeto.

#### Instalando o Netlify CLI
> 1) Para executar o projeto em ambiente local é necessário instalar o `netlify-cli`:
```bash
npm install -g netlify-cli@2.63.3
```
> 
> 2) Instale as dependências do projeto com o comando `yarn install`
> 
> 3) No diretório do projeto execute o comando `netlify dev` para subir a aplicação, o `identity` (serviço de autenticação em JWT) e as `lambda-functions` onde estão contidas as regras de negócio da aplicação, regras de `proxy` e `parsing` e `sanitização dos dados` para a mock api.
> Na conclusão do processo o projeto estará disponível em `http://localhost:8888/`

#### Rodando os testes
> Testes:
```bash
yarn test
```
> 
> Coverage:
```bash
yarn test:coverage
```
> Abrir relatório de cobertura de testes:
```bash
open coverage/lcov-report/index.html
```

## Principais tecnologias utilizadas
- [x] React
- [x] React Hooks
- [x] Redux
- [x] Redux-Sagas
- [x] React-testing-library
- [x] Emotion CSS (Styled Components)

## Regras de negócio

Para evitar que as regras de negócio estivessem contidas no front-end, elas foram alocadas na pasta `functions`, que é utilizada pelo `netlify` como `lambda-functions`.

#### Regras de cashback
> Compras até `R$ 50,00` não geram cashback e o status `REPROVADO` é aplicado automaticamente.
> Compras entre `R$ 50,01` e `R$ 500,00` recebem o status `APROVADO` automaticamente e as seguintes regras de cashback são aplicadas:

* `3%` de cashback em compras de até `R$ 250,00`.
* `5%` de cashback em compras de até `R$ 250,00` e `R$ 500,00`.

> Compras acima de `R$ 500,00` geram `8%` de cashback, porém o status `EM VALIDAÇÃO` é aplicado.

## Arquitetura do projeto
Minha intenção foi apresentar qual abordagem eu teria em construir uma aplicação restful escalável.
> 👉 Em uma situação real, eu levaria outros fatores em consideração na escolha da arquitetura, como objetivo de negócio (é um MVP que precisa validar uma hipótese, é para ser lançado rápido?, todos no time estão familiarizados com as tecnologias?)...
> 👉 Em aplicações menores eu utilizaria soluções `built-in` do React para genreciamento de estado como `context-api` combinado com `useReducers`.

#### Redux + Redux Sagas
Eu escolhi essa combinação de tecnologias, pois ainda são boas opções para APIs Rest e entre as opções de controle de estado, proporcionam as melhores opções de `debugging` e integradas ao `redux dev tools` e o `redux-logger` (utilizadas nesse projeto) garantem:

* `Arquitetura Event-driven` -> através da abordagem declarativa do fluxo unidirecional do Flux/Redux, que me obriga a separar as "etapas" do fluxo do de dados
* `Previsibilidade` -> através das soluções de logs, que podem ser integradas a ferramentas de monitoramento de erros como o `Sentry`, permitindo que o fluxo de actions disparadas sejam empilhadas na forma de `breadcrumb`, o que facilita entender o fluxo do usuário até que o erro seja disparado.

#### Estrutura de pastas
Eu escolhi a abordagem conhecida como `Rails-Style Structure + Module Index`, que é mais verbosa (muitas pastas e arquivos index), porém é eficiente quando a aplicação escala e é necessária a segmentação do estrutura do projeto em múltiplos domínios e posteriormente, se necessário, a uma abordagem de `micro-frontends`.

#### Estrutura de componentes
> * Os componentes foram organizados em `presentational components` e `container components` onde apenas os `containers` se comunicam com a store global.

> * Cada `Componente`, `Container`, `Route/Page` possui o seu próprio `JSX`, `estilos .styled.js` e seus próprios arquivos de testes `.spec.js`, o que facilita o compartilhamento de componentes, entre domínios, micro-frontends ou publicação de `shared-components` em soluções entre times, como o `bit.dev`.

#### Estilos CSS
> Todo o CSS do projeto foi criado do zero *por se tratar de um desafio de Front-end*.
> Também criei os `design-tokens` para utilizar nos estilos globais e garantir uma maior padronização do projeto. Utilizei a convenção de `tamanho de camisetas` (`S`, `M`, `X`, `XXL`) e pode ser encontrado em `src/style/theme.js` e é importada pelo `ThemeProvider`.

#### Side-effects
Joguei toda a responsabilidade de controle de side-effects para `Redux-Sagas`, onde através do Redux eu controlo os estados das `race conditions` e resposta da UI com a abordagem de `máquina finita de estados`, por isso na minha global store poderá ser observado que todas as requests possuem uma entrada com estado inicial `idle` que imediatamente muda para `running` e que pode retornar `success` ou `failure` e a partir daí os reducers podem abrigar algumas lógicas de exibição de estados.

## Requisitos do desafio
#### Requisitos técnicos obrigatórios
- [x] Utilize um destes frameworks: Angular, `React` ou Vue.js
- [x] Você `pode utilizar` um framework de UI. Exemplo: Bootstrap, Material-UI,
Bulma, etc.
- [x] Design Responsivo (manter a integridade das informações e layout nos
principais breakpoints; Mobile e Desktop). 
- [x] Integração com uma API 'fake' (mockado ou remoto).
- [x] Respeitar boas práticas de código e arquitetura.
- [x] Teste Unitário (Jasmine, Jest).

#### Diferenciais
- [ ] Testes Automatizados (E2E).
- [x] Utilização de boas práticas do Git. 
- [x] State Management (`Redux`, NGRX, MobX, etc).
- [ ] Webcomponents cross-platform.
- [x] Offline Cache com Service Worker.
- [x] Autenticação JWT

### Interface
#### Cadastro → Novos revendedores:
- [x] Nome completo
- [x] CPF
- [x] E-mail
- [x] Senha

#### Login
- [x] Email
- [x] Senha

#### Cadastro de Compras
- [x] Código
- [x] Valor da compra
- [x] Data da compra

#### Listagem de Compras
- [x] Código
- [x] Valor
- [x] % de cashback aplicado
- [x] Valor do cashback
- [x] Status do cadastro
    - [x] `EM VALIDAÇÃO`
    - [x] `REPROVADO`
    - [x] `APROVADO`

- [x] Exibição de Cashback
