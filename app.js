const imagem = document.getElementById("imagem");
const buscar = document.getElementById("buscar");

async function buscarCachorro() {
    try {
        // Desabilita o botão enquanto carrega
        buscar.disabled = true;
        buscar.textContent = "🐾 Procurando um doguinho...";

        // Busca uma imagem aleatória
        const resposta = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!resposta.ok) {
            throw new Error("Não foi possível buscar a imagem.");
        }

        const dados = await resposta.json();

        // Coloca a imagem na tela
        imagem.src = dados.message;

        imagem.alt = "Um cachorro fofo 🐶";

    } catch (erro) {
        console.error("Erro:", erro);
        imagem.alt = "Erro ao carregar o cachorro 😢";

    } finally {
        // Ativa o botão novamente
        buscar.disabled = false;
        buscar.textContent = "🐶 Buscar outro cachorro";
    }
}

// Botão para buscar outro cachorro
buscar.addEventListener("click", buscarCachorro);

// Carrega um cachorro automaticamente ao abrir a página
buscarCachorro();