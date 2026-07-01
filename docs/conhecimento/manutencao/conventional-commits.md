# Conventional Commits

**Conventional Commits** é uma convenção para padronizar mensagens de commit em projetos de software. Ela define um formato simples e consistente que permite identificar, apenas pela mensagem do commit, o tipo de alteração realizada.

Além de facilitar a leitura do histórico do projeto, esse padrão possibilita a automação de tarefas como geração de changelogs, versionamento semântico (*Semantic Versioning*) e publicação de novas versões.

## Para que serve?

O principal objetivo dos Conventional Commits é tornar o histórico de commits mais organizado, legível e previsível.

Ao seguir um formato padronizado, fica mais fácil:

* entender rapidamente o propósito de cada commit;
* navegar pelo histórico do projeto;
* identificar correções, novas funcionalidades e mudanças incompatíveis;
* automatizar processos de release;
* gerar documentação de alterações.

Esse padrão é especialmente útil em projetos colaborativos e com integração contínua (CI/CD).

## Estrutura de um commit

Um commit seguindo essa convenção possui, em geral, o seguinte formato:

```text
<tipo>[escopo opcional]: <descrição>
```

Por exemplo:

```text
feat(api): adiciona endpoint para exportação de relatórios
```

Também é possível indicar mudanças incompatíveis (*breaking changes*):

```text
feat!: remove suporte à API v1
```

Ou utilizando o rodapé do commit:

```text
BREAKING CHANGE: remove suporte ao formato antigo de configuração
```

## Tipos mais comuns

Os tipos mais utilizados são:

| Tipo       | Significado                                                             |
| ---------- | ----------------------------------------------------------------------- |
| `feat`     | Nova funcionalidade.                                                    |
| `fix`      | Correção de bug.                                                        |
| `docs`     | Alterações na documentação.                                             |
| `style`    | Mudanças de formatação que não alteram o comportamento do código.       |
| `refactor` | Refatoração sem mudança de comportamento.                               |
| `perf`     | Melhorias de desempenho.                                                |
| `test`     | Inclusão ou alteração de testes.                                        |
| `build`    | Mudanças relacionadas ao processo de build ou dependências.             |
| `ci`       | Alterações em pipelines de integração contínua.                         |
| `chore`    | Tarefas de manutenção que não afetam diretamente o código da aplicação. |
| `revert`   | Reversão de commits anteriores.                                         |

Projetos podem definir tipos adicionais conforme suas necessidades.

## Benefícios de utilizar Conventional Commits

A adoção desse padrão oferece diversas vantagens:

* histórico de commits mais organizado;
* maior consistência entre contribuidores;
* melhor comunicação das mudanças realizadas;
* automação do versionamento semântico;
* geração automática de changelogs;
* simplificação do processo de release;
* integração com ferramentas de CI/CD.

Além disso, novos colaboradores conseguem compreender o histórico do projeto com muito mais facilidade.

## Exemplos de uso

Alguns exemplos de mensagens de commit:

```text
feat: adiciona autenticação via OAuth
```

```text
fix(api): corrige validação de tokens expirados
```

```text
docs: atualiza guia de instalação
```

```text
refactor(database): simplifica consultas SQL
```

```text
perf: reduz consumo de memória durante importação
```

```text
test(auth): adiciona testes para autenticação multifator
```

Todos esses exemplos seguem a mesma estrutura, facilitando sua interpretação por pessoas e ferramentas.

## Ferramentas

Diversas ferramentas utilizam ou oferecem suporte aos Conventional Commits.

Entre as mais conhecidas estão:

| Ferramenta           | Descrição                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------- |
| **Commitlint**       | Valida automaticamente se as mensagens de commit seguem o padrão definido.                    |
| **Commitizen**       | Auxilia na criação de commits por meio de perguntas interativas.                              |
| **semantic-release** | Automatiza versionamento, geração de changelog e publicação de releases com base nos commits. |
| **standard-version** | Atualiza versões e gera changelog utilizando Conventional Commits.                            |
| **Release Please**   | Ferramenta do Google para automatizar releases em projetos hospedados no GitHub.              |
| **Git Cliff**        | Pode gerar changelogs estruturados a partir de commits convencionais.                         |

Essas ferramentas são frequentemente integradas a pipelines de integração e entrega contínuas (CI/CD).

## Documentação

A especificação oficial dos Conventional Commits está disponível em:

* **Conventional Commits (Português):** https://www.conventionalcommits.org/pt-br/v1.0.0/

O site apresenta a especificação completa, exemplos e recomendações para adoção do padrão.

## Todo projeto precisa utilizar Conventional Commits?

Não.

Embora sejam uma prática bastante difundida, especialmente em projetos Open Source, sua adoção deve considerar o contexto do projeto.

Em projetos pequenos, pessoais ou experimentais, mantidos por poucas pessoas e com baixo volume de commits, seguir essa convenção pode não trazer benefícios suficientes para justificar a disciplina adicional.

Por outro lado, ela costuma ser altamente recomendada quando o projeto:

* possui vários contribuidores;
* publica releases regularmente;
* utiliza versionamento semântico (*Semantic Versioning*);
* gera changelogs automaticamente;
* utiliza automações de CI/CD;
* possui múltiplos mantenedores;
* depende de um histórico de commits organizado.

Quanto maior o projeto e sua comunidade, maior tende a ser o retorno obtido com a padronização das mensagens de commit.

## Boas práticas

Ao utilizar Conventional Commits, recomenda-se:

* manter a descrição curta e objetiva;
* utilizar o tipo que melhor representa a alteração;
* utilizar escopos (*scopes*) quando fizer sentido;
* evitar commits excessivamente grandes;
* manter consistência entre todos os contribuidores;
* automatizar a validação das mensagens de commit sempre que possível.

