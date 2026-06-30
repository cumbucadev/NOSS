# CODEOWNERS

O arquivo **CODEOWNERS** permite definir pessoas ou equipes responsáveis por partes específicas de um repositório. Quando um *Pull Request* modifica arquivos ou diretórios definidos nesse arquivo, as pessoas responsáveis podem ser automaticamente solicitadas para revisar as alterações.

Esse recurso está disponível em plataformas como o GitHub e ajuda a distribuir responsabilidades, organizar revisões e garantir que mudanças importantes sejam avaliadas pelas pessoas com maior conhecimento sobre cada área do projeto.

Normalmente, o arquivo é chamado `CODEOWNERS` e pode ser localizado em um dos seguintes caminhos:

* `.github/CODEOWNERS`
* `docs/CODEOWNERS`
* `CODEOWNERS` na raiz do repositório

## Para que serve?

O principal objetivo do `CODEOWNERS` é definir quem é responsável pela revisão e manutenção de determinadas partes do projeto.

Ele pode ser utilizado para:

* solicitar automaticamente revisores em Pull Requests;
* definir responsáveis por diretórios ou arquivos específicos;
* organizar projetos com múltiplas equipes;
* distribuir revisões entre especialistas de diferentes áreas;
* evitar que alterações importantes sejam aprovadas sem revisão adequada.

O arquivo não concede permissões nem controla acesso ao repositório. Ele apenas identifica quem deve ser envolvido no processo de revisão.

## Benefícios de utilizar um CODEOWNERS

Adotar um `CODEOWNERS` pode trazer diversas vantagens:

* revisões mais rápidas e organizadas;
* definição clara de responsabilidades;
* redução de dúvidas sobre quem revisar determinada alteração;
* maior qualidade nas revisões de código;
* preservação do conhecimento técnico sobre diferentes partes do projeto;
* apoio à governança do projeto;
* melhor escalabilidade conforme o projeto cresce.

Em organizações com vários times, ele também facilita a colaboração entre equipes.

## Como funciona?

O arquivo utiliza um formato simples baseado em padrões de caminhos (*path patterns*).

Cada linha associa um arquivo, diretório ou padrão a um ou mais responsáveis.

Por exemplo:

```text
# Responsável por toda a documentação
/docs/ @time-documentacao

# Responsável pelo backend
/backend/ @backend-team

# Arquivo específico
README.md @maintainer

# Todos os arquivos Python
*.py @python-team
```

Sempre que um Pull Request modificar esses arquivos, o GitHub poderá solicitar automaticamente uma revisão aos responsáveis definidos.

## Exemplos de uso

O `CODEOWNERS` é especialmente útil em projetos onde diferentes pessoas possuem especialidades distintas.

Alguns exemplos incluem:

* uma equipe responsável pela documentação;
* outra equipe responsável pela infraestrutura;
* especialistas em segurança revisando alterações relacionadas à autenticação;
* mantenedores específicos para diferentes bibliotecas de um monorepositório;
* responsáveis por traduções ou internacionalização.

Em projetos grandes, um mesmo repositório pode possuir dezenas de áreas de responsabilidade definidas.

## Documentação

A documentação oficial do GitHub explica o funcionamento do recurso, a sintaxe suportada e as limitações do arquivo.

* **Documentação oficial (Português):** https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners

## Todo projeto precisa de um CODEOWNERS?

Não.

Assim como outras práticas de engenharia de software, a adoção do `CODEOWNERS` deve considerar o contexto do projeto.

Em projetos pequenos, mantidos por uma única pessoa ou por um grupo reduzido de colaboradores, o arquivo pode não trazer benefícios significativos.

Por outro lado, ele costuma ser bastante útil quando o projeto:

* possui vários mantenedores;
* recebe muitas contribuições externas;
* é dividido em diferentes módulos;
* possui equipes responsáveis por áreas específicas;
* exige revisão obrigatória antes da aprovação de Pull Requests;
* faz parte de uma organização com múltiplos times.

À medida que o projeto cresce, definir responsabilidades explícitas tende a tornar o processo de revisão mais organizado e eficiente.

## Boas práticas

Ao utilizar um `CODEOWNERS`, recomenda-se:

* definir responsáveis que realmente acompanhem aquela área do projeto;
* evitar concentrar todas as responsabilidades em uma única pessoa;
* manter o arquivo atualizado conforme a equipe evolui;
* utilizar equipes (*teams*) sempre que possível, em vez de usuários individuais;
* revisar periodicamente se a divisão das responsabilidades ainda faz sentido;
* manter a estrutura do arquivo simples e fácil de entender.

## Limitações

É importante lembrar que o `CODEOWNERS` não substitui a governança do projeto.

Ele não controla permissões de acesso, não impede alterações por si só e não define regras de aprovação. Para exigir revisões dos responsáveis definidos, normalmente é necessário combinar o `CODEOWNERS` com regras de proteção de branches (*Branch Protection Rules*).

Quando utilizado de forma adequada, o `CODEOWNERS` contribui para uma manutenção mais organizada, melhora a qualidade das revisões e torna mais claras as responsabilidades dentro de um projeto Open Source.
