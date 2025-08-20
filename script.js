function calcularSaida() {
    let entrada = document.getElementById("entrada").value;
    let almoco = document.getElementById("almoco").value;
    let horasTrabalho = 8;
    let minutosTrabalho = 48;

    if (almoco === "") {
        almoco = "01:05";
    }

    if (entrada) {
        let partesEntrada = entrada.split(":");
        let horaEntrada = parseInt(partesEntrada[0]);
        let minutoEntrada = parseInt(partesEntrada[1]);

        let partesAlmoco = almoco.split(":");
        let horasAlmoco = parseInt(partesAlmoco[0]);
        let minutosAlmoco = parseInt(partesAlmoco[1]);

        let minutosTotais = horaEntrada * 60 + minutoEntrada + (horasTrabalho * 60 + minutosTrabalho) + (horasAlmoco * 60 + minutosAlmoco);
        let horaSaida = Math.floor(minutosTotais / 60);
        let minutoSaida = minutosTotais % 60;

        let horaSugestaoAlmoco  = horaEntrada + Math.floor(horasTrabalho / 2);

        document.getElementById("saida").textContent = `Horário de saída: ${horaSaida.toString().padStart(2, '0')}:${minutoSaida.toString().padStart(2, '0')}`;
        document.getElementById("almoco_sugestao").textContent = `Sugestão de horário de almoço: ${horaSugestaoAlmoco.toString().padStart(2, '0')}:${minutoEntrada.toString().padStart(2, '0')}`;
    } else {
        document.getElementById("saida").textContent = "Por favor, insira valores válidos.";
    }
}