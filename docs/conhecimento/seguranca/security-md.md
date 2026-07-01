# SECURITY.md

O **SECURITY.md** é um arquivo utilizado para documentar a política de segurança de um projeto de software. Ele informa como vulnerabilidades de segurança devem ser reportadas, quais versões do projeto recebem correções e quais são as expectativas para o processo de tratamento dessas vulnerabilidades.

Esse arquivo normalmente fica na raiz do repositório ou no diretório `.github` e serve como o principal ponto de contato para pesquisadores de segurança, usuários e contribuidores que desejam reportar problemas relacionados à segurança.

Embora seja comum em projetos Open Source, o `SECURITY.md` também é amplamente utilizado em projetos internos e produtos comerciais.

## Para que serve?

O principal objetivo do `SECURITY.md` é orientar a divulgação responsável (*Responsible Disclosure*) de vulnerabilidades.

Sem esse documento, pesquisadores podem não saber:

* como entrar em contato com os mantenedores;
* se devem abrir uma Issue pública;
* qual canal utilizar para reportar vulnerabilidades;
* quais versões ainda recebem correções;
* qual o prazo esperado para resposta.

O `SECURITY.md` centraliza essas informações e reduz a chance de uma vulnerabilidade ser divulgada publicamente antes da disponibilidade de uma correção.

## O que normalmente contém?

Embora não exista um formato obrigatório, um `SECURITY.md` costuma incluir:

* política para reporte de vulnerabilidades;
* canais oficiais de contato;
* endereço de e-mail para incidentes de segurança;
* instruções para divulgação responsável;
* versões atualmente suportadas;
* política de atualização de segurança;
* prazo esperado para resposta;
* informações sobre divulgação pública.

Alguns projetos também informam:

* programa de *bug bounty*;
* uso de criptografia (como chaves PGP);
* política de CVEs;
* processo interno de tratamento de incidentes.

## Qual a importância?

Ter uma política de segurança bem definida traz benefícios para toda a comunidade.

Entre eles:

* facilita o reporte responsável de vulnerabilidades;
* reduz a exposição pública de falhas antes da correção;
* melhora a comunicação entre pesquisadores e mantenedores;
* aumenta a confiança dos usuários;
* demonstra maturidade do projeto;
* facilita auditorias e avaliações de segurança;
* atende recomendações da OpenSSF e de diversas organizações.

Hoje, muitos projetos Open Source considerados maduros possuem um `SECURITY.md`.

## Exemplo de estrutura

Um `SECURITY.md` simples pode conter informações como:

```markdown id="pvj0pd"
# Política de Segurança

## Versões suportadas

| Versão | Suporte |
|---------|----------|
| 2.x | ✅ |
| 1.x | ✅ |
| < 1.0 | ❌ |

## Reportando uma vulnerabilidade

Não reporte vulnerabilidades utilizando Issues públicas.

Envie um e-mail para:

security@example.org

Responderemos em até cinco dias úteis.
```

Projetos maiores normalmente incluem políticas mais detalhadas.

## Casos reais

Diversos projetos Open Source utilizam o `SECURITY.md` como principal canal para recebimento de relatos de segurança.

Entre eles:

* Kubernetes;
* Node.js;
* Python;
* Rust;
* React;
* Django;
* PostgreSQL;
* Git.

Nesses projetos, pesquisadores são orientados a utilizar canais privados para reportar vulnerabilidades antes de qualquer divulgação pública.

Essa prática permite que os mantenedores investiguem o problema, desenvolvam uma correção e publiquem uma atualização antes que a vulnerabilidade seja amplamente explorada.

## O que pode acontecer sem um SECURITY.md?

A ausência desse documento pode gerar diversos problemas.

Por exemplo:

* pesquisadores podem abrir Issues públicas expondo vulnerabilidades;
* vulnerabilidades podem ser divulgadas antes da existência de uma correção;
* mantenedores podem deixar de receber relatos importantes;
* usuários podem não saber quais versões ainda recebem atualizações de segurança;
* organizações podem considerar o projeto menos maduro sob a perspectiva de segurança.

Embora não elimine esses riscos, o `SECURITY.md` ajuda a reduzir significativamente esse tipo de situação.

## Ferramentas e plataformas

Diversas plataformas oferecem recursos relacionados ao `SECURITY.md`.

| Ferramenta                     | Descrição                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| **GitHub**                     | Exibe automaticamente a política de segurança do projeto quando um `SECURITY.md` está presente. |
| **GitLab**                     | Também reconhece o arquivo e o utiliza como referência para segurança do projeto.               |
| **OpenSSF Scorecard**          | Verifica automaticamente se o repositório possui um `SECURITY.md`.                              |
| **GitHub Security Advisories** | Permite gerenciar vulnerabilidades reportadas de forma privada.                                 |
| **Dependabot**                 | Integra-se ao fluxo de tratamento de vulnerabilidades no GitHub.                                |

Essas ferramentas ajudam organizações a avaliar a maturidade da segurança de um projeto.

## Todo projeto precisa de um SECURITY.md?

Depende.

Projetos pessoais, experimentais ou utilizados apenas localmente podem não precisar de uma política formal de segurança.

Por outro lado, um `SECURITY.md` é fortemente recomendado quando o projeto:

* possui usuários externos;
* aceita contribuições da comunidade;
* publica releases regularmente;
* é utilizado em produção;
* distribui bibliotecas ou frameworks;
* é utilizado por empresas ou órgãos públicos.

Mesmo para projetos pequenos, um documento simples com um endereço de contato costuma ser suficiente para orientar pesquisadores.

## Boas práticas

Ao criar um `SECURITY.md`, recomenda-se:

* informar claramente como vulnerabilidades devem ser reportadas;
* evitar Issues públicas para relatos de segurança;
* manter uma lista atualizada de versões suportadas;
* responder rapidamente aos pesquisadores;
* definir um processo de divulgação responsável;
* manter o documento atualizado conforme o projeto evolui;
* utilizar um endereço de e-mail específico para segurança, sempre que possível.

## SECURITY.md e Open Source

Nos últimos anos, o `SECURITY.md` deixou de ser apenas uma boa prática e passou a ser considerado um importante indicador de maturidade em projetos Open Source.

Ele facilita a colaboração entre pesquisadores de segurança e mantenedores, melhora a resposta a incidentes e contribui para um ecossistema mais seguro e confiável, tornando-se uma recomendação comum de iniciativas como a **OpenSSF**, a **CISA** e diversas organizações envolvidas com segurança da cadeia de suprimentos de software.
