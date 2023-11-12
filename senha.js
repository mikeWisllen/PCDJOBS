document.getElementById('recoveryNumber').addEventListener('input', function () {
    let recoveryNumber = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (recoveryNumber.length === 11) {
        // Formata como CPF
        recoveryNumber = recoveryNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (recoveryNumber.length === 14) {
        // Formata como CNPJ
        recoveryNumber = recoveryNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    this.value = recoveryNumber; // Define o valor formatado de volta no campo de entrada
});

document.querySelector('.formLogin').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const recoveryNumber = document.getElementById('recoveryNumber').value;
    const formattedRecoveryNumber = recoveryNumber.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (formattedRecoveryNumber.length === 11 || formattedRecoveryNumber.length === 14) {
        alert("Informações para recuperação de senha enviadas para o e-mail cadastrado.");
    } else {
        alert("Por favor, insira um CPF ou CNPJ válido.");
    }
});
