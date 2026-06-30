.PHONY: install
install:
	@echo "Installing dependencies..."
	@uv sync --group dev --no-install-project

.PHONY: serve
serve:
	@echo "Starting documentation server..."
	@uv run mkdocs serve

.PHONY: build
build:
	@echo "Building documentation..."
	@uv run mkdocs build

.PHONY: clean
clean:
	@echo "Cleaning generated files..."
	@rm -rf site

.PHONY: format
format:
	@uv run ruff format .

.PHONY: lint
lint:
	@uv run ruff check .

.PHONY: lint-fix
lint-fix:
	@uv run ruff check . --fix

.PHONY: check
check: lint

.PHONY: pre-commit
pre-commit:
	@uv run pre-commit run --all-files
