# CVE

**CVE** (*Common Vulnerabilities and Exposures*) é um sistema internacional de identificação de vulnerabilidades de segurança conhecidas. Cada vulnerabilidade recebe um identificador único, permitindo que pesquisadores, desenvolvedores, fabricantes, organizações e ferramentas de segurança façam referência ao mesmo problema de forma padronizada.

Por exemplo, quando uma vulnerabilidade recebe o identificador **CVE-2021-44228**, qualquer pessoa sabe exatamente qual falha está sendo discutida, independentemente da ferramenta, fornecedor ou linguagem utilizada.

O programa CVE é mantido pela organização **The MITRE Corporation**, com apoio da **Cybersecurity and Infrastructure Security Agency (CISA)** dos Estados Unidos.

## Para que serve?

O principal objetivo do CVE é padronizar a identificação de vulnerabilidades de segurança.

Sem um identificador único, diferentes fornecedores poderiam utilizar nomes distintos para a mesma falha, dificultando a comunicação entre equipes, empresas e ferramentas.

O uso de CVEs permite:

* identificar vulnerabilidades de forma única;
* facilitar a comunicação entre organizações;
* rastrear vulnerabilidades ao longo do tempo;
* relacionar vulnerabilidades com correções e atualizações;
* integrar ferramentas de segurança e gerenciamento de vulnerabilidades;
* facilitar auditorias e gestão de riscos.

Hoje, praticamente todas as ferramentas de segurança utilizam identificadores CVE.

## Como funciona um CVE?

Cada vulnerabilidade recebe um identificador no seguinte formato:

```text
CVE-AAAA-NNNNN
```

Onde:

* **AAAA** representa o ano em que o identificador foi atribuído;
* **NNNNN** é um número sequencial.

Exemplos:

* CVE-2017-0144
* CVE-2021-44228
* CVE-2024-3094

O identificador não informa a gravidade da vulnerabilidade nem como corrigi-la. Ele apenas fornece um nome único para aquela falha.

## Como um CVE é criado?

Quando uma nova vulnerabilidade é descoberta, ela pode ser reportada por:

* pesquisadores de segurança;
* empresas;
* comunidades Open Source;
* fabricantes de software;
* programas de *bug bounty*;
* equipes de resposta a incidentes (CSIRTs).

Após validação, uma autoridade autorizada (*CVE Numbering Authority* – CNA) atribui um identificador CVE.

Posteriormente, são publicadas informações como:

* descrição da vulnerabilidade;
* softwares afetados;
* versões vulneráveis;
* referências técnicas;
* links para correções e boletins de segurança.

## CVE e CVSS

É comum confundir CVE com **CVSS** (*Common Vulnerability Scoring System*), mas eles possuem objetivos diferentes.

* **CVE** identifica uma vulnerabilidade.
* **CVSS** mede sua gravidade por meio de uma pontuação que varia de **0,0 a 10,0**.

Por exemplo:

* **CVE-2021-44228** identifica uma vulnerabilidade específica.
* **CVSS 10.0** indica que ela possui severidade crítica.

Esses dois padrões são frequentemente utilizados em conjunto.

## Qual a importância do CVE?

O sistema CVE é um dos pilares da segurança da informação moderna.

Ele permite que diferentes organizações falem sobre a mesma vulnerabilidade utilizando um identificador único, reduzindo ambiguidades e facilitando a resposta a incidentes.

Entre seus principais benefícios estão:

* padronização da comunicação;
* compartilhamento de informações entre organizações;
* integração entre ferramentas de segurança;
* gerenciamento de vulnerabilidades;
* priorização de correções;
* rastreabilidade histórica;
* suporte à gestão de riscos.

Sem um padrão como o CVE, acompanhar vulnerabilidades em milhares de projetos seria significativamente mais complexo.

## Exemplos

Alguns exemplos conhecidos incluem:

