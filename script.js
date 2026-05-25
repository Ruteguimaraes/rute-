// Selecionando os elementos do DOM
const checkboxes = document.querySelectorAll('.opcoes input[type="checkbox"]');
const mensagemResultado = document.getElementById('mensagem-resultado');
const barraProgresso = document.getElementById('progresso');

// Função para calcular o impacto baseado nas caixas marcadas
function atualizarSimulador() {
    let pontuacaoTotal = 0;
    let selecionados = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            pontuacaoTotal += parseInt(checkbox.value);
            selecionados++;
        }
    });

    // Atualiza a barra de progresso visual (máximo aqui seria 100 se todos marcados)
    barraProgresso.style.width = `${pontuacaoTotal}%`;

    // Atualiza o texto de feedback com base nas escolhas
    if (selecionados === 0) {
        mensagemResultado.textContent = "Selecione uma prática acima para ver o impacto do futuro do agro!";
        barraProgresso.style.backgroundColor = "#ddd";
    } else if (selecionados === 1) {
        mensagemResultado.textContent = "Bom começo! Sua fazenda já está reduzindo o impacto e iniciando a jornada sustentável.";
        barraProgresso.style.backgroundColor = "#81c784"; // Verde claro
    } else if (selecionados === 2) {
        mensagemResultado.textContent = "Excelente! Grande equilíbrio entre produção e preservação dos recursos locais.";
        barra