# Provenance

**Provenance** (ou **proveniência de software**) é o conjunto de informações que descreve **a origem de um artefato de software e como ele foi produzido**. Essas informações permitem verificar de onde o software veio, qual código foi utilizado, qual processo de build foi executado e quais ferramentas participaram da sua construção.

Em outras palavras, a provenance funciona como uma **"certidão de nascimento"** de um artefato de software, fornecendo evidências sobre sua origem e seu processo de criação.

A provenance é um dos principais conceitos da segurança da cadeia de suprimentos de software (*Software Supply Chain Security*) e desempenha um papel fundamental em iniciativas como **SLSA (Supply-chain Levels for Software Artifacts)**.

## Para que serve?

O principal objetivo da provenance é aumentar a confiança em um software.

Ela permite responder perguntas como:

* De qual repositório este artefato foi gerado?
* Qual commit foi utilizado?
* Quem iniciou o processo de build?
* Quando o software foi construído?
* Qual pipeline de CI/CD gerou esse artefato?
* O build ocorreu em um ambiente confiável?
* O artefato foi modificado após sua construção?

Essas informações ajudam organizações a verificar a autenticidade e a integridade do software antes de utilizá-lo.

## O que normalmente faz parte de uma provenance?

Embora o conteúdo varie conforme a ferramenta utilizada, uma provenance normalmente inclui:

* repositório de origem;
* URL do projeto;
* commit utilizado;
* branch ou tag correspondente;
* versão publicada;
* identidade do sistema de build;
* ferramenta de CI/CD utilizada;
* data e horário do build;
* artefatos gerados;
* hashes criptográficos;
* informações sobre assinaturas digitais;
* metadados do processo de construção.

Esses dados são geralmente armazenados em um documento estruturado que acompanha o artefato publicado.

## Como funciona?

Imagine que um projeto publique a versão **2.4.0** de uma biblioteca.

Além do pacote distribuído, também é gerado um documento de provenance contendo informações como:

* o commit utilizado para gerar a versão;
* a tag correspondente (`v2.4.0`);
* o pipeline do GitHub Actions responsável pelo build;
* a data da compilação;
* o hash do artefato gerado;
* uma assinatura digital emitida pelo processo de build.

Assim, qualquer pessoa pode verificar que aquele pacote realmente foi produzido pelo projeto oficial e que não sofreu alterações após sua geração.

## Qual a importância da provenance?

A provenance tornou-se uma prática fundamental para aumentar a confiança na distribuição de software.

Entre seus principais benefícios estão:

* comprovação da origem dos artefatos;
* maior transparência sobre o processo de build;
* detecção de adulterações;
* rastreabilidade de versões;
* apoio a auditorias;
* fortalecimento da segurança da cadeia de suprimentos;
* maior confiança para usuários e organizações.

Ela também facilita investigações em caso de incidentes de segurança.

## Casos reais

### SolarWinds

Em 2020, o ataque à plataforma **SolarWinds Orion** demonstrou que um software aparentemente legítimo pode ser comprometido durante seu processo de build.

Uma provenance verificável poderia fornecer evidências sobre como os artefatos foram produzidos e facilitar a identificação de alterações não autorizadas.

Esse incidente impulsionou o desenvolvimento e a adoção de iniciativas como o SLSA.

### XZ Utils

Em 2024, pesquisadores descobriram uma sofisticada porta dos fundos (*backdoor*) introduzida no projeto **XZ Utils**.

O caso evidenciou a importância da rastreabilidade do processo de construção do software e da capacidade de verificar a origem dos artefatos distribuídos.

### Ataques à cadeia de suprimentos

Nos últimos anos, diversos ataques exploraram pipelines de CI/CD, repositórios e sistemas de distribuição de software.

A provenance tornou-se uma ferramenta importante para permitir que consumidores de software confirmem que um artefato foi realmente produzido pelo projeto esperado.

## Provenance e assinatura digital

Embora frequentemente utilizadas em conjunto, provenance e assinatura digital não são a mesma coisa.

Uma **assinatura digital** garante que um artefato não foi alterado após sua assinatura e permite verificar quem o assinou.

A **provenance**, por sua vez, descreve **como** esse artefato foi produzido.

Na prática, é comum que documentos de provenance sejam assinados digitalmente, aumentando sua confiabilidade.

## Provenance e SBOM

Outro conceito frequentemente associado à provenance é a **SBOM (Software Bill of Materials)**.

Eles possuem objetivos diferentes e complementares:

| Provenance                                    | SBOM                                                        |
| --------------------------------------------- | ----------------------------------------------------------- |
| Descreve como o software foi produzido.       | Descreve quais componentes compõem o software.              |
| Foca no processo de build.                    | Foca nas dependências do software.                          |
| Auxilia na verificação da origem do artefato. | Auxilia na identificação de componentes e vulnerabilidades. |

É comum que projetos publiquem ambos os documentos junto com uma nova release.

## Provenance e SLSA

A provenance é um dos elementos centrais do **SLSA**.

Os diferentes níveis do SLSA exigem que o processo de build gere informações de proveniência cada vez mais completas, confiáveis e verificáveis.

Sem provenance, torna-se muito mais difícil comprovar que um artefato realmente foi produzido pelo processo esperado.

## Ferramentas

Diversas ferramentas modernas conseguem gerar ou verificar documentos de provenance.

Algumas das mais utilizadas incluem:

* **GitHub Actions**, com geração de provenance para builds;
* **Sigstore**, para assinatura e verificação de proveniência;
* **Cosign**, para assinatura de artefatos e documentos;
* **Tekton Chains**, que gera provenance automaticamente em pipelines Tekton;
* **in-toto**, framework para garantir a integridade da cadeia de suprimentos;
* **SLSA Generator**, utilizado para gerar provenance compatível com o padrão SLSA.

Essas ferramentas costumam ser integradas ao processo de CI/CD.

## Todo projeto precisa gerar provenance?

Não necessariamente.

Projetos pequenos ou experimentais podem não precisar desse nível de rastreabilidade.

Entretanto, gerar provenance é cada vez mais recomendado quando o projeto:

* distribui bibliotecas ou frameworks;
* possui muitos usuários;
* publica releases frequentes;
* é utilizado em ambientes corporativos;
* faz parte da infraestrutura crítica;
* deseja atender boas práticas de segurança da cadeia de suprimentos.

Com a evolução das ferramentas de automação, gerar provenance tem se tornado uma tarefa simples e de baixo custo.

## Boas práticas

Ao adotar provenance, recomenda-se:

* gerar o documento automaticamente durante o processo de build;
* utilizar ambientes de build confiáveis;
* assinar digitalmente a provenance;
* disponibilizar a provenance junto com cada release;
* integrar a provenance com SBOMs e assinaturas de artefatos;
* utilizar padrões reconhecidos pela comunidade, como os definidos pelo SLSA.

## Provenance e Open Source

À medida que a cadeia de suprimentos de software se torna mais complexa, a provenance desempenha um papel cada vez mais importante na construção da confiança entre projetos Open Source e seus usuários.

Ao fornecer evidências verificáveis sobre a origem e o processo de construção de um software, ela contribui para aumentar a transparência, fortalecer a segurança e reduzir os riscos associados à distribuição de artefatos, tornando-se uma prática cada vez mais relevante para projetos de todos os tamanhos.
