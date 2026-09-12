const parametros =
    new URLSearchParams(
        window.location.search
    );


const id =
    Number(
        parametros.get("id")
    );


const pecas =
    JSON.parse(
        localStorage.getItem(
            "pecasCroche"
        )
    ) || [];


const peca =
    pecas.find(
        peca => peca.id === id
    );


const conteudo =
    document.getElementById(
        "conteudoTutorial"
    );


if (!peca) {

    conteudo.innerHTML = `

        <h1>
            Peça não encontrada :(
        </h1>

    `;

} else {

    mostrarTutorial();

}



function mostrarTutorial() {


    const materiaisHTML =
        peca.materiais
        .map(
            material => `
                <li>${material}</li>
            `
        )
        .join("");


    const tutorialHTML =
        peca.tutorial
        .map(
            (passo, indice) => `

                <div class="passo">

                    <strong>
                        ${String(indice + 1)
                            .padStart(2, "0")}.
                    </strong>

                    ${passo}

                </div>

            `
        )
        .join("");


    const fotosHTML =
        peca.fotos
        .map(
            foto => `

                <img
                    src="${foto}"
                    alt="${peca.nome}"
                >

            `
        )
        .join("");


    conteudo.innerHTML = `


        <header class="tutorial-cabecalho">

            <p class="comentario">
                [${peca.categoria}]
            </p>

            <h1>
                ${peca.nome}
            </h1>

            <p class="descricao">
                // tutorial salvo no seu crochet journal
            </p>

        </header>


        <img
            src="${peca.imagem}"
            alt="${peca.nome}"
            class="imagem-principal"
        >


        <section class="informacoes">


            <div class="info">

                <span>
                    nível
                </span>

                <strong>
                    ${peca.nivel}
                </strong>

            </div>


            <div class="info">

                <span>
                    agulha
                </span>

                <strong>
                    ${peca.agulha || "—"}
                </strong>

            </div>


            <div class="info">

                <span>
                    fio
                </span>

                <strong>
                    ${peca.fio || "—"}
                </strong>

            </div>


        </section>


        <section class="bloco-tutorial">

            <p class="comentario">
                // o que você vai precisar
            </p>

            <h2>
                Materiais
            </h2>

            <ul class="lista-materiais">

                ${materiaisHTML}

            </ul>

        </section>


        <section class="bloco-tutorial">

            <p class="comentario">
                // mãos à obra
            </p>

            <h2>
                Passo a passo
            </h2>

            ${tutorialHTML}

        </section>


        ${
            peca.fotos.length > 0

            ?

            `

            <section class="bloco-tutorial">

                <p class="comentario">
                    // mais fotos
                </p>

                <h2>
                    Galeria
                </h2>

                <div class="galeria">

                    ${fotosHTML}

                </div>

            </section>

            `

            :

            ""
        }


    `;

}