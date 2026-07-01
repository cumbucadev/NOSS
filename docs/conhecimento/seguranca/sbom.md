# SBOM

**SBOM** (*Software Bill of Materials*) é uma lista estruturada de todos os componentes que compõem um software. Assim como uma lista de materiais (*Bill of Materials – BOM*) é utilizada na indústria para descrever as peças de um produto, uma SBOM descreve as bibliotecas, dependências, pacotes, frameworks e outros componentes utilizados para construir uma aplicação.

Ela fornece uma visão detalhada da composição do software, permitindo que organizações saibam exatamente **o que está sendo executado em seus sistemas**.

Nos últimos anos, as SBOMs tornaram-se um dos principais pilares da segurança da cadeia de suprimentos de software (*Software Supply Chain Security*).

## Para que serve?

Uma SBOM permite identificar todos os componentes presentes em um software, incluindo dependências diretas e indiretas.

Ela pode ser utilizada para:

* conhecer a composição de um software;
* identificar componentes vulneráveis;
* facilitar auditorias de segurança;
* verificar conformidade com licenças;
* gerenciar riscos da cadeia de suprimentos;
* acelerar respostas a incidentes;
* apoiar processos de aquisição de software;
* atender requisitos regulatórios.

Em vez de descobrir manualmente quais bibliotecas são utilizadas por uma aplicação, basta consultar sua SBOM.

## O que normalmente compõe uma SBOM?

Embora existam diferentes formatos, uma SBOM normalmente inclui informações como:

* nome do componente;
* versão;
* fornecedor ou mantenedor;
* identificadores únicos (como Package URL ou CPE);
* dependências;
* hashes criptográficos;
* licenças;
* relacionamentos entre componentes.

Dependendo da ferramenta utilizada, a SBOM também pode incluir metadados adicionais sobre o processo de construção do software.

## Qual a importância das SBOMs?

Aplicações modernas raramente são desenvolvidas apenas com código próprio.

É comum que um projeto utilize dezenas ou centenas de bibliotecas Open Source, além de frameworks, SDKs e ferramentas de terceiros.

Como consequência, uma vulnerabilidade em apenas um desses componentes pode comprometer toda a aplicação.

As SBOMs permitem:

* identificar rapidamente onde um componente é utilizado;
* responder a vulnerabilidades conhecidas;
* reduzir riscos da cadeia de suprimentos;
* aumentar a transparência do software;
* facilitar atualizações de dependências;
* melhorar processos de governança e conformidade.

Por esse motivo, diversos governos e grandes organizações passaram a exigir SBOMs em contratos e processos de aquisição de software.

## Como as SBOMs ajudam na segurança?

Quando uma nova vulnerabilidade é divulgada, a primeira pergunta costuma ser:

> **"Nós utilizamos esse componente?"**

Sem uma SBOM, responder essa pergunta pode exigir horas ou dias de investigação.

Com uma SBOM, basta pesquisar pelo componente afetado para identificar rapidamente quais aplicações utilizam a versão vulnerável.

Isso reduz significativamente o tempo de resposta a incidentes.

## Casos reais

### Log4Shell (Apache Log4j)

Quando a vulnerabilidade **Log4Shell (CVE-2021-44228)** foi divulgada, milhares de organizações tiveram dificuldade para descobrir se utilizavam a biblioteca **Apache Log4j**.

Em muitos casos, a dependência era indireta, incluída por outras bibliotecas.

Organizações que possuíam SBOMs conseguiram identificar rapidamente quais sistemas estavam vulneráveis e priorizar as atualizações.

### XZ Utils

O caso do **XZ Utils**, descoberto em 2024, reforçou a importância de conhecer todos os componentes presentes na cadeia de suprimentos de software.

Ter uma SBOM permitiu que diversas organizações verificassem rapidamente se utilizavam versões afetadas da biblioteca.

### Vulnerabilidades em dependências

Todos os anos são publicados milhares de CVEs relacionados a bibliotecas Open Source.

Ferramentas que utilizam SBOMs conseguem identificar automaticamente aplicações impactadas e alertar suas equipes antes mesmo da implantação em produção.

## Formatos de SBOM

Existem diferentes padrões para representar uma SBOM.

Os mais utilizados atualmente são:

### SPDX

