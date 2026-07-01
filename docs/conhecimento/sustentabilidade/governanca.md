# Governança

A **governança** é o conjunto de processos, regras, papéis e mecanismos que definem **como um projeto FLOSS (Free/Libre and Open Source Software) é administrado e como suas decisões são tomadas**.

Ela estabelece quem pode tomar decisões, como novos mantenedores são escolhidos, como conflitos são resolvidos, quais processos devem ser seguidos e como a comunidade participa da evolução do projeto.

Em outras palavras, a governança define **como o projeto funciona enquanto organização**, e não apenas como seu software é desenvolvido.

Embora pequenos projetos possam operar de maneira informal, à medida que uma comunidade cresce, uma governança clara torna-se essencial para garantir transparência, previsibilidade e continuidade.

## Por que a governança é importante?

Projetos Open Source envolvem pessoas com diferentes interesses, experiências e níveis de participação.

Sem regras claras, perguntas como estas podem surgir:

* Quem decide quais funcionalidades serão implementadas?
* Como novos mantenedores são escolhidos?
* Quem pode aprovar Pull Requests?
* Como divergências técnicas são resolvidas?
* Como a comunidade participa das decisões?
* O que acontece quando um mantenedor deixa o projeto?

Uma boa governança ajuda a responder essas questões de forma transparente.

Entre seus principais benefícios estão:

* clareza na tomada de decisões;
* transparência;
* distribuição de responsabilidades;
* redução da dependência de indivíduos;
* formação de novas lideranças;
* continuidade do projeto;
* maior confiança da comunidade;
* facilidade para entrada de novos mantenedores.

## Componentes da governança

Cada projeto possui sua própria estrutura, mas alguns componentes são bastante comuns.

### Papéis e responsabilidades

Definem quem exerce determinadas funções dentro do projeto.

Alguns papéis comuns incluem:

* mantenedores;
* contribuidores;
* revisores;
* comitês técnicos;
* conselho diretor;
* líderes de módulos;
* grupos de trabalho (*Working Groups*).

### Processo de tomada de decisão

Define como decisões são tomadas.

Por exemplo:

* consenso;
* votação;
* decisão dos mantenedores;
* decisão de um comitê técnico.

### Processo de contribuição

Estabelece como novas contribuições são avaliadas, revisadas e incorporadas ao projeto.

Normalmente envolve documentos como:

* `CONTRIBUTING.md`;
* `CODEOWNERS`;
* guias de revisão.

### Código de Conduta

Ajuda a definir expectativas de comportamento e mecanismos para lidar com conflitos.

### Comunicação

Uma governança saudável também estabelece:

* canais oficiais;
* frequência de reuniões;
* publicação de atas;
* transparência das decisões.

### Documentação

As regras de governança devem ser públicas e facilmente acessíveis.

Isso facilita o onboarding de novas pessoas e reduz ambiguidades.

## Modelos de governança

Não existe um único modelo de governança para projetos Open Source.

Cada comunidade escolhe o modelo que melhor atende às suas necessidades.

### BDFL (Benevolent Dictator For Life)

Nesse modelo, uma pessoa possui a palavra final sobre decisões técnicas e estratégicas.

Embora a comunidade participe ativamente das discussões, a decisão final pertence ao BDFL.

**Vantagens**

* decisões rápidas;
* direção técnica consistente;
* baixa burocracia.

**Desafios**

* forte dependência de uma única pessoa;
* sucessão pode ser difícil;
* menor distribuição de poder.

**Exemplos**

* Python (até 2018, sob Richard Stallman? Não, corrigindo: sob **Guido van Rossum**);
* Linux (Linus Torvalds mantém um modelo semelhante para decisões técnicas do kernel).

> **Observação:** O Python deixou de adotar esse modelo em 2018.

---

### Meritocracia

Pessoas conquistam maior influência conforme demonstram contribuições consistentes ao projeto.

Quanto maior o envolvimento e a confiança adquirida, maiores costumam ser suas responsabilidades.

**Vantagens**

* incentiva participação contínua;
* distribui liderança;
* favorece crescimento orgânico da comunidade.

**Desafios**

* critérios podem ser pouco claros;
* pode favorecer apenas quem possui maior disponibilidade de tempo.

**Exemplos**

* Apache Software Foundation;
* Eclipse Foundation;
* diversos projetos Apache.

---

### Comitê Técnico (Technical Steering Committee)

As decisões técnicas são tomadas por um grupo de pessoas, normalmente eleito ou indicado.

O comitê representa diferentes áreas do projeto.

**Vantagens**

* decisões compartilhadas;
* redução da dependência de indivíduos;
* maior diversidade de opiniões.

**Desafios**

* decisões podem levar mais tempo;
* exige boa coordenação entre membros.

