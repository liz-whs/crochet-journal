const gridPecas =
    document.getElementById("gridPecas");

const totalPecas =
    document.getElementById("totalPecas");


const pecas =
    JSON.parse(
        localStorage.getItem("pecasCroche")
    ) || [];


totalPecas.textContent =
    pecas.length;


function criarCards() {

    gridPecas.innerHTML = "";


    pecas.forEach(function (peca) {

        const card =
            document.createElement("article");


        card.classList.add("card-peca");


        card.innerHTML = `

            <img
                src="${peca.imagem}"
                alt="${peca.nome}"
                class="card-imagem"
            >

            <div class="card-conteudo">

                <span class="tag">
                    [peça] ${peca.categoria}/
                </span>

                <h3>
                    ${peca.nome}
                </h3>

                <p>
                    nível: ${peca.nivel}
                </p>

                <span class="link-tutorial">
                    Abrir tutorial →
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            function () {

                window.location.href =
                    `tutorial.html?id=${peca.id}`;

            }
        );


        gridPecas.appendChild(card);

    });


    criarCardAdicionar();

}



function criarCardAdicionar() {

    const cardAdicionar =
        document.createElement("div");


    cardAdicionar.classList.add(
        "card-adicionar"
    );


    cardAdicionar.innerHTML = `

        <div class="mais">
            +
        </div>

        <h3>
            adicione sua peça
        </h3>

        <p class="comentario">
            // crie um novo tutorial
        </p>

    `;


    cardAdicionar.addEventListener(
        "click",
        function () {

            window.location.href =
                "adicionar.html";

        }
    );


    gridPecas.appendChild(
        cardAdicionar
    );

}


criarCards();