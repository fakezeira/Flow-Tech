document.addEventListener('DOMContentLoaded', function() {
        const formulario = document.querySelector('#sectionContato .form');
        formulario.addEventListener('submit', enviarParaWhatsApp);
    });

    function enviarParaWhatsApp(event) {
        event.preventDefault(); // impede o envio padrão do formulário

        const inputNome = document.getElementById("nome");
        const inputMensagem = document.getElementById("textarea");
        const numeroWhatsApp = '5512981984751';

        if (inputNome.value.trim() === "" || inputMensagem.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const nome = inputNome.value.trim();
        const mensagem = inputMensagem.value.trim();
        const textoWhatsApp = `Olá, meu nome é ${encodeURIComponent(nome)}. ${encodeURIComponent(mensagem)}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;

        window.open(urlWhatsApp, "_blank");
    }