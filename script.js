const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir) {
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    
    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
        } else {
            contador.textContent--;
            curtiu = false;
        }
    }
});

// Correção do botão de tema
const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("click", mudarTema);

function mudarTema() {
    document.body.classList.toggle("tema-escuro");
    
    // Bônus: troca o ícone de lua para sol quando ativa o modo escuro
    if (document.body.classList.contains("tema-escuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌙";
    }
}