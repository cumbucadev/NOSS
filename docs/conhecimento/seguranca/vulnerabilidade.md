# Vulnerabilidade

Uma **vulnerabilidade** é uma falha, fraqueza ou erro em um software, hardware, sistema, configuração ou processo que pode ser explorado para comprometer a segurança de um sistema.

Quando explorada, uma vulnerabilidade pode permitir que um atacante obtenha acesso não autorizado, execute código malicioso, roube informações, interrompa serviços ou cause outros impactos à confidencialidade, integridade e disponibilidade dos sistemas.

É importante destacar que **uma vulnerabilidade não é um ataque**. Ela representa uma condição que **pode** ser explorada. Quando essa exploração ocorre, ela passa a ser parte de um ataque ou incidente de segurança.

## Como surgem vulnerabilidades?

Vulnerabilidades podem ser introduzidas em diferentes momentos do ciclo de vida de um software.

As causas mais comuns incluem:

* erros de programação;
* falhas de projeto ou arquitetura;
* configurações incorretas;
* bibliotecas vulneráveis;
* dependências desatualizadas;
* autenticação ou autorização inadequadas;
* validação insuficiente de entradas;
* criptografia incorreta;
* falhas humanas;
* erros operacionais.

Mesmo projetos amplamente utilizados podem conter vulnerabilidades.

## Impactos de uma vulnerabilidade

Dependendo do tipo de falha, uma vulnerabilidade pode permitir:

* acesso não autorizado;
* execução remota de código;
* roubo de informações;
* vazamento de dados pessoais;
* elevação de privilégios;
* indisponibilidade de serviços;
* comprometimento de infraestrutura;
* movimentação lateral dentro de uma rede;
* comprometimento da cadeia de suprimentos de software.

Nem toda vulnerabilidade possui o mesmo nível de risco. Algumas têm impacto mínimo, enquanto outras podem comprometer completamente um sistema.

## Tipos de vulnerabilidades

Existem diversas formas de classificar vulnerabilidades. A seguir estão alguns dos tipos mais comuns.

### Execução Remota de Código (Remote Code Execution – RCE)

Permite que um atacante execute código arbitrário em um sistema remoto.

É considerada uma das categorias mais críticas de vulnerabilidades.

**Exemplo**

A vulnerabilidade **Log4Shell (CVE-2021-44228)** permitia, em determinadas condições, a execução remota de código em aplicações que utilizavam versões vulneráveis do Apache Log4j.

---

### Injeção (Injection)

Ocorre quando dados fornecidos pelo usuário são interpretados como comandos por outro sistema.

Pode afetar bancos de dados, sistemas operacionais, interpretadores e outros componentes.

**Exemplos**

* SQL Injection
* Command Injection
* LDAP Injection
* NoSQL Injection

---

### Cross-Site Scripting (XSS)

Permite que scripts maliciosos sejam executados no navegador de outros usuários.

Pode ser utilizado para roubo de sessões, redirecionamentos maliciosos e outras ações.

**Exemplo**

Um campo de comentários que permite inserir JavaScript sem validação adequada.

---

### Cross-Site Request Forgery (CSRF)

Induz um usuário autenticado a executar ações sem seu consentimento.

**Exemplo**

Um atacante envia um link que faz o navegador da vítima alterar sua senha enquanto ela permanece autenticada no sistema.

---

### Elevação de Privilégios (Privilege Escalation)

Permite que um usuário obtenha permissões superiores às originalmente concedidas.

**Exemplo**

Um usuário comum consegue executar ações restritas a administradores.

---

### Divulgação de Informações (Information Disclosure)

Permite acesso a informações que deveriam permanecer protegidas.

**Exemplos**

* senhas;
* tokens;
* chaves criptográficas;
* arquivos internos;
* dados pessoais.

---

### Negação de Serviço (Denial of Service – DoS)

Permite interromper ou degradar o funcionamento de um serviço.

Em ataques distribuídos (DDoS), múltiplos sistemas são utilizados simultaneamente.

**Exemplo**

Uma vulnerabilidade que permite consumir toda a memória disponível do servidor.

---

### Falhas de Autenticação

Relacionadas ao processo de identificação dos usuários.

Podem permitir:

* login indevido;
* reutilização de sessões;
* roubo de credenciais.

---

### Falhas de Autorização

Ocorrem quando usuários autenticados conseguem acessar recursos para os quais não possuem permissão.

**Exemplo**

Um usuário comum acessa dados pertencentes a outra conta apenas alterando um identificador na URL.

---

### Configuração Insegura (Security Misconfiguration)

Nem todas as vulnerabilidades estão no código.

Configurações incorretas também podem expor sistemas.

**Exemplos**

* senhas padrão;
* serviços desnecessários habilitados;
* buckets públicos;
* permissões excessivas;
* portas expostas.

---

### Dependências Vulneráveis

Projetos podem herdar vulnerabilidades presentes em bibliotecas de terceiros.

Hoje, essa é uma das principais fontes de vulnerabilidades em aplicações modernas.

