# Site deployment

This project publishes the documentation with MkDocs on GitHub Pages.

[Versão em Português](RELEASING.md)

## Prerequisites

- Public repository on GitHub
- Permission to enable GitHub Pages
- Project dependencies installed with `uv`

## Local build

To validate the site locally, run:

```bash
uv sync --group dev --no-install-project
uv run mkdocs build
```

To start a local server:

```bash
uv run mkdocs serve
```

## Automatic deployment

The publication workflow is configured to run in GitHub Actions whenever there is a push to the `main` and `hub-conhecimento` branches.

The workflow builds the static site and publishes it to GitHub Pages.

## GitHub configuration

1. Open the repository settings on GitHub.
2. Go to "Pages".
3. In "Build and deployment", select "GitHub Actions".
4. Push the changes to trigger the deployment.

The expected public URL is:

```text
https://cumbucadev.github.io/NOSS/
```
