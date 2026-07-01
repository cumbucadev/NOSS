# Sustentabilidade Técnica

A **sustentabilidade técnica** é a capacidade de um projeto FLOSS (Free/Libre and Open Source Software) de continuar evoluindo, sendo mantido e permanecendo utilizável ao longo do tempo do ponto de vista tecnológico.

Ela está relacionada à qualidade da base de código, à arquitetura, à documentação técnica, às ferramentas utilizadas e aos processos de desenvolvimento que permitem que o projeto continue sendo desenvolvido por diferentes pessoas durante seu ciclo de vida.

Em outras palavras, um projeto tecnicamente sustentável é aquele que consegue evoluir sem que cada nova alteração torne sua manutenção progressivamente mais difícil.

## Por que ela é importante?

Todo software acumula mudanças ao longo do tempo.

Novas funcionalidades são adicionadas, bugs são corrigidos, dependências evoluem e novas tecnologias surgem. Sem uma base técnica saudável, cada alteração passa a exigir mais esforço, aumentando o custo de manutenção e reduzindo a capacidade de evolução do projeto.

A sustentabilidade técnica ajuda a garantir que o projeto permaneça:

* fácil de manter;
* fácil de compreender;
* fácil de testar;
* fácil de evoluir;
* seguro;
* confiável;
* preparado para receber novas contribuições.

Ela beneficia tanto as pessoas mantenedoras quanto quem deseja contribuir pela primeira vez.

## Sustentabilidade técnica vs. manutenção

Embora estejam diretamente relacionadas, **manutenção** e **sustentabilidade técnica** não são sinônimos.

A **manutenção** corresponde às atividades realizadas para manter um projeto funcionando e evoluindo no dia a dia. Isso inclui corrigir bugs, revisar Pull Requests, responder Issues, atualizar dependências, publicar releases, melhorar a documentação e implementar novas funcionalidades.

Já a **sustentabilidade técnica** diz respeito à capacidade do projeto de continuar sendo mantido de forma eficiente ao longo do tempo. Ela está relacionada às características da base técnica do projeto que tornam a manutenção mais simples, segura e sustentável.

Em outras palavras:

* **Manutenção** responde à pergunta: *"O que precisamos fazer para manter o projeto funcionando hoje?"*
* **Sustentabilidade técnica** responde à pergunta: *"O projeto está preparado para continuar sendo mantido daqui a cinco ou dez anos?"*

Um projeto pode receber manutenção constante e, ainda assim, apresentar baixa sustentabilidade técnica. Isso acontece, por exemplo, quando possui:

* arquitetura pouco organizada;
* documentação insuficiente;
* ausência de testes automatizados;
* alta dívida técnica;
* forte acoplamento entre componentes;
* dependência excessiva de pessoas específicas.

Nesses casos, cada nova alteração tende a exigir mais tempo e esforço, aumentando gradualmente o custo de manutenção.

Por outro lado, um projeto com boa sustentabilidade técnica normalmente possui uma arquitetura bem definida, testes automatizados, documentação atualizada, processos padronizados e automações que facilitam o trabalho das pessoas mantenedoras. Como consequência, a manutenção torna-se mais simples, previsível e menos suscetível a erros.

| Manutenção                                | Sustentabilidade Técnica                                                      |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| Foco nas atividades do dia a dia.         | Foco na capacidade de evolução do projeto ao longo do tempo.                  |
| Corrige problemas e implementa melhorias. | Cria condições para que essas atividades sejam realizadas de forma eficiente. |
| É um conjunto de atividades contínuas.    | É uma característica da base técnica do projeto.                              |
| Atua principalmente no presente.          | Considera principalmente o longo prazo.                                       |

A manutenção e a sustentabilidade técnica são complementares. Enquanto a manutenção garante que o projeto continue funcionando hoje, a sustentabilidade técnica busca garantir que ele possa continuar sendo mantido de forma saudável, eficiente e sustentável nos próximos anos.

## Componentes da sustentabilidade técnica

Diversos fatores contribuem para a sustentabilidade técnica de um projeto FLOSS.

### Arquitetura

Uma arquitetura bem definida facilita a evolução do software.

Ela deve favorecer:

* separação de responsabilidades;
* baixo acoplamento;
* alta coesão;
* modularidade;
* facilidade de extensão.

Uma boa arquitetura reduz o impacto de mudanças futuras.

### Qualidade do código

Código limpo e consistente facilita a manutenção.

Algumas práticas importantes incluem:

* nomenclatura clara;
* organização consistente;
* remoção de código morto;
* refatorações periódicas;
* adoção de padrões de codificação.

O objetivo é tornar o código compreensível para qualquer pessoa da comunidade.

### Documentação técnica

Boa documentação reduz a dependência do conhecimento de indivíduos.

Ela pode incluir:

* arquitetura do sistema;
* decisões técnicas;
* APIs;
* processos de desenvolvimento;
* instruções para ambiente local;
* documentação para contribuidores.

Projetos bem documentados costumam receber novas contribuições com mais facilidade.

### Testes automatizados

Testes ajudam a garantir que alterações não introduzam regressões.

Entre os principais tipos estão:

* testes unitários;
* testes de integração;
* testes funcionais;
* testes end-to-end.

Quanto maior a cobertura de testes relevantes, maior tende a ser a confiança na evolução do software.

### Integração Contínua (CI)

