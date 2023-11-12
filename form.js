document.addEventListener("DOMContentLoaded", function () {
    const cpfInput = document.getElementById("CPF");

    cpfInput.addEventListener("input", function () {
        // Remove tudo exceto os números
        const cleanedValue = cpfInput.value.replace(/\D/g, "");

        // Formata o CPF como XXX.XXX.XXX-XX
        const formattedValue = cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

        // Define o valor formatado de volta no campo
        cpfInput.value = formattedValue;
    });

    cpfInput.addEventListener("keypress", function (e) {
        // Impede a digitação de caracteres não numéricos
        const isNumeric = /\d/.test(e.key);
        if (!isNumeric) {
            e.preventDefault();
        }
    });

    cpfInput.addEventListener("input", function () {
        // Limita o campo a 14 caracteres (XXX.XXX.XXX-XX)
        if (cpfInput.value.length > 14) {
            cpfInput.value = cpfInput.value.substring(0, 14);
        }

    });

    const curriculoInput = document.getElementById("curriculo");

    curriculoInput.addEventListener("change", function () {
        const selectedFile = curriculoInput.files[0];
        if (selectedFile) {
            // Realize a validação do tipo de arquivo ou tamanho, se necessário.
            // Exemplo: verificar se o tipo de arquivo é .pdf ou .doc, e se o tamanho está dentro de um limite aceitável.

            // Exibir o nome do arquivo selecionado
            alert("Você selecionou o arquivo: " + selectedFile.name);
        }
    });
});
