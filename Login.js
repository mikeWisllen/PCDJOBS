// Adiciona um ouvinte de evento para o campo de número de login
document.getElementById('loginNumber').addEventListener('input', function () {
    const loginNumber = this.value;
    const numericValue = loginNumber.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (numericValue.length === 11) { // Verifica se o número possui 11 dígitos (CPF)
        this.value = numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata como CPF
    } else if (numericValue.length === 14) { // Verifica se o número possui 14 dígitos (CNPJ)
        this.value = numericValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); // Formata como CNPJ
    } else {
        this.value = numericValue; // Caso contrário, mantém o valor não formatado
    }
});