Criado pela **Linux Foundation**, o **Software Package Data Exchange (SPDX)** é um padrão aberto para compartilhamento de informações sobre componentes de software, licenças e dependências.

É amplamente utilizado por projetos Open Source e organizações.

### CycloneDX

Desenvolvido pela **OWASP**, o **CycloneDX** foi criado com foco em segurança da cadeia de suprimentos.

Além das dependências, suporta informações sobre vulnerabilidades, serviços, containers e outros componentes modernos.

É atualmente um dos formatos mais utilizados em ferramentas DevSecOps.

### SWID

As **Software Identification Tags (SWID)** são um padrão ISO utilizado principalmente em ambientes corporativos para identificação e gerenciamento de software instalado.

## Ferramentas

Diversas ferramentas permitem gerar, consumir ou analisar SBOMs.

Entre as mais conhecidas estão:

| Ferramenta                  | Descrição                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| **Syft**                    | Gera SBOMs para aplicações, imagens de containers e sistemas de arquivos.                |
| **Trivy**                   | Scanner de vulnerabilidades que também gera e consome SBOMs.                             |
| **CycloneDX CLI**           | Ferramenta oficial para trabalhar com arquivos CycloneDX.                                |
| **SPDX Tools**              | Conjunto de ferramentas para criação e validação de documentos SPDX.                     |
| **Dependency-Track**        | Plataforma para gerenciamento contínuo de SBOMs e monitoramento de vulnerabilidades.     |
| **GitHub Dependency Graph** | Identifica dependências e vulnerabilidades em repositórios GitHub.                       |
| **GitHub Dependabot**       | Utiliza informações sobre dependências para alertar e sugerir atualizações de segurança. |
| **Snyk**                    | Analisa dependências, gera SBOMs e identifica vulnerabilidades.                          |
| **Anchore Enterprise**      | Plataforma para análise de imagens de containers e gerenciamento de SBOMs.               |

Muitas dessas ferramentas integram-se a pipelines de CI/CD para gerar automaticamente uma SBOM a cada nova release.

## SBOM e CVE

SBOM e CVE são conceitos complementares.

* A **SBOM** informa **quais componentes** fazem parte de um software.
* O **CVE** informa **quais vulnerabilidades** existem nesses componentes.

Ao combinar ambos, torna-se possível identificar rapidamente se uma aplicação é afetada por uma vulnerabilidade recém-divulgada.

## SBOM e licenciamento

Além da segurança, uma SBOM também auxilia na gestão de licenças Open Source.

Ela permite identificar:

* quais licenças estão presentes no projeto;
* componentes incompatíveis com políticas da organização;
* obrigações relacionadas à redistribuição do software;
* riscos legais associados às dependências utilizadas.

Isso faz com que SBOMs sejam úteis tanto para equipes de segurança quanto para áreas jurídicas e de compliance.

## As SBOMs substituem scanners de vulnerabilidades?

Não.

Uma SBOM apenas descreve a composição do software.

Para identificar vulnerabilidades, ela normalmente é combinada com bancos de dados como:

* CVE Program;
* National Vulnerability Database (NVD);
* GitHub Security Advisories;
* OSV (Open Source Vulnerabilities).

Ferramentas de segurança utilizam essas bases para verificar se algum componente listado na SBOM possui vulnerabilidades conhecidas.

## Boas práticas

Ao adotar SBOMs, recomenda-se:

* gerar uma SBOM para cada release publicada;
* automatizar sua geração durante o processo de build;
* manter a SBOM atualizada sempre que dependências forem alteradas;
* utilizar formatos padronizados, como SPDX ou CycloneDX;
* integrar a SBOM a ferramentas de análise de vulnerabilidades;
* disponibilizar a SBOM para usuários e clientes, quando apropriado.

## SBOMs e Open Source

Com o crescimento da preocupação com a segurança da cadeia de suprimentos, as SBOMs tornaram-se uma prática recomendada para projetos Open Source e softwares comerciais.

Elas aumentam a transparência sobre os componentes utilizados, facilitam a identificação de vulnerabilidades, apoiam processos de conformidade e permitem respostas mais rápidas a incidentes de segurança.

Por esses motivos, as SBOMs são hoje consideradas uma das principais práticas de **Secure Software Supply Chain**, sendo cada vez mais adotadas por comunidades Open Source, empresas, governos e organizações em todo o mundo.
