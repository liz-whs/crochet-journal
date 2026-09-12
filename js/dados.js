const pecasIniciais = [

    {
        id: 1,

        nome: "Blusinha de Crochê",

        categoria: "roupa",

        nivel: "Intermediário",

        agulha: "3,5 mm",

        fio: "Algodão",

        imagem: "img/blusinha.jpg",

        materiais: [
            "Fio de algodão",
            "Agulha 3,5 mm",
            "Tesoura",
            "Agulha de tapeçaria"
        ],

        tutorial: [
            "Meça a distância de um braço ao outro passando pelos ombros/busto.",
            "Faça uma correntinha no comprimento dessa medição + 4 correntinhas adicionais (essas 4 contam como o primeiro ponto alto e a primeira correntinha de espaço).",
            "Faça 1 ponto alto (pa) na 7ª correntinha a contar da agulha.",
            "Em seguida, faça: [1 corr, pule 1 pt base, 1 pa] repetindo essa sequência até o final da correntinha.",
            "Suba 4 correntinhas (contam como 1 pa + 1 corr).",
            "Faça 1 pa sobre o 3º ponto (o próximo pa da base), [1 corr, 1 pa] até o final da carreira.",
            "Repita a Carreira 2 até atingir o comprimento desejado para cobrir do ombro até abaixo do busto.",
            "Arremate e corte o fio.",
            "Meça a largura do seu tronco/cintura onde ficará o corpo da peça",
            "Subtraia a medida do corpo da quantidade total de pontos do painel do busto.",
            "Divida o resultado por 2 para encontrar o tamanho de cada manga.",
            "Prenda o fio no ponto calculado.",
            "Faça 1 pa no primeiro ponto demarcado, e continue no padrão [1 corr, 1 pa] até atingir a largura calculada para o corpo",
            "Suba 4 correntinhas (contam como 1 pa + 1 corr).",
            "Faça [1 pa no próximo pa, 1 corr] até o final da carreira do corpo.",
            "Repita até atingir o comprimento desejado para a cintura/quadril.",
            "Finalize a barra fazendo 2 carreiras completas apenas de pontos altos (pa).",
            "Repita exatamente todo o processo (Passos 1 e 2) para tecer o segundo painel igual.",
            "Junte o painel da frente e o de trás.",
            "Faça pontos baixíssimos (pbx) para unir as partes superiores dos ombros/mangas e as partes inferiores das mangas.",
            "Decote: Deixe uma abertura central no topo de 65 pontos em cada painel (130 pontos no total para a passagem da cabeça).",
            "Prenda o fio no meio de cada lateral do corpo.",
            "Faça 40 correntinhas e volte fazendo 1 ponto baixíssimo (pbx) em cada correntinha para formar o cordão de amarrar.",
            "Para finalizar a abertura das mangas, faça 2 carreiras apenas em pontos altos (pa) ao redor da borda de cada manga."
        ],

        fotos: [
            "img/blusinha.jpg",
            "img/blusinha-detalhe.jpg",
        ]
    },


    {
        id: 2,

        nome: "Tapete de Crochê",

        categoria: "decoração",

        nivel: "Fácil",

        agulha: "4 mm",

        fio: "Barbante",

        imagem: "img/tapete.jpg",

        materiais: [
            "Barbante",
            "Agulha 4 mm",
            "Tesoura"
        ],

        tutorial: [
            "Suba 3 correntinhas (contam como o 1º ponto alto) e faça mais 15 pontos altos dentro do anel. Feche com 1 ponto baixíssimo (total: 16 pontos altos).",
            "Suba 3 correntinhas e faça 1 ponto alto no mesmo ponto de origem. Faça 2 pontos altos em cada ponto de base por toda a volta. Feche com 1 ponto baixíssimo (total: 32 pontos altos).",
            "Suba 3 correntinhas, faça 1 ponto alto no próximo ponto, 1 aumento no seguinte. Siga o padrão de [1 pa, 1 aumento] por toda a volta. Feche com 1 ponto baixíssimo (total: 48 pontos altos).",
            "Suba 3 correntinhas, faça 1 pa no próximo ponto e 1 aumento no seguinte. Continue no padrão de [2 pa, 1 aumento] por toda a volta. Feche com 1 ponto baixíssimo (total: 64 pontos altos)..",
            "Suba 3 correntinhas, faça 1 pa nos próximos 2 pontos e 1 aumento. Siga o padrão de [3 pa, 1 aumento] por toda a volta. Feche com 1 ponto baixíssimo.",
            "Suba 3 correntinhas, trabalhe [4 pa, 1 aumento] por toda a volta. Feche com 1 ponto baixíssimo.",
            "Suba 3 correntinhas, trabalhe [5 pa, 1 aumento] por toda a volta. Feche com 1 ponto baixíssimo.",
            "Suba 3 correntinhas, trabalhe [6 pa, 1 aumento] por toda a volta. Feche com 1 ponto baixíssimo e arremate."
        ],

        fotos: [
            "img/tapete.jpg",
            "img/tapete-detalhe.jpg"
        ]
    }

];

if (!localStorage.getItem("pecasCroche")) {

    localStorage.setItem(
        "pecasCroche",
        JSON.stringify(pecasIniciais)
    );

}