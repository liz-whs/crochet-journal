formulario.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const pecas =
            JSON.parse(
                localStorage.getItem(
                    "pecasCroche"
                )
            ) || [];


        const novaPeca = {

            id: Date.now(),

            nome:
                document
                .getElementById("nome")
                .value,

            categoria:
                document
                .getElementById("categoria")
                .value,

            nivel:
                document
                .getElementById("nivel")
                .value,

            agulha:
                document
                .getElementById("agulha")
                .value,

            fio:
                document
                .getElementById("fio")
                .value,

            imagem:
                document
                .getElementById("imagem")
                .value,

            materiais:
                document
                .getElementById("materiais")
                .value
                .split("\n")
                .filter(
                    material =>
                        material.trim() !== ""
                ),

            tutorial:
                document
                .getElementById("tutorial")
                .value
                .split("\n")
                .filter(
                    passo =>
                        passo.trim() !== ""
                ),

            fotos:
                document
                .getElementById("fotos")
                .value
                .split("\n")
                .filter(
                    foto =>
                        foto.trim() !== ""
                )

        };


        pecas.push(novaPeca);


        localStorage.setItem(
            "pecasCroche",
            JSON.stringify(pecas)
        );


        window.location.href =
            "index.html";

    }
);