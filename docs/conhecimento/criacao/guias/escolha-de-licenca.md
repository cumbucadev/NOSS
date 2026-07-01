# Como escolher uma licença

Escolher uma licença é uma das etapas mais importantes ao publicar um projeto de Software Livre e Open Source (FLOSS). A licença define como outras pessoas poderão utilizar, modificar e distribuir seu software.

Se você ainda não conhece o tema, recomendamos a leitura do artigo **[O que é uma licença Open Source?](../../floss/licenca-de-software.md)** antes de continuar.

## Antes de escolher uma licença

Se ainda tiver dúvidas sobre o assunto, estes tópicos podem ajudar:

- **[O que é uma licença de software?](../../floss/licenca-de-software.md)**
- **[Para que serve uma licença?](../../floss/licenca-de-software.md#para-que-serve-uma-licenca)**
- **[Por que é importante ter uma licença?](../../floss/licenca-de-software.md#por-que-e-importante-ter-uma-licenca)**
- **[O que acontece se um projeto não tiver uma licença?](../../floss/licenca-de-software.md#o-que-acontece-se-um-projeto-nao-tiver-uma-licenca)**
- **[Tipos de licença](../../floss/licenca-de-software.md#tipos-de-licenca)**

## Passo a passo

### 1. Defina seus objetivos

Antes de escolher uma licença, reflita sobre o que você espera para o seu projeto.

Algumas perguntas podem ajudar:

- Você quer permitir uso comercial?
- Você deseja que pessoas possam criar projetos derivados?
- Você quer que modificações também permaneçam Open Source?
- Seu projeto será utilizado por empresas?
- Seu projeto utiliza dependências que exigem uma licença específica?

Responder essas perguntas torna a escolha muito mais simples.

---

### 2. Escolha o tipo de licença

Em geral, existem dois grandes grupos de licenças Open Source:

- **Permissivas**, como MIT, BSD e Apache 2.0, que oferecem maior liberdade para reutilização.
- **Copyleft**, como GPL e AGPL, que exigem que determinadas modificações também sejam distribuídas sob uma licença compatível.

Caso ainda não conheça essas diferenças, consulte a seção **[Tipos de licenças Open Source](../../floss/licenca-de-software.md#tipos-de-licenca)**.

---

### 3. Utilize uma ferramenta

Não é necessário escolher uma licença sozinho. Existem ferramentas que ajudam nesse processo.

> As ferramentas abaixo estão em inglês. Se preferir, utilize o recurso de tradução automática do
> seu navegador para visualizar o conteúdo em português.

#### WhatLicense

O **WhatLicense** faz algumas perguntas sobre seu projeto e sugere licenças compatíveis.

<https://whatlicense.org/>

#### Choose a License

O **Choose a License**, mantido pelo GitHub, apresenta as principais licenças Open Source e ajuda você a identificar qual atende melhor às necessidades do seu projeto.

<https://choosealicense.com>

---

### 4. Adicione a licença ao projeto

Depois de escolher uma licença:

- crie um arquivo chamado `LICENSE` na raiz do repositório;
- copie o texto oficial da licença;
- preencha os campos solicitados, quando necessário (como ano e titular dos direitos autorais).

Plataformas como o GitHub reconhecem automaticamente as principais licenças Open Source.

---

### 5. Informe a licença na documentação

Também é recomendado informar a licença no `README.md` do projeto.

Exemplo:

```text
## License

This project is licensed under the MIT License.
```

Isso facilita a identificação da licença por pessoas usuárias e contribuidoras.

## Boas práticas

- Utilize licenças reconhecidas pela Open Source Initiative (OSI).
- Evite criar licenças personalizadas.
- Não modifique o texto oficial de uma licença.
- Verifique a compatibilidade entre licenças quando utilizar dependências de terceiros.
- Em caso de dúvidas jurídicas, procure orientação especializada.

## Recursos

- WhatLicense: <https://whatlicense.org/>
- Choose a License: <https://choosealicense.com>
- Open Source Initiative (OSI): <https://opensource.org/licenses>
- SPDX License List: <https://spdx.org/licenses/>
