# Dependências

Uma **dependência** é qualquer software, biblioteca, framework, ferramenta ou componente externo utilizado por um projeto para fornecer funcionalidades que não foram desenvolvidas diretamente por sua equipe.

Em vez de implementar tudo do zero, os desenvolvedores reutilizam componentes existentes para acelerar o desenvolvimento, reduzir custos e aproveitar soluções já testadas pela comunidade.

Hoje, praticamente todo software moderno depende de dezenas, centenas ou até milhares de dependências.

## Para que servem?

As dependências permitem reutilizar código já existente.

Por exemplo, em vez de implementar:

* autenticação;
* criptografia;
* acesso a banco de dados;
* processamento de imagens;
* geração de arquivos PDF;
* comunicação HTTP;
* serialização de dados;

é comum utilizar bibliotecas especializadas que já resolvem esses problemas.

Isso permite que as equipes concentrem seus esforços na lógica de negócio da aplicação.

## A importância das dependências

O uso de dependências tornou-se indispensável no desenvolvimento moderno.

Entre seus principais benefícios estão:

* redução do tempo de desenvolvimento;
* reutilização de soluções consolidadas;
* maior produtividade;
* menor quantidade de código próprio para manter;
* acesso contínuo a melhorias da comunidade;
* correções rápidas de bugs;
* atualizações de segurança.

Por outro lado, elas também introduzem riscos que precisam ser gerenciados.

## Dependências e segurança

Cada dependência adicionada ao projeto passa a fazer parte da sua **cadeia de suprimentos de software (Software Supply Chain)**.

Se uma biblioteca apresentar uma vulnerabilidade ou for comprometida, o projeto que a utiliza também poderá ser afetado.

Por isso, é importante acompanhar:

* novas versões;
* vulnerabilidades conhecidas (CVEs);
* licenciamento;
* reputação do projeto;
* frequência de manutenção;
* número de mantenedores;
* saúde da comunidade.

Gerenciar dependências tornou-se uma prática fundamental da segurança de software.

## Tipos de dependências

Existem diferentes formas de classificar dependências.

### Dependências diretas

São aquelas declaradas explicitamente pelo projeto.

Por exemplo, em Python:

```text id="l7o0it"
requests==2.32.0
```

Ou em JavaScript:

```text id="k3mvoo"
"express": "^5.0.0"
```

Essas dependências são escolhidas diretamente pela equipe de desenvolvimento.

### Dependências indiretas (transitivas)

São dependências utilizadas por outras dependências.

Por exemplo:

```text id="otys2v"
Minha Aplicação
        │
        ▼
    Biblioteca A
        │
        ▼
    Biblioteca B
```

Mesmo que o projeto utilize apenas a **Biblioteca A**, ele também dependerá da **Biblioteca B**.

Em projetos grandes, a maioria das dependências costuma ser indireta.

## Dependências de desenvolvimento

São utilizadas apenas durante o desenvolvimento do software.

Exemplos incluem:

* frameworks de testes;
* linters;
* formatadores;
* geradores de documentação;
* ferramentas de build.

Exemplos:

* pytest;
* JUnit;
* ESLint;
* Prettier;
* Black.

Essas dependências normalmente não são distribuídas com a aplicação final.

## Dependências de produção

São necessárias para que o software funcione em ambiente de produção.

Exemplos:

* Spring Boot;
* Django;
* Flask;
* Express;
* React;
* SQLAlchemy.

Se essas dependências estiverem ausentes, a aplicação normalmente não consegue executar corretamente.

## Dependências opcionais

Algumas bibliotecas oferecem funcionalidades extras que só são instaladas quando necessário.

Exemplos:

* suporte opcional a banco de dados;
* integração com provedores de autenticação;
* exportação para formatos específicos.

Isso reduz o tamanho da instalação e evita dependências desnecessárias.

## Dependências do sistema

Nem todas as dependências são bibliotecas.

Muitos projetos também dependem de:

* compiladores;
* interpretadores;
* bibliotecas do sistema operacional;
* containers;
* bancos de dados;
* servidores web;
* runtimes.

Por exemplo:

* OpenSSL;
* glibc;
* Java Runtime;
* Python;
* Node.js.

Esses componentes também fazem parte da cadeia de suprimentos do software.

## Dependências Open Source e proprietárias

Projetos podem utilizar diferentes tipos de dependências.

### Open Source

Possuem código-fonte disponível e são distribuídas sob licenças abertas.

Exemplos:

* React;
* PostgreSQL;
* OpenSSL;
* NumPy;
* TensorFlow.

### Proprietárias

São distribuídas sob licenças comerciais ou restritivas.

Exemplos:

* Oracle JDBC Driver;
* SDKs comerciais;
* bibliotecas fornecidas por fabricantes.

## Exemplos

Uma aplicação web desenvolvida em Python pode possuir dependências como:

| Tipo            | Exemplo     |
| --------------- | ----------- |
| Direta          | Django      |
| Direta          | Requests    |
| Indireta        | urllib3     |
| Desenvolvimento | pytest      |
| Desenvolvimento | Black       |
| Sistema         | Python 3.13 |
| Sistema         | OpenSSL     |

Já uma aplicação Node.js pode utilizar:

| Tipo            | Exemplo |
| --------------- | ------- |
| Direta          | Express |
| Direta          | Prisma  |
| Indireta        | debug   |
| Desenvolvimento | ESLint  |
| Desenvolvimento | Jest    |
| Sistema         | Node.js |

## Gerenciadores de dependências

Cada linguagem normalmente possui ferramentas para instalar e gerenciar dependências.

Alguns exemplos incluem:

| Linguagem  | Ferramenta      |
| ---------- | --------------- |
| Python     | pip, Poetry, uv |
| JavaScript | npm, Yarn, pnpm |
| Java       | Maven, Gradle   |
| Go         | Go Modules      |
| Rust       | Cargo           |
| Ruby       | Bundler         |
| PHP        | Composer        |
| .NET       | NuGet           |

Essas ferramentas controlam instalação, atualização e resolução de dependências.

## Riscos relacionados às dependências

Embora tragam inúmeros benefícios, dependências também podem representar riscos.

Entre os mais comuns estão:

* vulnerabilidades conhecidas (CVEs);
* bibliotecas abandonadas;
* licenças incompatíveis;
* atualizações que quebram compatibilidade;
* comprometimento de mantenedores;
* ataques à cadeia de suprimentos;
* dependências transitivas desconhecidas.

Quanto maior o número de dependências, maior tende a ser a superfície de ataque do projeto.

## Boas práticas

Algumas recomendações para gerenciar dependências incluem:

* utilizar apenas dependências realmente necessárias;
* remover bibliotecas não utilizadas;
* manter versões atualizadas;
* acompanhar vulnerabilidades conhecidas;
* revisar novas dependências antes da adoção;
* automatizar atualizações quando possível;
* utilizar arquivos de bloqueio (*lock files*);
* gerar SBOMs;
* monitorar licenças;
* realizar auditorias periódicas.

## Dependências e Supply Chain

As dependências são um dos principais elementos da **cadeia de suprimentos de software**.

Por isso, práticas como geração de **SBOMs**, monitoramento de **CVEs**, utilização de **SLSA**, assinaturas digitais e análise contínua de vulnerabilidades tornaram-se fundamentais para reduzir riscos associados ao desenvolvimento moderno.

Embora reutilizar componentes seja essencial para a produtividade, gerenciar essas dependências de forma adequada é igualmente importante para garantir a segurança, a confiabilidade e a sustentabilidade de qualquer projeto de software.