**Exemplos**

* Kubernetes;
* Node.js;
* OpenTelemetry.

---

### Conselho Diretor (Board Governance)

Além de decisões técnicas, existe um conselho responsável por aspectos administrativos, financeiros e estratégicos.

Esse modelo é comum em projetos vinculados a fundações.

**Vantagens**

* separação entre decisões técnicas e institucionais;
* maior transparência;
* facilidade para gestão financeira.

**Exemplos**

* Python Software Foundation;
* GNOME Foundation;
* The Document Foundation;
* Eclipse Foundation.

---

### Governança por Fundação

Uma fundação administra aspectos legais, financeiros e institucionais do projeto, enquanto a comunidade mantém autonomia técnica.

A fundação normalmente:

* gerencia marcas registradas;
* recebe doações;
* organiza eventos;
* firma contratos;
* apoia projetos da comunidade.

**Exemplos**

* Linux Foundation;
* Apache Software Foundation;
* CNCF;
* Mozilla Foundation.

---

### Governança Corporativa

Uma empresa controla o desenvolvimento do projeto, embora contribuições externas sejam aceitas.

As decisões estratégicas permanecem sob responsabilidade da organização mantenedora.

**Vantagens**

* maior disponibilidade de recursos;
* desenvolvimento consistente;
* financiamento estável.

**Desafios**

* menor independência da comunidade;
* possíveis conflitos entre interesses comerciais e comunitários.

**Exemplos**

* React (Meta);
* Angular (Google);
* VS Code (Microsoft);
* Flutter (Google).

---

### Governança Comunitária

A comunidade participa diretamente das decisões por meio de discussões abertas, consenso ou votações.

Normalmente há forte incentivo à participação distribuída.

**Vantagens**

* alta participação da comunidade;
* decisões transparentes;
* menor concentração de poder.

**Desafios**

* processos podem ser mais lentos;
* exige comunidades maduras.

**Exemplos**

* Debian;
* Fedora;
* Gentoo.

## Exemplos de modelos utilizados

| Projeto            | Modelo predominante                                              |
| ------------------ | ---------------------------------------------------------------- |
| Linux Kernel       | BDFL técnico (Linus Torvalds) com mantenedores distribuídos.     |
| Python             | Comitê Diretor (*Steering Council*).                             |
| Kubernetes         | Comitês técnicos e grupos de trabalho.                           |
| Apache HTTP Server | Meritocracia (Apache Software Foundation).                       |
| Debian             | Governança comunitária com líder eleito e votação da comunidade. |
| Fedora             | Governança comunitária apoiada pela Red Hat.                     |
| React              | Governança corporativa (Meta).                                   |
| Angular            | Governança corporativa (Google).                                 |
| VS Code            | Governança corporativa (Microsoft).                              |
| LibreOffice        | Fundação (The Document Foundation).                              |
| GNOME              | Fundação (GNOME Foundation).                                     |

Na prática, muitos projetos combinam elementos de diferentes modelos.

## O que acontece quando não existe governança?

A ausência de governança pode gerar diversos problemas.

Entre eles:

* decisões inconsistentes;
* conflitos entre mantenedores;
* falta de transparência;
* concentração excessiva de poder;
* dificuldade para formar novas lideranças;
* abandono do projeto após a saída de pessoas-chave;
* demora na tomada de decisões;
* perda de confiança da comunidade.

À medida que o projeto cresce, esses problemas tendem a se tornar mais frequentes.

## Como definir uma governança?

Não existe uma fórmula única.

A governança deve evoluir conforme o projeto cresce.

Um projeto iniciado por uma única pessoa pode começar com processos bastante simples e, posteriormente, incorporar:

* novos mantenedores;
* grupos de trabalho;
* comitês;
* eleições;
* políticas de contribuição;
* documentação formal.

O importante é que as regras sejam claras, transparentes e conhecidas pela comunidade.

## Boas práticas

Independentemente do modelo adotado, algumas recomendações incluem:

* documentar a governança;
* definir claramente papéis e responsabilidades;
* tornar as decisões transparentes;
* registrar decisões importantes;
* incentivar a formação de novas lideranças;
* revisar periodicamente o modelo de governança;
* evitar dependência excessiva de indivíduos.

## Governança e sustentabilidade

A governança é um dos pilares da sustentabilidade de um projeto FLOSS.

Ela está diretamente relacionada à sustentabilidade comunitária, financeira e técnica, ajudando a distribuir responsabilidades, preservar conhecimento e garantir a continuidade do projeto ao longo do tempo.

Projetos com uma governança bem definida tendem a ser mais resilientes, inspirar maior confiança em usuários e organizações e adaptar-se com mais facilidade ao crescimento da comunidade e às mudanças do ecossistema Open Source.
