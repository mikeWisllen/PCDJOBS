document.addEventListener("DOMContentLoaded", function() {
    // Função para filtrar empresas com base na cidade, tipo de deficiência, área de atuação, tipo de vaga e modo selecionados nas caixas de seleção
    function filtrarEmpresas() {
        var cidadeSelecionada = document.getElementById("cidadeSelect").value;
        var deficienciaSelecionada = document.getElementById("deficienciaSelect").value;
        var areaSelecionada = document.getElementById("areaSelect").value;
        var vagaSelecionada = document.getElementById("vagaSelect").value;
        var modoSelecionado = document.getElementById("modoSelect").value;
        var empresas = document.getElementsByClassName("empresa");

        var empresasExibidas = 0;

        for (var i = 0; i < empresas.length; i++) {
            var empresa = empresas[i];
            var cidadeEmpresa = empresa.querySelector(".cidade").textContent;
            var deficienciaEmpresa = empresa.querySelector(".deficiencia").textContent;
            var areaEmpresa = empresa.querySelector(".area").textContent;
            var vagaEmpresa = empresa.querySelector(".tipo-de-vaga").textContent;
            var modoEmpresa = empresa.querySelector(".modo").textContent;

            var mostrarEmpresa =
                (cidadeSelecionada === "" || cidadeSelecionada === cidadeEmpresa) &&
                (deficienciaSelecionada === "" || deficienciaSelecionada === deficienciaEmpresa) &&
                (areaSelecionada === "" || areaSelecionada === areaEmpresa) &&
                (vagaSelecionada === "" || vagaSelecionada === vagaEmpresa) &&
                (modoSelecionado === "" || modoSelecionado === modoEmpresa);

            if (mostrarEmpresa) {
                empresa.style.display = "block";  // Mostrar empresa
                empresasExibidas++;
            } else {
                empresa.style.display = "none";   // Ocultar empresa
            }
        }

        if (empresasExibidas === 0) {
            alert("Nenhuma empresa correspondente à seleção.");
        }
    }

    // Adicione ouvintes de eventos às caixas de seleção de cidade, deficiência, área, tipo de vaga e modo para chamar a função de filtro quando a seleção mudar
    document.getElementById("cidadeSelect").addEventListener("change", filtrarEmpresas);
    document.getElementById("deficienciaSelect").addEventListener("change", filtrarEmpresas);
    document.getElementById("areaSelect").addEventListener("change", filtrarEmpresas);
    document.getElementById("vagaSelect").addEventListener("change", filtrarEmpresas);
    document.getElementById("modoSelect").addEventListener("change", filtrarEmpresas);
});

/*document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1; // Página inicial
    const itemsPerPage = 4; // Número de itens por página
    const empresas = document.querySelectorAll('.empresa');

    function showPage(page) {
      for (let i = 0; i < empresas.length; i++) {
        if (i >= (page - 1) * itemsPerPage && i < page * itemsPerPage) {
          empresas[i].style.display = 'block';
        } else {
          empresas[i].style.display = 'none';
        }
      }
    }

    showPage(currentPage);

    document.getElementById('prevPage').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
      const totalPages = Math.ceil(empresas.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
      }
    });
  });*/