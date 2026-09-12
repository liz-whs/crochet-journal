# 🧶 Crochet Journal

Um site desenvolvido para organizar e compartilhar tutoriais de crochê de uma forma simples e visual.

O projeto funciona como uma pequena biblioteca pessoal de crochê: o usuário pode acessar tutoriais já disponíveis, visualizar materiais e passo a passo, além de adicionar suas próprias peças, que ficam salvas diretamente no navegador utilizando **LocalStorage**.

## ✨ Funcionalidades

- Visualização das peças em cards
- Tutoriais padrão disponíveis no site
- Página individual para cada peça
- Lista de materiais
- Passo a passo completo
- Galeria de fotos
- Cadastro de novas peças
- Armazenamento dos projetos com LocalStorage
- Geração dinâmica dos cards com JavaScript

## 🧵 Tutoriais disponíveis

O site possui inicialmente dois tutoriais:

- **Blusinha de Crochê**
- **Tapete de Crochê**

Além deles, o usuário pode selecionar **"+ adicione sua peça"** para cadastrar seus próprios projetos.

## 💾 LocalStorage

As peças adicionadas pelo usuário são armazenadas no `localStorage` do navegador.

Dessa forma, os projetos continuam disponíveis mesmo depois que a página é atualizada.

```javascript
localStorage.setItem(
    "pecasCroche",
    JSON.stringify(pecas)
);
```

Os dados são recuperados utilizando:

```javascript
const pecas = JSON.parse(
    localStorage.getItem("pecasCroche")
) || [];
```

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript
- LocalStorage
- DOM

## 📁 Estrutura

```text
crochet-journal/
│
├── index.html
├── tutorial.html
├── adicionar.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── dados.js
│   ├── index.js
│   ├── tutorial.js
│   └── adicionar.js
│
└── img/
```

## 🎨 Sobre o projeto

A interface foi inspirada na organização visual de ferramentas como o Notion, utilizando cards e blocos para deixar os projetos fáceis de visualizar e acessar.

A proposta foi unir uma estética simples e aconchegante com conceitos de desenvolvimento web, principalmente manipulação do DOM, objetos, arrays e armazenamento de dados no navegador.

---

Feito com 🧶, HTML, CSS e JavaScript.
