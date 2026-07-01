# Supply Chain de Software

A **Supply Chain de Software** (ou **Cadeia de Suprimentos de Software**) é o conjunto de pessoas, processos, ferramentas, serviços e componentes envolvidos na criação, distribuição e manutenção de um software.

Embora muitas pessoas imaginem que um software é composto apenas pelo código escrito por sua equipe de desenvolvimento, a realidade é bastante diferente. Aplicações modernas dependem de centenas ou até milhares de componentes externos, como bibliotecas Open Source, frameworks, compiladores, ferramentas de build, pipelines de CI/CD, registries de pacotes, containers, serviços em nuvem e ambientes de distribuição.

Todos esses elementos fazem parte da cadeia de suprimentos do software.

## O que compõe uma Supply Chain?

A cadeia de suprimentos de software pode incluir, entre outros elementos:

* código-fonte do projeto;
* bibliotecas e dependências Open Source;
* gerenciadores de pacotes;
* compiladores;
* ferramentas de build;
* pipelines de CI/CD;
* ambientes de desenvolvimento;
* registries de pacotes;
* imagens de containers;
* provedores de nuvem;
* sistemas de distribuição;
* certificados digitais;
* mantenedores e contribuidores.

Cada um desses componentes representa um possível ponto de confiança — e também um possível ponto de ataque.

## Para que serve?

A cadeia de suprimentos existe porque praticamente nenhum software é desenvolvido do zero.

Ela permite que desenvolvedores reutilizem componentes já existentes, acelerando o desenvolvimento e reduzindo custos.

Graças à Supply Chain moderna é possível:

* reutilizar bibliotecas Open Source;
* automatizar builds e testes;
* distribuir software para milhões de usuários;
* integrar diferentes ferramentas de desenvolvimento;
* acelerar a entrega de novas funcionalidades.

Sem essa cadeia, o desenvolvimento de software moderno seria significativamente mais lento e complexo.

## Qual a importância?

Hoje, um único projeto pode depender de milhares de componentes externos.

Como consequência, a segurança de um software não depende apenas do código desenvolvido pela equipe, mas também da segurança de todos os componentes utilizados durante seu ciclo de vida.

Por isso, proteger a Supply Chain tornou-se uma das maiores prioridades da segurança de software.

Entre os benefícios de uma cadeia de suprimentos segura estão:

* redução de riscos de comprometimento;
* maior transparência sobre os componentes utilizados;
* aumento da confiança dos usuários;
* melhor rastreabilidade;
* resposta mais rápida a incidentes;
* conformidade com requisitos regulatórios;
* fortalecimento da segurança de projetos Open Source.

## Ataques à Supply Chain

Um **ataque de Supply Chain** ocorre quando um invasor compromete algum elemento da cadeia de suprimentos para distribuir software malicioso ou comprometer sistemas de terceiros.

Em vez de atacar diretamente a vítima final, o atacante compromete um componente confiável que será utilizado por diversas organizações.

Essa estratégia permite atingir um grande número de vítimas simultaneamente.

## Como esses ataques acontecem?

Existem diversas formas de comprometer uma cadeia de suprimentos.

Algumas das mais comuns incluem:

### Dependências maliciosas

O invasor publica uma biblioteca maliciosa esperando que desenvolvedores a instalem.

Isso pode ocorrer por meio de:

* **Typosquatting** (nomes parecidos com bibliotecas populares);
* dependências falsas;
* bibliotecas abandonadas que são assumidas por terceiros.

### Comprometimento de mantenedores

Um atacante obtém acesso às credenciais de um mantenedor legítimo e publica versões maliciosas do software.

Esse tipo de ataque é especialmente perigoso em projetos muito utilizados.

### Comprometimento do processo de build

Em vez de alterar o código-fonte, o atacante modifica o pipeline de CI/CD ou o ambiente de build, fazendo com que o software distribuído contenha código malicioso.

### Ataques a registries

Repositórios de pacotes, como npm, PyPI ou Maven Central, podem ser utilizados para distribuir versões comprometidas de bibliotecas.

### Comprometimento de artefatos

Um atacante substitui binários, imagens de containers ou outros artefatos publicados por versões adulteradas.

## Por que esses ataques acontecem?

Ataques à Supply Chain costumam ser altamente eficazes porque exploram relações de confiança.

Quando uma organização instala uma biblioteca amplamente utilizada ou atualiza um software de um fornecedor confiável, normalmente presume que esse componente é seguro.

Ao comprometer esse elo da cadeia, um invasor pode atingir milhares de organizações ao mesmo tempo.

Essa abordagem costuma oferecer maior alcance e exigir menos esforço do que atacar individualmente cada vítima.

## Casos reais

### SolarWinds Orion (2020)

Um dos maiores ataques à cadeia de suprimentos da história.

Atacantes comprometeram o processo de build da plataforma **SolarWinds Orion**, inserindo um backdoor distribuído em atualizações oficiais.

Mais de 18 mil organizações instalaram versões comprometidas do software, incluindo empresas privadas e órgãos governamentais.