| CVE                | Vulnerabilidade                                                   |
| ------------------ | ----------------------------------------------------------------- |
| **CVE-2021-44228** | Vulnerabilidade **Log4Shell**, na biblioteca Apache Log4j.        |
| **CVE-2017-0144**  | Vulnerabilidade explorada pelo ransomware WannaCry (EternalBlue). |
| **CVE-2014-0160**  | Vulnerabilidade Heartbleed, na biblioteca OpenSSL.                |
| **CVE-2024-3094**  | Backdoor descoberto no projeto XZ Utils.                          |

Esses identificadores são utilizados por sistemas operacionais, distribuições Linux, empresas, fabricantes e ferramentas de segurança em todo o mundo.

## Casos reais

### Log4Shell (CVE-2021-44228)

Descoberta em 2021, a vulnerabilidade Log4Shell afetou a biblioteca **Apache Log4j**, utilizada por milhares de aplicações Java.

Ela permitia, em determinadas condições, a execução remota de código por um invasor e foi considerada uma das vulnerabilidades mais críticas já registradas devido ao enorme número de sistemas afetados.

### Heartbleed (CVE-2014-0160)

A vulnerabilidade Heartbleed afetava a biblioteca **OpenSSL** e permitia que atacantes lessem partes da memória de servidores, potencialmente expondo senhas, chaves criptográficas e outras informações sensíveis.

O incidente levou milhares de organizações ao redor do mundo a atualizar seus sistemas e substituir certificados digitais.

### EternalBlue (CVE-2017-0144)

Essa vulnerabilidade afetava o protocolo SMB do Microsoft Windows e foi explorada pelo ransomware **WannaCry**, responsável por interromper operações de hospitais, empresas e órgãos públicos em diversos países em 2017.

### XZ Utils (CVE-2024-3094)

Em 2024, pesquisadores descobriram um sofisticado *backdoor* introduzido na biblioteca **XZ Utils**, utilizada por diversas distribuições Linux.

Embora a vulnerabilidade tenha sido identificada antes de atingir amplamente os usuários finais, o caso chamou atenção para a importância da revisão de código, da segurança na cadeia de suprimentos (*software supply chain*) e da sustentabilidade de projetos Open Source.

## Onde consultar CVEs?

Existem diversas bases públicas que disponibilizam informações sobre vulnerabilidades registradas.

As principais incluem:

* **CVE Program**, mantido pela MITRE;
* **National Vulnerability Database (NVD)**, mantido pelo NIST;
* **GitHub Security Advisories**;
* bancos de dados de distribuições Linux, como Debian, Ubuntu e Red Hat;
* boletins de segurança publicados por fabricantes e projetos Open Source.

Essas bases são amplamente utilizadas por ferramentas de análise de vulnerabilidades e gerenciamento de dependências.

## CVEs em projetos Open Source

Projetos Open Source podem receber identificadores CVE da mesma forma que softwares proprietários.

Quando uma vulnerabilidade é identificada, é comum que os mantenedores:

* corrijam o problema;
* publiquem uma nova release;
* divulguem um boletim de segurança;
* solicitem ou publiquem um identificador CVE;
* informem quais versões são afetadas e quais corrigem a vulnerabilidade.

Esse processo contribui para que usuários e organizações identifiquem rapidamente se estão expostos e possam atualizar seus sistemas.

## Limitações

Um CVE **não** corrige uma vulnerabilidade nem mede seu impacto.

Ele apenas fornece um identificador padronizado para que diferentes pessoas e sistemas possam se referir ao mesmo problema.

Além disso:

* nem toda vulnerabilidade recebe imediatamente um CVE;
* alguns problemas permanecem confidenciais até que uma correção esteja disponível;
* vulnerabilidades de baixo impacto ou restritas a determinados contextos podem não receber um identificador.

Por isso, o CVE deve ser visto como parte de um ecossistema maior de gerenciamento de vulnerabilidades, que inclui análise de risco, priorização, correção e monitoramento contínuo.
