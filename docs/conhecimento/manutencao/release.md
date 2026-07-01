# Release

Uma **release** é uma versão oficialmente publicada de um software. Ela representa um marco no desenvolvimento do projeto, disponibilizando um conjunto específico de funcionalidades, correções e melhorias para usuários e outros desenvolvedores.

Diferentemente dos commits realizados durante o desenvolvimento, uma release corresponde a um estado estável e identificado do projeto, normalmente associado a uma versão, como `1.0.0`, `2.3.1` ou `2026.06`.

Em plataformas como GitHub e GitLab, as releases também costumam incluir notas de versão (*Release Notes*), arquivos para download e referências às mudanças realizadas desde a versão anterior.

## Para que serve?

As releases têm como principal objetivo disponibilizar versões do software de forma organizada e previsível.

Elas permitem:

* distribuir versões estáveis do projeto;
* comunicar novas funcionalidades e correções;
* disponibilizar binários, pacotes ou outros artefatos;
* registrar um ponto específico da evolução do software;
* facilitar atualizações pelos usuários;
* servir como referência para suporte e manutenção.

Em muitos projetos, uma release marca o momento em que uma versão passa a ser recomendada para uso.

## O que normalmente compõe uma release?

Embora varie entre projetos, uma release geralmente inclui:

* número da versão;
* data de publicação;
* notas de versão (*Release Notes*);
* lista de funcionalidades adicionadas;
* correções de bugs;
* mudanças incompatíveis (*breaking changes*);
* arquivos para download (quando aplicável);
* referência ao commit ou tag correspondente.

## Release, tag e commit

Esses conceitos são relacionados, mas não são iguais.

* **Commit:** registra uma alteração no histórico do projeto.
* **Tag:** identifica um commit específico, normalmente marcando uma versão.
* **Release:** é a publicação oficial de uma versão, geralmente baseada em uma tag e acompanhada de documentação e artefatos.

Em plataformas como o GitHub, normalmente cria-se primeiro uma *tag* e, a partir dela, publica-se uma *release*.

## Tipos de release

Os projetos podem adotar diferentes estratégias de versionamento e publicação.

Alguns tipos comuns incluem:

* **Alpha:** versão inicial, voltada para testes internos ou experimentação.
* **Beta:** versão mais estável, aberta para testes por um grupo maior de usuários.
* **Release Candidate (RC):** versão considerada potencialmente pronta para lançamento, aguardando validação final.
* **Stable:** versão estável recomendada para uso em produção.
* **LTS (Long-Term Support):** versão com suporte estendido, recebendo correções por um período maior.

Nem todos os projetos utilizam todas essas classificações.

## Exemplos de uso

As releases fazem parte do fluxo de desenvolvimento de diversos tipos de projetos.

Por exemplo:

* uma biblioteca publica a versão **2.0.0** adicionando novas funcionalidades;
* uma aplicação lança a versão **1.4.3** corrigindo falhas críticas;
* um framework disponibiliza uma **Release Candidate** para que a comunidade realize testes antes do lançamento oficial;
* um sistema operacional publica uma nova versão LTS para ambientes de produção.

Em todos esses casos, a release representa um ponto oficial da evolução do projeto.

## Boas práticas

Ao publicar uma release, é recomendado:

* utilizar um esquema de versionamento consistente (como o **Semantic Versioning**);
* criar uma tag correspondente à versão;
* escrever notas de versão claras e objetivas;
* destacar mudanças incompatíveis;
* informar correções de segurança relevantes;
* disponibilizar os artefatos necessários para instalação ou distribuição;
* manter um histórico público das versões publicadas.

Essas práticas facilitam a adoção do software e ajudam usuários a compreender as mudanças entre versões.