### Log4Shell (2021)

A vulnerabilidade **Log4Shell (CVE-2021-44228)** afetou a biblioteca **Apache Log4j**, utilizada por milhares de aplicações Java.

Embora não tenha sido um ataque à cadeia de suprimentos em si, demonstrou como uma vulnerabilidade em uma única dependência pode impactar organizações em todo o mundo.

### Codecov (2021)

Atacantes comprometeram um script distribuído pela plataforma **Codecov**, permitindo o roubo de credenciais presentes em pipelines de CI/CD de diversas organizações.

O incidente evidenciou os riscos associados às ferramentas utilizadas durante o desenvolvimento.

### XZ Utils (2024)

Em 2024 foi descoberta uma sofisticada porta dos fundos (*backdoor*) introduzida no projeto **XZ Utils**, biblioteca utilizada por diversas distribuições Linux.

O código malicioso foi inserido após um longo processo de engenharia social envolvendo um mantenedor do projeto.

O caso tornou-se um dos maiores exemplos modernos de ataque à cadeia de suprimentos em projetos Open Source.

### event-stream (2018)

O pacote **event-stream**, amplamente utilizado no ecossistema Node.js, recebeu código malicioso após a transferência de sua manutenção para outro desenvolvedor.

O objetivo era comprometer uma carteira de criptomoedas específica.

O incidente mostrou como projetos pequenos podem se tornar vetores de ataque devido ao grande número de dependências indiretas.

### ua-parser-js (2021)

A biblioteca **ua-parser-js**, utilizada por milhões de downloads semanais no npm, teve versões comprometidas contendo malware para mineração de criptomoedas e roubo de credenciais.

O ataque foi rapidamente identificado, mas reforçou a importância da verificação de dependências.

## Como reduzir os riscos?

Nenhuma medida elimina completamente os riscos, mas diversas práticas ajudam a fortalecer a segurança da cadeia de suprimentos.

Entre elas:

* manter dependências atualizadas;
* revisar novas dependências antes de adotá-las;
* utilizar o princípio do menor privilégio em pipelines;
* proteger credenciais de mantenedores;
* utilizar autenticação multifator (MFA);
* assinar artefatos publicados;
* gerar SBOMs;
* utilizar Provenance;
* adotar práticas do SLSA;
* realizar varreduras automáticas de vulnerabilidades;
* monitorar CVEs relacionados às dependências utilizadas.

Essas práticas fazem parte das recomendações da OpenSSF e de diversas organizações de segurança.

## Ferramentas

Diversas ferramentas ajudam a proteger a cadeia de suprimentos.

| Ferramenta                     | Descrição                                                          |
| ------------------------------ | ------------------------------------------------------------------ |
| **Dependabot**                 | Identifica dependências vulneráveis e sugere atualizações.         |
| **Renovate**                   | Automatiza atualizações de dependências.                           |
| **Snyk**                       | Analisa vulnerabilidades em dependências e containers.             |
| **Trivy**                      | Scanner de vulnerabilidades para dependências, containers e SBOMs. |
| **Grype**                      | Scanner de vulnerabilidades baseado em SBOM.                       |
| **Syft**                       | Geração de SBOMs.                                                  |
| **Sigstore / Cosign**          | Assinatura e verificação de artefatos.                             |
| **in-toto**                    | Framework para proteger a cadeia de suprimentos.                   |
| **SLSA**                       | Modelo de maturidade para processos seguros de build.              |
| **OpenSSF Scorecard**          | Avalia práticas de segurança em projetos Open Source.              |
| **GitHub Dependency Graph**    | Mapeia dependências do projeto.                                    |
| **GitHub Security Advisories** | Base de vulnerabilidades para projetos GitHub.                     |

## Supply Chain e outros conceitos

A segurança da cadeia de suprimentos está diretamente relacionada a diversos conceitos apresentados neste portal.

| Conceito       | Papel na segurança                                             |
| -------------- | -------------------------------------------------------------- |
| **SBOM**       | Lista todos os componentes utilizados pelo software.           |
| **Provenance** | Documenta como o software foi construído.                      |
| **SLSA**       | Define níveis de maturidade para proteger o processo de build. |
| **Sigstore**   | Permite assinar e verificar artefatos.                         |
| **CVE**        | Identifica vulnerabilidades conhecidas.                        |
| **CVSS**       | Mede a gravidade dessas vulnerabilidades.                      |

Essas iniciativas são complementares e, quando utilizadas em conjunto, aumentam significativamente a segurança do processo de desenvolvimento.

## Segurança da Supply Chain é um processo contínuo

Não existe uma única ferramenta capaz de proteger toda a cadeia de suprimentos de software.

A segurança depende da combinação de boas práticas, processos, ferramentas e colaboração entre desenvolvedores, mantenedores, fornecedores e organizações.

À medida que aplicações modernas passam a depender de um número cada vez maior de componentes externos, proteger a Supply Chain torna-se essencial para reduzir riscos, aumentar a confiança dos usuários e garantir a integridade do software distribuído.
