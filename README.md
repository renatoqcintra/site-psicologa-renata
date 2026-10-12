# Site institucional para consultório de psicologia

Site institucional de uma página (one-page) para uma psicóloga clínica, feito com **HTML, CSS e JavaScript puro**, sem frameworks e sem etapa de build. O objetivo é apresentar a profissional, explicar o que é a psicoterapia, mostrar as áreas de atendimento e facilitar o contato por WhatsApp.

🔗 **Site no ar:** [psicologarenataqueiroz.com.br/](https://psicologarenataqueiroz.com.br/)

## Seções do site

- **Início:** apresentação com chamada principal e botão de contato.
- **O que é a psicoterapia?:** texto explicativo para quem está procurando atendimento pela primeira vez.
- **Sobre:** apresentação da profissional e do espaço de atendimento.
- **Terapias:** cartões com os temas mais atendidos (ansiedade, autoestima, autoconhecimento e relacionamentos).
- **Contato:** botões para WhatsApp, Instagram e rota no Google Maps.

## Destaques técnicos

- **Layout responsivo**, que se adapta a celular, tablet e computador.
- **Menu mobile** com ícone de hambúrguer que vira "X" ao abrir e fecha ao clicar em um link.
- **Cabeçalho que muda de aparência** ao rolar a página.
- **Animações de entrada (fade-in)** ao rolar, feitas com `IntersectionObserver`, executadas uma única vez por elemento.
- **Botões de contato** que abrem conversa direta no WhatsApp.
- **Google Tag Manager** instalado para medição de acessos.

## Tecnologias

- HTML5 e CSS3
- JavaScript (ES6+), sem bibliotecas
- Fontes Inter e Montserrat (Google Fonts)
- Ícones Font Awesome

## Estrutura do projeto

```
├── index.html
├── scripts.js        # Menu mobile, efeito do cabeçalho e animações de rolagem
├── css/
│   └── style.css     # Estilos e responsividade
└── img/              # Imagens do site
```

## Como rodar localmente

Não precisa instalar nada. Abra o `index.html` direto no navegador, ou rode um servidor local na pasta do projeto:

```bash
python -m http.server 8000
```

e acesse `http://localhost:8000`.

## Autor

Desenvolvido por **Renato Queiroz Cintra**, estudante de Técnico em Informática.

- GitHub: [@renatoqcintra](https://github.com/renatoqcintra)
