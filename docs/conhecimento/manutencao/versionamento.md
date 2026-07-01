# Versionamento

O **versionamento** é a prática de identificar diferentes estados de um software por meio de números ou identificadores de versão. Cada nova versão representa um conjunto específico de funcionalidades, correções, melhorias ou outras alterações realizadas no projeto.

Versionar um software permite que usuários e desenvolvedores saibam exatamente qual versão está sendo utilizada, facilitando atualizações, manutenção, distribuição e compatibilidade entre diferentes sistemas.

O versionamento é uma prática adotada por praticamente todos os projetos de software, independentemente do seu tamanho.

## Para que serve?

O versionamento ajuda a organizar a evolução do software ao longo do tempo.

Entre seus principais objetivos estão:

* identificar versões publicadas;
* comunicar mudanças entre releases;
* facilitar atualizações;
* controlar compatibilidade entre versões;
* simplificar a distribuição de software;
* permitir que dependências especifiquem versões compatíveis;
* facilitar manutenção e suporte.

Sem um sistema de versionamento, torna-se difícil saber quais funcionalidades ou correções estão presentes em determinada versão do software.

## Tipos de versionamento

Existem diferentes estratégias para definir números de versão.

Algumas das mais utilizadas incluem:

### Versionamento Sequencial

Cada nova versão recebe um número incremental.

Exemplos:

* 1
* 2
* 3
* 4

É um modelo simples, mas transmite pouca informação sobre o tipo de mudança realizada.

### Versionamento baseado em datas

A versão é identificada pela data de publicação.

Exemplos:

* 2026.06
* 2026.06.30
* 24.10

É comum em distribuições Linux e em alguns produtos comerciais.

### Semantic Versioning

O **Semantic Versioning (SemVer)** é atualmente o modelo mais adotado em projetos Open Source e ecossistemas de gerenciamento de dependências.

Ele permite que o número da versão comunique o impacto das mudanças realizadas.

## Semantic Versioning

O **Semantic Versioning**, ou **SemVer**, define um padrão para numeração de versões utilizando três números:

```text id="2q1d8q"
MAJOR.MINOR.PATCH
```

Por exemplo:

```text id="hjlwmk"
2.14.3
```

Cada parte possui um significado específico:

### MAJOR

Incrementado quando são realizadas mudanças incompatíveis (*breaking changes*).

Exemplo:

```text id="ijjlwm"
1.5.0 → 2.0.0
```

### MINOR

Incrementado quando novas funcionalidades são adicionadas de forma compatível com versões anteriores.

Exemplo:

```text id="8v2ajy"
2.3.0 → 2.4.0
```

### PATCH

Incrementado para correções de bugs ou pequenas melhorias compatíveis.

Exemplo:

```text id="t0ocvm"
2.4.1 → 2.4.2
```

O SemVer também prevê identificadores opcionais para versões de pré-lançamento (*alpha*, *beta*, *rc*) e metadados de build.

## Benefícios do Semantic Versioning

A adoção do SemVer oferece diversas vantagens:

* comunica claramente o impacto das mudanças;
* facilita atualizações por usuários;
* reduz problemas de compatibilidade;
* melhora o gerenciamento de dependências;
* simplifica processos de release;
* permite automações em pipelines de CI/CD;
* integra-se facilmente com gerenciadores de pacotes.

Por esses motivos, o SemVer tornou-se um padrão de fato em diversos ecossistemas de desenvolvimento.

## Documentação

A especificação oficial do Semantic Versioning está disponível em:

* **Semantic Versioning (Português):** https://semver.org/lang/pt-BR/

O site apresenta a especificação completa, exemplos e recomendações para adoção do padrão.

## Benefícios de utilizar versionamento

Independentemente do esquema adotado, manter versões bem definidas traz diversas vantagens:

* facilita a comunicação entre desenvolvedores e usuários;
* organiza a evolução do projeto;
* melhora a rastreabilidade das alterações;
* simplifica o suporte a versões anteriores;
* permite identificar rapidamente quando uma funcionalidade foi introduzida;
* auxilia na manutenção de bibliotecas e APIs;
* melhora a previsibilidade das atualizações.

## Exemplos de uso

Alguns exemplos de evolução de versões:

| Mudança                        | Exemplo         |
| ------------------------------ | --------------- |
| Correção de bug                | `1.2.3 → 1.2.4` |
| Nova funcionalidade compatível | `1.2.3 → 1.3.0` |
| Mudança incompatível           | `1.2.3 → 2.0.0` |
| Primeira versão estável        | `1.0.0`         |
| Versão de testes               | `2.0.0-beta.1`  |
| Release Candidate              | `2.0.0-rc.2`    |

Esses exemplos seguem o padrão Semantic Versioning, mas outros esquemas de versionamento podem utilizar formatos diferentes.

## Ferramentas

Diversas ferramentas auxiliam no gerenciamento de versões e releases.

Entre as mais utilizadas estão:

| Ferramenta           | Descrição                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------- |
| **semantic-release** | Automatiza a definição da próxima versão, geração de changelog e publicação de releases com base nos commits. |
| **Release Please**   | Ferramenta do Google para automação de releases em projetos GitHub.                                           |
| **standard-version** | Atualiza automaticamente a versão do projeto e o changelog.                                                   |
| **Changesets**       | Gerencia mudanças, versionamento e releases, especialmente em monorepositórios.                               |
| **GitVersion**       | Calcula automaticamente versões a partir do histórico do Git.                                                 |
| **GitHub Releases**  | Permite publicar versões oficiais associadas a tags do Git.                                                   |

Essas ferramentas são frequentemente integradas a pipelines de CI/CD para automatizar o processo de publicação.

## Todo projeto precisa utilizar Semantic Versioning?

Não.

O Semantic Versioning é amplamente recomendado para bibliotecas, frameworks, APIs e outros projetos que possuem usuários ou dependências externas, pois comunica claramente o impacto das mudanças entre versões.

No entanto, alguns projetos podem se beneficiar de outras estratégias.

Por exemplo:

* aplicações internas que são implantadas continuamente podem utilizar apenas identificadores de build;
* distribuições Linux frequentemente utilizam versões baseadas em datas;
* projetos experimentais ou pessoais podem optar por um esquema mais simples.

O mais importante é adotar um sistema de versionamento consistente e documentado, para que usuários e contribuidores compreendam como novas versões são publicadas e o que cada número representa.
