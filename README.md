
# NextGamer

NextGamer é um sistema web de comércio digital desenvolvido para uma e-commerce fictícia de jogos e consoles. Este projeto oferece uma experiência para a compra de produtos relacionados a videogames, permitindo que os usuários visualizem, adicionem e removam produtos do carrinho de compras.

[💻 Teste aqui](https://teste-tecnico-front-end-luiz-campos.vercel.app/)


## Funcionalidades

* Visualizar Produtos: os usuários podem navegar pelo catálogo de jogos e consoles disponíveis. Há um menu que facilitará aa pesquisa com os atalhos: "Consoles" e "Jogos";
* Pesquisa: busque por produtos específicos dentro da plataforma;
* Adicionar ao Carrinho: adicione produtos ao carrinho de compras;
* Remover do Carrinho: remova produtos indesejados do carrinho de compras;
* Aumentar/diminuar quantidade do item no carrinho;
* Visualizar o valor total e o valor parcelado em 10x.

## Tecnologias

* HTML5;
* CSS3;
* JavaScript;
* React;
* [React Icons](https://react-icons.github.io/react-icons);
* [API do Mercado Livre](https://api.mercadolibre.com/sites/MLB/search?q=) (para a busca dos produtos). 

## Por que foi usado React?

Optei por usar o React devido às suas diversas vantagens no desenvolvimento de interfaces de usuário modernas:

* Componentização: o React permite criar componentes reutilizáveis, facilitando a manutenção e a escalabilidade do código. Ex: os cards de cada produto;
* Desempenho: a utilização da virtual DOM pelo React melhora o desempenho da aplicação, tornando-a mais rápida e responsiva;
* Conhecimento: o React é a tecnologia a qual tenho mais familiaridade, portanto, foi crucial esse fator na escolha.

## Responsividade

Para que a aplicação seja disponibilizada para diversos dispositivos, segui a metodologia mobile first com flexbox e grid a fim de proporcionar essa adaptação.

## Acessibilidade

Algumas diretrizes de acessibilidade foram implementadas, como o texto alternativo para as imagens.


## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Verde       | ![#40c652](https://via.placeholder.com/10/40c652?text=+) #40c652 |
| Texto Card       | ![#e2e2e2](https://via.placeholder.com/10/e2e2e2?text=+) #e2e2e2 |
| Texto geral       | ![#fffcff](https://via.placeholder.com/10/fffcff?text=+) #fffcff |
| Card       | ![#292929](https://via.placeholder.com/10/292929?text=+) #292929 |
| Header e Footer       | ![#262525](https://via.placeholder.com/10/262525?text=+) #262525 |
| Background pages       | ![#161616](https://via.placeholder.com/10/161616?text=+) #161616 |

## Como executar o projeto?

1 - Clone este repositório:
```bash
  git clone https://github.com/luizcampos/Teste-Tecnico-Front-End-LuizCampos.git
```
    
2 - Navegue até o diretório do projeto:
```bash
  cd NextGamer
```

3 - Instale as dependências:
```bash
  npm install
```

4 - Execute a aplicação:
```bash
  npm start
```