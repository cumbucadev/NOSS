# CHANGELOG.md

O arquivo **CHANGELOG.md** é utilizado para registrar as mudanças realizadas em um projeto ao longo do tempo. Ele funciona como um histórico das versões publicadas, documentando novas funcionalidades, correções de bugs, mudanças incompatíveis, melhorias e outras alterações relevantes.

Normalmente localizado na raiz do repositório, o changelog facilita o acompanhamento da evolução do projeto por usuários, contribuidores e mantenedores.

## Para que serve?

O principal objetivo de um changelog é comunicar, de forma clara e organizada, o que mudou entre as versões do projeto.

Ele ajuda diferentes públicos:

* **Usuários** podem entender rapidamente quais novidades foram adicionadas antes de atualizar.
* **Contribuidores** conseguem acompanhar a evolução do projeto e identificar mudanças recentes.
* **Mantenedores** possuem um registro centralizado das alterações realizadas ao longo do tempo.
* **Organizações** podem utilizar o histórico para auditorias, rastreabilidade e documentação de releases.

Um bom changelog complementa, mas não substitui, o histórico de commits do Git.

## Benefícios de utilizar um CHANGELOG

Manter um changelog atualizado traz diversas vantagens:

* facilita a comunicação das mudanças entre versões;
* melhora a experiência de quem utiliza o projeto;
* reduz dúvidas durante atualizações;
* auxilia na identificação de mudanças incompatíveis (*breaking changes*);
* simplifica a elaboração de notas de release;
* contribui para a rastreabilidade das alterações;
* serve como documentação histórica do projeto.

## O que registrar?

Embora cada projeto tenha suas próprias necessidades, é comum registrar:

* novas funcionalidades;
* correções de bugs;
* melhorias de desempenho;
* alterações de segurança;
* mudanças incompatíveis (*breaking changes*);
* recursos removidos;
* deprecações;
* atualizações importantes de dependências, quando relevantes para os usuários.

Uma prática comum é organizar as alterações por versão e data de lançamento.

## Formato recomendado

Não existe um formato obrigatório para um changelog, mas um dos padrões mais adotados pela comunidade é o projeto **Keep a Changelog**.

Ele recomenda organizar o arquivo por versões e categorizar as mudanças em seções como:

* Added
* Changed
* Deprecated
* Removed
* Fixed
* Security

Esse formato facilita a leitura e torna o histórico consistente ao longo do tempo.

## Documentação

A principal referência sobre boas práticas para changelogs é:

* **Keep a Changelog (Português):** https://keepachangelog.com/pt-BR/1.1.0/

O projeto descreve a estrutura recomendada, exemplos e orientações para manter um histórico de mudanças útil e consistente.

## Exemplos de uso

Um trecho simplificado de um `CHANGELOG.md` pode ser semelhante ao exemplo abaixo:

```markdown
# Changelog

## [1.2.0] - 2026-05-12

### Added
- Suporte à autenticação via OAuth.

### Changed
- Melhorias na documentação da API.

### Fixed
- Correção de falha na validação de tokens.

## [1.1.0] - 2026-03-08

### Added
- Exportação de relatórios em PDF.
```

Diversos projetos Open Source utilizam changelogs públicos para comunicar suas alterações entre versões.

## Ferramentas

Embora seja possível manter um changelog manualmente, diversas ferramentas podem auxiliar na sua geração ou atualização automática.

Algumas das mais conhecidas são:

| Ferramenta           | Descrição                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Release Drafter**  | Gera automaticamente rascunhos de notas de release a partir de Pull Requests no GitHub.                         |
| **semantic-release** | Automatiza versionamento, geração de changelog e publicação de novas versões com base em Commits Convencionais. |
| **git-cliff**        | Ferramenta para geração automática de changelogs a partir do histórico do Git, altamente configurável.          |
| **standard-version** | Automatiza o versionamento e a atualização do changelog seguindo o padrão Conventional Commits.                 |
| **auto-changelog**   | Gera changelogs automaticamente a partir do histórico de commits e tags do Git.                                 |

Essas ferramentas podem ser integradas a pipelines de CI/CD para reduzir o trabalho manual de manutenção do histórico de versões.

## Todo projeto precisa de um CHANGELOG?

Não necessariamente.

A adoção de um `CHANGELOG.md` deve considerar as características do projeto.

Em projetos pessoais, experimentais ou muito pequenos, mantidos por uma única pessoa e com poucas versões, um changelog pode trazer pouco valor e representar apenas mais um arquivo para manter atualizado.

Por outro lado, ele costuma ser altamente recomendado quando o projeto:

* possui usuários externos;
* recebe contribuições da comunidade;
* publica releases com frequência;
* segue versionamento semântico (*Semantic Versioning*);
* possui múltiplos mantenedores;
* é utilizado por outras aplicações ou bibliotecas;
* precisa comunicar alterações importantes entre versões.

Quanto maior o número de usuários, contribuidores e releases, maior tende a ser o benefício de manter um changelog bem organizado.

## Boas práticas

Ao utilizar um `CHANGELOG.md`, algumas recomendações incluem:

* escreva pensando nos usuários, e não apenas nos desenvolvedores;
* registre apenas mudanças relevantes;
* organize o conteúdo por versões;
* mantenha uma seção para alterações ainda não lançadas (por exemplo, **Unreleased**);
* utilize linguagem clara e objetiva;
* mantenha o changelog atualizado a cada release.

Um changelog bem mantido facilita a evolução do projeto e melhora significativamente a experiência de quem o utiliza ou contribui com seu desenvolvimento.
