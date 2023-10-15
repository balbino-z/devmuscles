// Quando o documento estiver completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    const exercicioInput = document.getElementById("exercicio");
    const seriesInput = document.getElementById("series");
    const repeticoesInput = document.getElementById("repeticoes");
    const cargaInput = document.getElementById("carga");
    const adicionarExercicioButton = document.getElementById("adicionar-exercicio");
    const listaDeExercicios = document.getElementById("lista-de-exercicios");
    const totalVolume = document.getElementById("total-volume");

    const exercicios = [];

    // Função para calcular o volume do treino
    function calcularVolume() {
        let volumeTotal = 0;
        exercicios.forEach(function (exercicio) {
            volumeTotal += exercicio.series * exercicio.repeticoes * exercicio.carga;
        });
        totalVolume.textContent = "Volume Total: " + volumeTotal + " Kg";
    }

    // Função para adicionar um exercício à lista
    function adicionarExercicio() {
        const exercicio = {
            nome: exercicioInput.value,
            series: parseInt(seriesInput.value, 10),
            repeticoes: parseInt(repeticoesInput.value, 10),
            carga: parseInt(cargaInput.value, 10),
        };

        exercicios.push(exercicio);

        const exercicioItem = document.createElement("li");
        exercicioItem.textContent = `${exercicio.nome} - ${exercicio.series} séries x ${exercicio.repeticoes} repetições x ${exercicio.carga} Kg`;

        listaDeExercicios.appendChild(exercicioItem);

        // Recalcule o volume do treino sempre que um exercício for adicionado
        calcularVolume();

        // Limpe os campos de entrada
        exercicioInput.value = "";
        seriesInput.value = "";
        repeticoesInput.value = "";
        cargaInput.value = "";
    }

    // Adicionar um evento de clique ao botão "Adicionar Exercício"
    adicionarExercicioButton.addEventListener("click", adicionarExercicio);
});

const treinosSalvos = []; // Array para armazenar treinos salvos

// Evento de clique no botão "Salvar Treino"
document.getElementById("salvar-treino").addEventListener("click", function () {
    const exercicio = document.getElementById("exercicio").value;
    const series = document.getElementById("series").value;
    const repeticoes = document.getElementById("repeticoes").value;
    const carga = document.getElementById("carga").value;

    const treino = {
        exercicio,
        series,
        repeticoes,
        carga,
    };

    treinosSalvos.push(treino);
    alert("Treino salvo com sucesso!");
});

// Evento de clique no botão "Acessar Treinos Salvos"
document.getElementById("acessar-treinos-salvos").addEventListener("click", function () {
    if (treinosSalvos.length === 0) {
        alert("Nenhum treino foi salvo ainda.");
    } else {
        alert("Treinos salvos:\n" + JSON.stringify(treinosSalvos, null, 2));
    }
});
    document.addEventListener("DOMContentLoaded", function () {
        // Array para armazenar os exercícios do treino
        const treino = [];

        // Botão "Adicionar Exercício"
        const adicionarExercicioButton = document.getElementById("adicionar-exercicio");
        adicionarExercicioButton.addEventListener("click", function () {
            // Aqui, você pode adicionar a lógica para adicionar um exercício ao treino
            const exercicio = document.getElementById("exercicio").value;
            const series = document.getElementById("series").value;
            const repeticoes = document.getElementById("repeticoes").value;
            const carga = document.getElementById("carga").value;
            // Adicione a lógica para adicionar esses valores ao treino, por exemplo:
            treino.push({ exercicio, series, repeticoes, carga });
            console.log("Exercício adicionado:", exercicio);
        });

    });