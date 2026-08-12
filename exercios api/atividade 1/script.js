fetch("dados.json")
    .then(response => response.json())
    .then(data => {
        // Dados de hoje
        document.getElementById("cidade").innerText = data.cidade;
        document.getElementById("temperatura").innerText = data.hoje.temperatura;
        document.getElementById("clima").innerText = data.hoje.clima;
        document.getElementById("umidade").innerText = data.hoje.umidade;
        document.getElementById("icone").src = `img/${data.hoje.icone}`;

        // Previsão dos próximos dias
        const container = document.getElementById("previsao-container");

        data.previsao.forEach(dia => {
            const div = document.createElement("div");

            div.classList.add("previsao-dia");

            div.innerHTML = `
                <h4>${dia.dia}</h4>
                <img src="img/${dia.icone}" alt="${dia.clima}">
                <p>${dia.temperatura}</p>
                <p>${dia.clima}</p>
            `;

            container.appendChild(div);
        });
    })
    .catch(error => {
        document.getElementById("cidade").innerText = "Erro ao carregar dados";
        console.error("Erro:", error);
    });