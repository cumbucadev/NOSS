# SLSA

**SLSA** (pronuncia-se *"salsa"*) é a sigla para **Supply-chain Levels for Software Artifacts**. Trata-se de um conjunto de diretrizes, níveis de maturidade e boas práticas criado para aumentar a segurança da **cadeia de suprimentos de software** (*Software Supply Chain*).

O objetivo do SLSA é reduzir o risco de ataques que comprometam o processo de desenvolvimento, compilação e distribuição de software, ajudando organizações a produzir e consumir software de forma mais segura.

O projeto foi criado pelo Google e atualmente é mantido pela **OpenSSF (Open Source Security Foundation)**.

## Para que serve?

O SLSA define um conjunto de práticas que ajudam a garantir que um software:

* foi construído por um processo confiável;
* não foi alterado durante sua construção ou distribuição;
* possui rastreabilidade sobre sua origem;
* utiliza um processo de build seguro;
* pode ser auditado por terceiros.

Na prática, o SLSA busca responder perguntas como:

* Quem produziu este artefato?
* Como ele foi construído?
* O código utilizado é realmente o que está no repositório?
* O processo de build foi protegido contra adulterações?
* É possível confiar na origem desse software?

## O problema que o SLSA busca resolver

Atualmente, grande parte dos softwares depende de centenas de bibliotecas, ferramentas e serviços externos.

Isso significa que um ataque pode ocorrer em diferentes pontos da cadeia de suprimentos, por exemplo:

* comprometimento de um repositório Git;
* alteração maliciosa do pipeline de CI/CD;
* inserção de código durante o processo de build;
* comprometimento de dependências;
* publicação de artefatos falsificados;
* roubo de credenciais de mantenedores.

Esses ataques se tornaram mais frequentes nos últimos anos e motivaram o desenvolvimento do SLSA.

## Os níveis do SLSA

O SLSA define diferentes níveis de maturidade.

Quanto maior o nível, maior a confiança no processo de desenvolvimento.

### SLSA Level 1

Requer que o processo de build gere informações básicas sobre a origem (*provenance*) do software.

É o primeiro passo para aumentar a rastreabilidade.

### SLSA Level 2

Exige builds executados por sistemas de build hospedados e confiáveis, reduzindo riscos de manipulação manual.

Também amplia as informações de proveniência.

### SLSA Level 3

Introduz requisitos mais rigorosos, como:

* builds isolados;
* controles mais fortes sobre o ambiente de construção;
* maior proteção contra adulterações;
* fortalecimento da integridade do processo.

É um nível frequentemente adotado por organizações que desenvolvem software crítico.

### SLSA Level 4

Representa o maior nível de maturidade.

Inclui requisitos adicionais para garantir processos altamente auditáveis, reprodutíveis e resistentes a ataques sofisticados contra a cadeia de suprimentos.

Nem todos os projetos precisam atingir esse nível.

## Provenance

Um dos conceitos centrais do SLSA é a **proveniência** (*provenance*).

Ela consiste em um registro que descreve como determinado artefato foi produzido, incluindo informações como:

* repositório de origem;
* commit utilizado;
* pipeline de build;
* ferramentas empregadas;
* ambiente de execução;
* identidade de quem realizou o processo.

Essas informações permitem verificar se um artefato realmente foi produzido pelo processo esperado.

## Qual a importância do SLSA?

O SLSA tornou-se uma das principais referências em segurança da cadeia de suprimentos.

Entre seus benefícios estão:

* aumento da confiança nos artefatos publicados;
* redução do risco de ataques ao processo de build;
* maior rastreabilidade;
* melhoria na integridade do software;
* apoio à conformidade e auditorias;
* fortalecimento da segurança em projetos Open Source e corporativos.

Cada vez mais organizações utilizam o SLSA como referência para avaliar seus processos de desenvolvimento.

## Casos reais

### SolarWinds

Em 2020, atacantes comprometeram o processo de build da plataforma **SolarWinds Orion**, inserindo código malicioso que foi distribuído para milhares de clientes.

