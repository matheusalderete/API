const apiKey = "bce99134a128498fbab180151262406"; 

document.getElementById("btn-buscar").addEventListener("click", buscarClima);

function buscarClima() {
    const cidade = document.getElementById("input-cidade").value.trim();

    if (!cidade) {
        alert("Digite o nome de uma cidade.");
        return;
    }

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cidade}&lang=pt&days=1`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Cidade não encontrada.");
            }
            return response.json();
        })
        .then(data => {
            const infoAtual = data.current;
            const local = data.location;

            document.getElementById("cidade").innerText =
                `${local.name}, ${local.region}`;

            document.getElementById("temperatura").innerText =
                `${infoAtual.temp_c}°C`;

            document.getElementById("clima").innerText =
                infoAtual.condition.text;

            document.getElementById("umidade").innerText =
                `${infoAtual.humidity}%`;

            document.getElementById("icone").src =
                `https:${infoAtual.condition.icon}`;

            document.getElementById("icone").alt =
                infoAtual.condition.text;
        })
        .catch(error => {
            document.getElementById("cidade").innerText = "Erro";
            document.getElementById("temperatura").innerText = "-";
            document.getElementById("clima").innerText = error.message;
            document.getElementById("umidade").innerText = "-";
            document.getElementById("icone").src = "";
        });
}