# Grupo Permaneo

**Disponível em:
https://permaneo-frontend-test.vercel.app**

## Getting Started

Crie o arquivo `.env.local` com base no `.env.example`

**Iniciar ambiente de desenvolvimento:
[http://localhost:3000](http://localhost:3000)**

```bash
npm run dev
```


**Iniciar servidor json para mock:
[http://localhost:3001](http://localhost:3001)**
```bash
npm run server
```

## Documentação dos Componentes

A documentação dos componentes foi escrita usando o Storybook sendo possível visualizar e testar os componentes isoladamente.
**Iniciar servidor local:**
```bash
npm run storybook
```

Também disponível online:
https://permaneo-frontend-storybook-test.vercel.app


## Padrão de Commits

Está sendo utilizado `git-cz` para padronizar os commits.
- Adicione os arquivos com `git add`
- Para fazer o commit e adicionar a mensagem utilize:
```
npm run commit
```


## 🛠️ Fluxo de trabalho

Esta sendo utilizado **GitFlow** para padronizar o fluxo de trabalho e versionamento através do **[SEMVER](https://semver.org/lang/pt-BR/)**.

- Criar **branch** a partir da **developer** com o seguinte padrão:

> 🚧 <span style="color:rgb(22, 198, 12)">feature</span>/`nome-do-build`
> Criacão de nova funcionalidade.

> ♻️ <span style="color:rgb(237, 230, 69)">refact</span>/`nome-do-refact`
> Refatoração de código.

> 🩹 <span style="color:rgb(219, 189, 151)">fix</span>/`nome-do-fix`
> Corrigir algum problema no código e/ou funcionalidade (bugs).

> 🚑 <span style="color:rgb(222, 110, 95)">hotfix</span>/`nome-do-hotfix`
> Correção de bug/problemas em produção (considerado grave).

> 📑 <span style="color:rgb(1000, 1000, 1000)">docs</span>/`nome-do-docs`
> Atualizar documentações como o README.md.

> ⛱️ <span style="color:rgb(187, 145, 103)">chore</span>/`nome-do-chore`
> Alterações no ambiente de desenvolvimento (instalação de libs, configuração do package.json, jest, etc).

- Após ter finalizado as alterações, abra um Pull Request para a branch **developer** (você mesmo deve fazer o merge).
- Para criar uma release faça a partir da **developer**, crie usando o padrão SEMVER, ex: **release/x.y.z**
  > Substitua:
	> x: caso seja uma versão breakchange / 
	> y: caso seja uma versão feature /
	> z: caso seja um patch de correção
- Após release criada, abra um pull request da **release** para a **main**.
- Após todo o fluxo, crie um pull request da branch **main** para **developer** para manter a developer sempre atualizada em relação a main.
## Docker

Comando para build:
```
docker build -t <tag-name> .
```
Exemplo:
```
docker build -t permaneo-frontend-test .
```

Para iniciar o container com a aplicação:
```
docker run -p 3000:3000 -p 3001:3001 permaneo-frontend-test
```
Listar seus containers:
```
docker ps
```
Interromper o container:
```
docker stop <CONTAINER ID>
```


Para dúvidas consulte a [documentação do Docker](https://docs.docker.com/reference/)


## Ferramentas instaladas
- [React](https://react.dev/) Framework Frontend
- [Next](https://nextjs.org/docs) - Framework para React com renderização no lado do servidor
- [Next PWA](https://github.com/shadowwalker/next-pwa) -  Progressive Web Application
- [Chakra UI](https://v2.chakra-ui.com/getting-started) - Biblioteca de componentes React
  - [Components](https://v2.chakra-ui.com/docs/components) - Atalho componentes
  - [Theme Default](https://v2.chakra-ui.com/docs/styled-system/theme) - Atalho tema padrão 
  - [Style Props](https://v2.chakra-ui.com/docs/styled-system/style-props) - Atalho propriedades CSS
- [Chakra Icons](https://v2.chakra-ui.com/docs/components/icon) - Biblioteca de icones
- [Emotion](https://emotion.sh/docs/introduction) - Framework CSS
- [Redux Toolkit](https://redux-toolkit.js.org/) - Biblioteca para gerenciar estado
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Biblioteca para gerenciar requisições
- [ES Lint](https://eslint.org/) - Ferramenta de análise de código estático que identifica e corrige problemas de sintaxe
- [Prettier](https://prettier.io/) - Ferramenta de formatação automática de código
- [Commitizen](https://github.com/commitizen/cz-cli) - Ferramenta que padroniza as mensagens de commit em projetos
- [JSON Server](https://github.com/typicode/json-server) - Ferramenta que cria uma API REST para mockups
- [Typescript](https://www.typescriptlang.org/) - Adiciona tipagem estática ao código
- [Storybook](https://storybook.js.org/) - Biblioteca para documentação de componentes
- [Jest](https://jestjs.io/pt-BR/) - Framework para criação de testes
- [uuid ](https://github.com/uuidjs/uuid) - Biblioteca para criação de identificadores únicos
