# CVSS

**CVSS** (*Common Vulnerability Scoring System*) é um padrão internacional utilizado para medir a **gravidade** de vulnerabilidades de segurança.

Seu objetivo é fornecer uma forma consistente de avaliar o impacto e a severidade de uma vulnerabilidade, permitindo que organizações priorizem correções e gerenciem riscos de maneira mais eficiente.

O CVSS não identifica vulnerabilidades — essa é a função do **CVE (Common Vulnerabilities and Exposures)**. Em vez disso, ele atribui uma **pontuação** que representa o risco associado a uma vulnerabilidade.

O padrão é mantido pelo **FIRST (Forum of Incident Response and Security Teams)**.

## Para que serve?

O principal objetivo do CVSS é ajudar equipes de segurança e desenvolvimento a responder perguntas como:

* Quão grave é essa vulnerabilidade?
* Ela deve ser corrigida imediatamente?
* Qual o impacto para os usuários?
* É possível explorá-la remotamente?
* Ela exige autenticação?
* Qual a prioridade para correção?

Ao utilizar uma metodologia padronizada, diferentes organizações conseguem avaliar vulnerabilidades de forma consistente.

## Como funciona?

O CVSS atribui uma pontuação que varia de **0,0** a **10,0**, sendo quanto maior o valor, maior a gravidade da vulnerabilidade.

As classificações normalmente são:

|  Pontuação | Severidade         |
| ---------: | ------------------ |
|        0.0 | Nenhuma            |
|  0.1 – 3.9 | Baixa (Low)        |
|  4.0 – 6.9 | Média (Medium)     |
|  7.0 – 8.9 | Alta (High)        |
| 9.0 – 10.0 | Crítica (Critical) |

Essa classificação auxilia na definição da prioridade de resposta.

## As métricas do CVSS

O cálculo da pontuação leva em consideração diferentes características da vulnerabilidade.

### Base Metrics

Representam as características intrínsecas da vulnerabilidade, que não mudam ao longo do tempo.

Entre elas estão:

* vetor de ataque (*Attack Vector*);
* complexidade do ataque (*Attack Complexity*);
* privilégios necessários (*Privileges Required*);
* interação do usuário (*User Interaction*);
* impacto na confidencialidade;
* impacto na integridade;
* impacto na disponibilidade.

Essas métricas são responsáveis pela pontuação principal divulgada para um CVE.

### Temporal Metrics

Consideram fatores que podem mudar com o tempo, como:

* disponibilidade de exploits públicos;
* existência de correções;
* nível de confiança das informações.

Essas métricas permitem ajustar a avaliação conforme a situação evolui.

### Environmental Metrics

Permitem adaptar a pontuação ao ambiente específico de uma organização.

Por exemplo, uma vulnerabilidade pode representar um risco muito maior para um hospital do que para um ambiente de testes, mesmo possuindo o mesmo CVSS Base.

## Qual a importância do CVSS?

Em um cenário com milhares de vulnerabilidades publicadas todos os anos, nem todas podem ser corrigidas imediatamente.

O CVSS ajuda organizações a:

* priorizar correções;
* gerenciar riscos;
* definir SLAs para tratamento de vulnerabilidades;
* automatizar processos de resposta;
* apoiar auditorias e conformidade;
* comparar vulnerabilidades de forma objetiva.

Por esse motivo, ele é amplamente utilizado por empresas, governos, projetos Open Source e ferramentas de segurança.

## CVSS e CVE

Embora frequentemente apareçam juntos, CVSS e CVE possuem funções diferentes.

| CVE                                | CVSS                                    |
| ---------------------------------- | --------------------------------------- |
| Identifica uma vulnerabilidade.    | Mede a gravidade dessa vulnerabilidade. |
| Exemplo: CVE-2021-44228            | Exemplo: CVSS 10.0 (Critical)           |
| Mantido pelo programa CVE (MITRE). | Mantido pelo FIRST.                     |

Em outras palavras:

* **CVE responde:** *qual vulnerabilidade é essa?*
* **CVSS responde:** *quão grave ela é?*

