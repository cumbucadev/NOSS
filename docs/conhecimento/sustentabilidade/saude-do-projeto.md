# Saúde do Projeto

A **saúde de um projeto** (*Project Health*) é uma forma de avaliar o estado geral de um projeto Open Source. Em vez de analisar apenas o código, a saúde considera diferentes aspectos relacionados ao desenvolvimento, à comunidade, à manutenção e à sustentabilidade do projeto.

Um projeto saudável tende a ser ativo, bem documentado, possuir processos claros, receber contribuições regularmente e oferecer um ambiente acolhedor para usuários e contribuidores.

Por outro lado, um projeto pode ter excelente qualidade técnica, mas apresentar baixa saúde caso dependa de uma única pessoa, esteja sem manutenção ou possua uma comunidade pouco ativa.

## Por que medir a saúde de um projeto?

Avaliar a saúde de um projeto ajuda mantenedores, contribuidores, organizações e usuários a compreender seu estágio de maturidade e identificar oportunidades de melhoria.

Essa avaliação pode ser utilizada para:

* identificar riscos de manutenção;
* acompanhar a evolução do projeto ao longo do tempo;
* orientar investimentos e patrocínios;
* priorizar melhorias;
* aumentar a transparência do projeto;
* facilitar decisões de adoção por empresas e organizações;
* fortalecer a sustentabilidade da comunidade.

Para quem pretende utilizar um projeto Open Source em produção, a saúde do projeto pode ser um fator tão importante quanto suas funcionalidades.

## Como a saúde é mensurada?

Não existe uma única métrica capaz de determinar a saúde de um projeto.

Na prática, ela é avaliada por meio de um conjunto de indicadores técnicos, sociais e organizacionais.

Alguns dos indicadores mais utilizados incluem:

### Atividade

Avalia se o projeto continua sendo desenvolvido.

Exemplos:

* frequência de commits;
* número de releases;
* tempo desde a última atualização;
* atividade recente no repositório.

### Comunidade

Mede o envolvimento das pessoas com o projeto.

Exemplos:

* número de contribuidores;
* novos contribuidores ao longo do tempo;
* diversidade de organizações participantes;
* participação em discussões;
* crescimento da comunidade.

### Manutenção

Avalia como o projeto responde às contribuições.

Exemplos:

* tempo médio para responder Issues;
* tempo médio para revisar Pull Requests;
* tempo até o merge;
* quantidade de Issues abertas e fechadas;
* backlog de Pull Requests.

### Qualidade

Relaciona-se às práticas de desenvolvimento adotadas.

Exemplos:

* existência de testes automatizados;
* cobertura de testes;
* integração contínua;
* documentação;
* políticas de revisão de código;
* automações.

### Sustentabilidade

Avalia a capacidade de continuidade do projeto.

Exemplos:

* quantidade de mantenedores ativos;
* dependência de uma única pessoa (*bus factor*);
* fontes de financiamento;
* governança;
* existência de documentação para novos mantenedores.

### Segurança

Considera práticas relacionadas à segurança do projeto.

Exemplos:

* correção de vulnerabilidades;
* política de divulgação responsável;
* arquivo `SECURITY.md`;
* análise automática de dependências;
* assinatura de artefatos.

## Benefícios de acompanhar a saúde do projeto

Monitorar esses indicadores permite:

* detectar problemas antes que se tornem críticos;
* reduzir dependências excessivas de indivíduos;
* melhorar a experiência de novos contribuidores;
* identificar gargalos no processo de desenvolvimento;
* aumentar a confiança de usuários e organizações;
* apoiar decisões estratégicas da comunidade;
* demonstrar maturidade para financiadores e patrocinadores.

Em projetos maiores, essas métricas também podem orientar a definição de metas e indicadores de desempenho.

## Ferramentas

Diversas ferramentas auxiliam na avaliação da saúde de projetos Open Source.

Entre as mais conhecidas estão:

| Ferramenta                       | Descrição                                                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **CHAOSS**                       | Projeto da Linux Foundation que define métricas e modelos para medir saúde de comunidades e projetos Open Source. |
| **GrimoireLab**                  | Plataforma para coleta, processamento e visualização de métricas de projetos Open Source.                         |
| **Augur**                        | Ferramenta de análise de comunidades Open Source desenvolvida pela CHAOSS.                                        |
| **Bitergia Analytics**           | Plataforma comercial baseada no GrimoireLab para análise de comunidades e projetos.                               |
| **OpenSSF Scorecard**            | Avalia automaticamente práticas de segurança em projetos Open Source.                                             |
| **OpenSSF Best Practices Badge** | Verifica a adoção de boas práticas de desenvolvimento e segurança.                                                |
| **GitHub Insights**              | Disponibiliza métricas sobre contribuidores, Pull Requests, Issues e atividade do repositório.                    |

Cada ferramenta possui objetivos diferentes e costuma analisar apenas parte da saúde do projeto.

## Exemplos de projetos

Diversos projetos Open Source acompanham indicadores de saúde e publicam essas informações de forma transparente.

Alguns exemplos incluem:

* **Kubernetes**, que utiliza métricas da comunidade para acompanhar contribuidores, revisões e governança;
* **Node.js**, que publica informações sobre colaboradores, grupos de trabalho e atividade do projeto;
* **Python**, que acompanha contribuições, releases e processos de governança;
* **Apache Software Foundation**, cujos projetos seguem processos de avaliação contínua da saúde de suas comunidades;
* projetos da **CNCF**, que frequentemente utilizam métricas da CHAOSS e da OpenSSF para apoiar decisões de governança.

Além disso, diversas organizações utilizam métricas de saúde para decidir quais projetos adotar, apoiar financeiramente ou incorporar em seus produtos.

## A saúde do projeto não é um número

É importante destacar que a saúde de um projeto não pode ser resumida a uma única métrica ou pontuação.

Por exemplo:

* um projeto pode ter milhares de estrelas no GitHub e ainda assim possuir poucos mantenedores ativos;
* um projeto pequeno pode ter poucos contribuidores, mas excelente documentação, governança e tempo de resposta;
* um projeto antigo pode apresentar pouca atividade porque já atingiu um alto grau de estabilidade.

Por isso, a saúde deve ser analisada considerando diferentes dimensões e o contexto do projeto.

## Saúde como melhoria contínua

Mais do que classificar projetos como "saudáveis" ou "não saudáveis", o monitoramento da saúde deve servir como uma ferramenta de melhoria contínua.

Ao acompanhar indicadores ao longo do tempo, mantenedores conseguem identificar tendências, corrigir problemas, fortalecer a comunidade e aumentar a sustentabilidade do projeto, contribuindo para sua longevidade e sucesso.