Esse incidente demonstrou que proteger apenas o código-fonte não é suficiente — é necessário proteger toda a cadeia de construção do software.

O SLSA foi desenvolvido justamente para reduzir riscos desse tipo.

### XZ Utils

Em 2024, foi descoberta uma sofisticada porta dos fundos (*backdoor*) no projeto **XZ Utils**.

Embora o ataque tenha ocorrido antes da publicação em larga escala, ele evidenciou a importância de processos transparentes, builds verificáveis e rastreabilidade, princípios fundamentais do SLSA.

### Codecov

Em 2021, atacantes comprometeram um script distribuído pela plataforma **Codecov**, permitindo o roubo de credenciais de diversas organizações.

O incidente reforçou a necessidade de proteger pipelines, artefatos e dependências ao longo de toda a cadeia de desenvolvimento.

## Ferramentas

Diversas ferramentas auxiliam na adoção das práticas recomendadas pelo SLSA.

Entre elas estão:

| Ferramenta         | Descrição                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------- |
| **GitHub Actions** | Permite implementar pipelines de CI/CD alinhados às recomendações do SLSA.               |
| **GitLab CI/CD**   | Plataforma de integração contínua utilizada para builds seguros e rastreáveis.           |
| **Tekton Chains**  | Gera automaticamente informações de proveniência (*provenance*) para pipelines Tekton.   |
| **Sigstore**       | Projeto para assinatura e verificação de artefatos utilizando identidades modernas.      |
| **Cosign**         | Ferramenta do ecossistema Sigstore para assinatura e verificação de imagens e artefatos. |
| **in-toto**        | Framework para garantir a integridade da cadeia de suprimentos de software.              |
| **SLSA Verifier**  | Ferramenta oficial para verificar se artefatos atendem aos requisitos do SLSA.           |
| **BuildKit**       | Ferramenta de build para containers com recursos de proveniência e SBOM.                 |

Essas ferramentas frequentemente são utilizadas em conjunto.

## SLSA, SBOM e Sigstore

Esses conceitos são complementares.

| Tecnologia   | Objetivo                                                   |
| ------------ | ---------------------------------------------------------- |
| **SBOM**     | Lista os componentes utilizados pelo software.             |
| **SLSA**     | Garante a segurança do processo de construção do software. |
| **Sigstore** | Assina e verifica artefatos publicados.                    |
| **CVE/CVSS** | Identificam e classificam vulnerabilidades conhecidas.     |

Juntas, essas iniciativas formam parte das principais práticas modernas de segurança da cadeia de suprimentos.

## Todo projeto precisa implementar o SLSA?

Não necessariamente.

A adoção do SLSA deve considerar fatores como:

* criticidade do software;
* quantidade de usuários;
* número de contribuidores;
* maturidade do projeto;
* requisitos regulatórios;
* recursos disponíveis.

Projetos pequenos podem começar adotando apenas algumas práticas, como builds automatizados, assinatura de releases e geração de proveniência.

Projetos maiores ou utilizados em ambientes críticos tendem a obter maiores benefícios ao buscar níveis mais elevados do SLSA.

## Boas práticas

Independentemente do nível adotado, algumas recomendações incluem:

* automatizar o processo de build;
* evitar builds realizados manualmente;
* proteger pipelines de CI/CD;
* utilizar ambientes de build confiáveis;
* gerar informações de proveniência;
* assinar artefatos publicados;
* revisar regularmente permissões e credenciais;
* combinar o SLSA com SBOMs, assinaturas digitais e scanners de vulnerabilidades.

## SLSA e Open Source

O SLSA tornou-se uma das principais iniciativas globais para fortalecer a segurança de projetos Open Source.

Ao estabelecer um modelo de maturidade para a cadeia de suprimentos, ele ajuda comunidades e organizações a produzirem software mais confiável, transparente e resistente a ataques, contribuindo para um ecossistema Open Source mais seguro e sustentável.