**Exemplo**

Uma aplicação utiliza uma versão vulnerável do OpenSSL ou do Log4j.

---

### Vulnerabilidades na Cadeia de Suprimentos

Afetam ferramentas utilizadas durante o desenvolvimento ou distribuição do software.

**Exemplos**

* bibliotecas comprometidas;
* ataques a pipelines de CI/CD;
* artefatos adulterados;
* ataques a registries de pacotes.

## Vulnerabilidades conhecidas e desconhecidas

As vulnerabilidades podem ser classificadas de acordo com seu conhecimento público.

### Vulnerabilidades conhecidas

São aquelas já identificadas, documentadas e frequentemente registradas com um identificador **CVE**.

Normalmente possuem:

* descrição pública;
* análise de impacto;
* correções disponíveis;
* pontuação CVSS.

### Zero-day

São vulnerabilidades desconhecidas pelos desenvolvedores ou para as quais ainda não existe correção disponível.

Quando exploradas antes da disponibilização de um patch, são chamadas de **zero-day exploits**.

Essas vulnerabilidades costumam representar alto risco.

## Casos reais

### Log4Shell

A vulnerabilidade **Log4Shell**, descoberta em 2021, afetou milhões de aplicações Java ao permitir execução remota de código por meio da biblioteca Apache Log4j.

Foi considerada uma das vulnerabilidades mais graves já registradas.

### Heartbleed

A vulnerabilidade **Heartbleed**, descoberta em 2014 na biblioteca OpenSSL, permitia a leitura de áreas da memória de servidores, expondo informações sensíveis como senhas e chaves privadas.

### EternalBlue

A vulnerabilidade **EternalBlue**, explorada pelo ransomware WannaCry em 2017, permitia execução remota de código em sistemas Microsoft Windows por meio do protocolo SMB.

### XZ Utils

Em 2024, pesquisadores descobriram uma sofisticada porta dos fundos introduzida no projeto XZ Utils, demonstrando como vulnerabilidades também podem surgir na cadeia de suprimentos de software.

## Como vulnerabilidades são identificadas?

Diversas técnicas podem ser utilizadas para encontrar vulnerabilidades.

Entre elas:

* revisão de código;
* testes de segurança;
* análise estática (SAST);
* análise dinâmica (DAST);
* fuzzing;
* auditorias independentes;
* programas de *bug bounty*;
* pesquisas acadêmicas;
* scanners automáticos.

Muitas vulnerabilidades são descobertas pela própria comunidade Open Source.

## Como reduzir vulnerabilidades?

Não existe software totalmente livre de vulnerabilidades, mas diversas práticas ajudam a reduzir riscos.

Entre elas:

* manter dependências atualizadas;
* revisar código;
* utilizar testes automatizados;
* adotar princípios de desenvolvimento seguro (*Secure by Design*);
* realizar análises de segurança continuamente;
* utilizar autenticação forte;
* aplicar o princípio do menor privilégio;
* monitorar CVEs;
* corrigir rapidamente vulnerabilidades identificadas;
* utilizar ferramentas de análise de dependências.

## Ferramentas

Diversas ferramentas auxiliam na identificação e gerenciamento de vulnerabilidades.

| Ferramenta                 | Descrição                                                               |
| -------------------------- | ----------------------------------------------------------------------- |
| **Trivy**                  | Scanner de vulnerabilidades para dependências, containers e sistemas.   |
| **Grype**                  | Scanner baseado em SBOMs.                                               |
| **Snyk**                   | Identifica vulnerabilidades em dependências e imagens de containers.    |
| **OWASP Dependency-Check** | Analisa dependências em busca de CVEs conhecidos.                       |
| **GitHub Dependabot**      | Monitora dependências e sugere atualizações de segurança.               |
| **SonarQube**              | Identifica problemas de qualidade e algumas vulnerabilidades no código. |
| **Semgrep**                | Ferramenta de análise estática para identificar padrões inseguros.      |

## Vulnerabilidades e outros conceitos

As vulnerabilidades fazem parte de um ecossistema maior de segurança.

Alguns conceitos relacionados incluem:

| Conceito                  | Função                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------- |
| **CVE**                   | Identifica uma vulnerabilidade conhecida.                                           |
| **CVSS**                  | Mede sua gravidade.                                                                 |
| **SBOM**                  | Permite identificar componentes vulneráveis em um software.                         |
| **Supply Chain Security** | Busca reduzir riscos relacionados às dependências e ao processo de desenvolvimento. |
| **SLSA**                  | Define boas práticas para proteger a cadeia de suprimentos de software.             |

Compreender o que são vulnerabilidades e como elas surgem é um dos primeiros passos para desenvolver, manter e utilizar software de forma mais segura. Embora seja impossível eliminar completamente todas as vulnerabilidades, a adoção de boas práticas, ferramentas adequadas e monitoramento contínuo permite reduzir significativamente os riscos e responder com rapidez quando novas falhas são descobertas.