Automatizar verificações reduz erros humanos e melhora a qualidade do projeto.

Pipelines de CI costumam executar:

* testes;
* linters;
* análise estática;
* geração de documentação;
* verificações de segurança.

Isso ajuda a identificar problemas antes que eles cheguem à branch principal.

### Gerenciamento de dependências

Projetos sustentáveis acompanham regularmente suas dependências.

Isso envolve:

* atualizar bibliotecas;
* remover dependências obsoletas;
* monitorar vulnerabilidades;
* evitar dependências desnecessárias.

Uma gestão adequada reduz riscos de segurança e facilita futuras atualizações.

### Versionamento e releases

Versionar corretamente o software facilita sua utilização e manutenção.

Práticas comuns incluem:

* Semantic Versioning;
* CHANGELOG.md;
* Git Tags;
* Releases documentadas.

Esses elementos tornam a evolução do projeto mais previsível.

### Automação

Automatizar tarefas repetitivas reduz trabalho manual e diminui a possibilidade de erros.

Alguns exemplos:

* publicação de releases;
* atualização de dependências;
* geração de documentação;
* análise de segurança;
* geração de SBOMs.

## O que acontece quando ela não existe?

A ausência de sustentabilidade técnica pode causar diversos problemas.

Entre eles:

* aumento contínuo da dívida técnica;
* código difícil de entender e modificar;
* arquitetura cada vez mais complexa;
* regressões frequentes;
* dificuldade para adicionar novas funcionalidades;
* maior tempo para corrigir bugs;
* dependências desatualizadas e vulneráveis;
* dificuldade para receber novas contribuições;
* perda de produtividade da equipe;
* aumento do custo de manutenção;
* maior dependência de pessoas específicas;
* risco de abandono do projeto.

Com o tempo, pequenas mudanças passam a exigir grande esforço, tornando o projeto cada vez mais difícil de manter.

## Exemplos de práticas

Diversos projetos Open Source adotam práticas voltadas para fortalecer sua sustentabilidade técnica.

Entre elas:

* revisão de código (*Code Review*);
* uso de testes automatizados;
* integração contínua (CI);
* entrega contínua (CD);
* documentação técnica atualizada;
* automação de releases;
* monitoramento de dependências;
* utilização de linters e formatadores;
* geração automática de documentação;
* monitoramento da saúde do projeto;
* refatorações contínuas;
* definição de padrões de arquitetura.

Essas práticas reduzem o custo de manutenção e aumentam a capacidade de evolução do projeto.

## Ferramentas

Algumas ferramentas frequentemente utilizadas incluem:

| Categoria           | Exemplos                              |
| ------------------- | ------------------------------------- |
| Controle de versão  | Git                                   |
| CI/CD               | GitHub Actions, GitLab CI/CD, Jenkins |
| Testes              | pytest, JUnit, Jest, Go Test          |
| Qualidade de código | SonarQube, ESLint, Ruff, Pylint       |
| Formatação          | Prettier, Black, gofmt, rustfmt       |
| Dependências        | Dependabot, Renovate                  |
| Segurança           | Trivy, Snyk, Grype                    |
| Documentação        | MkDocs, Docusaurus, Sphinx            |

Cada projeto utiliza apenas parte dessas ferramentas, conforme sua linguagem, porte e necessidades.

## Relação com outros tipos de sustentabilidade

A sustentabilidade técnica está diretamente conectada às demais dimensões da sustentabilidade de um projeto FLOSS.

Por exemplo:

* uma boa documentação fortalece a sustentabilidade comunitária ao facilitar a entrada de novas pessoas;
* automações reduzem tarefas repetitivas, contribuindo para a sustentabilidade humana;
* processos técnicos maduros fortalecem a sustentabilidade organizacional;
* boas práticas de segurança reduzem riscos e aumentam a confiabilidade do projeto;
* uma base técnica sólida facilita a obtenção de apoio financeiro e a adoção por organizações.

Essas dimensões são complementares e se fortalecem mutuamente.

## Sustentabilidade técnica e dívida técnica

Um dos principais desafios para a sustentabilidade técnica é a **dívida técnica**.

Ela representa decisões que aceleram o desenvolvimento no curto prazo, mas aumentam o esforço necessário para evoluir o projeto no futuro.

Exemplos incluem:

* código duplicado;
* ausência de testes;
* documentação desatualizada;
* dependências antigas;
* arquitetura pouco organizada;
* soluções temporárias que nunca foram revisadas.

Embora alguma dívida técnica seja inevitável, projetos sustentáveis procuram monitorá-la e reduzi-la continuamente por meio de refatorações, melhorias de arquitetura e atualização de processos.

## Sustentabilidade técnica é um investimento contínuo

A sustentabilidade técnica não é uma atividade realizada apenas no início do projeto nem um objetivo que se alcança de uma vez por todas. Ela depende de melhorias contínuas, revisão de processos, atualização de ferramentas e investimento constante na qualidade do software.

Projetos FLOSS que priorizam sua sustentabilidade técnica conseguem evoluir com mais facilidade, adaptar-se a novas tecnologias, receber contribuições de diferentes pessoas e permanecer relevantes por muitos anos. Mais do que facilitar a manutenção do presente, a sustentabilidade técnica cria as condições para que o projeto continue saudável, evoluindo e gerando valor para sua comunidade no futuro.