## Exemplos

Alguns exemplos conhecidos incluem:

| Vulnerabilidade                   | CVSS Base           |
| --------------------------------- | ------------------- |
| Log4Shell (CVE-2021-44228)        | **10.0 (Critical)** |
| Heartbleed (CVE-2014-0160)        | **7.5 (High)**      |
| EternalBlue (CVE-2017-0144)       | **8.1 (High)**      |
| XZ Utils Backdoor (CVE-2024-3094) | **10.0 (Critical)** |

Essas pontuações ajudaram organizações ao redor do mundo a priorizar rapidamente a aplicação de correções.

## Casos reais

### Log4Shell

A vulnerabilidade **Log4Shell** recebeu **CVSS 10.0**, a pontuação máxima do sistema.

Isso ocorreu porque:

* podia ser explorada remotamente;
* exigia pouca complexidade;
* não necessitava autenticação;
* permitia execução remota de código;
* comprometia completamente sistemas afetados.

Como resultado, milhares de organizações priorizaram imediatamente sua correção.

### Heartbleed

O **Heartbleed** recebeu **CVSS 7.5**, sendo classificado como uma vulnerabilidade de alta severidade.

Ela permitia a leitura de partes da memória de servidores executando versões vulneráveis do OpenSSL, expondo informações sensíveis como senhas e chaves criptográficas.

### XZ Utils

O caso do **XZ Utils**, descoberto em 2024, também recebeu uma pontuação crítica devido ao potencial comprometimento da cadeia de suprimentos de software (*software supply chain*).

O incidente reforçou que vulnerabilidades em componentes amplamente utilizados podem representar riscos sistêmicos.

## Limitações do CVSS

Embora seja amplamente adotado, o CVSS não deve ser utilizado isoladamente para decidir prioridades.

Uma vulnerabilidade com pontuação alta pode representar pouco risco em um determinado ambiente, enquanto uma vulnerabilidade de pontuação média pode ser extremamente crítica para outra organização.

Além disso, o CVSS não considera fatores como:

* se a funcionalidade vulnerável está realmente em uso;
* importância do ativo afetado para o negócio;
* existência de controles compensatórios;
* contexto operacional da organização;
* impacto financeiro ou reputacional.

Por isso, muitas equipes combinam o CVSS com processos internos de análise de risco.

## Ferramentas que utilizam CVSS

Diversas ferramentas e plataformas utilizam o CVSS para classificar vulnerabilidades, entre elas:

* National Vulnerability Database (NVD);
* GitHub Security Advisories;
* Dependabot;
* Snyk;
* Trivy;
* Grype;
* OWASP Dependency-Check;
* Sonatype Nexus Lifecycle;
* Qualys;
* Tenable;
* Microsoft Defender Vulnerability Management.

Essas ferramentas utilizam a pontuação CVSS para ajudar equipes a identificar e priorizar vulnerabilidades.

## Evolução do padrão

O CVSS passou por diferentes versões ao longo dos anos.

A versão mais recente é a **CVSS v4.0**, publicada em 2023, que introduziu melhorias na avaliação de vulnerabilidades, refinou diversas métricas e ampliou a capacidade de representar cenários modernos de segurança.

Ainda assim, muitas ferramentas e bases públicas continuam utilizando amplamente a versão **CVSS v3.1**, tornando comum encontrar ambas em uso.

## Boas práticas

Ao utilizar o CVSS, recomenda-se:

* utilizá-lo como ponto de partida para priorização;
* considerar o contexto da organização antes de definir prioridades;
* acompanhar atualizações das pontuações quando novas informações forem divulgadas;
* combinar o CVSS com processos internos de gestão de riscos;
* automatizar a identificação de vulnerabilidades utilizando ferramentas compatíveis.

O CVSS é hoje um dos padrões mais importantes para avaliação de vulnerabilidades e desempenha um papel fundamental na gestão de segurança de projetos Open Source e softwares proprietários, permitindo que organizações priorizem esforços e respondam de forma mais eficiente a riscos conhecidos.
