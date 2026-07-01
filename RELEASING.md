# Deploy do site

Este projeto publica a documentação com MkDocs no GitHub Pages.

[English Version](RELEASING_EN.md)

## Pré-requisitos

- Repositório público no GitHub
- Acesso para habilitar GitHub Pages
- Dependências do projeto instaladas com `uv`

## Build local

Para validar o site localmente, rode:

```bash
uv sync --group dev --no-install-project
uv run mkdocs build
```

Para subir um servidor local:

```bash
uv run mkdocs serve
```

## Deploy automático

O fluxo de publicação está configurado para rodar no GitHub Actions sempre que houver push nas branches `main` e `hub-conhecimento`.

O workflow gera o site estático e publica o conteúdo no GitHub Pages.

## Configuração no GitHub

1. Acesse as configurações do repositório no GitHub.
2. Entre em "Pages".
3. Em "Build and deployment", selecione "GitHub Actions".
4. Faça o push das alterações para disparar o deploy.

A URL pública esperada é:

```text
https://cumbucadev.github.io/NOSS/
```
