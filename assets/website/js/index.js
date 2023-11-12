//Buscar Vagas
function searchJob(event) {
    event.preventDefault();
    let value = document.getElementById('input-search-jobs').value;
    value = value.replaceAll(' ', '-');
    value = value.replaceAll('.', '');
    value = encodeURIComponent(value);
    let query = 'b[]=' + value;
    window.location.href = "http://127.0.0.1:5500/vagas.html?" + query;
}

//Favoritar-Desfavoritar vaga
function favingJob(id) {
    let alertFavoritar = document.querySelector('#alertFavoritar' + id);
    alertFavoritar.innerHTML = '' +
        '<strong>Aguarde ... </strong>' +
        '<div class="spinner-border spinner-border-sm" role="status">' +
            '<span class="visually-hidden">Aguarde favoritar...</span>' +
        '</div>';

    let buttonFavoritar = document.querySelector('#buttonFavoritar' + id);

    const url = '/favoritar/vagas';
    let data = {
        id_tc_vagas: id
    };
    let init = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(data)
    };

    fetch(url, init)
        .then((response) => response.json())
        .then((data) => {
            if (data.success === false && data.status === 0) {
                window.location.href = '/login?favoritar=' + id;
            } else if (data.success === true && data.status === 2) {
                alertFavoritar.removeAttribute('hidden');
                alertFavoritar.innerHTML = '<i class="fas fa-exclamation"></i> Vaga Desfavoritada!';
                alertFavoritar.classList.remove('alert-success');
                alertFavoritar.classList.add('alert-danger');
                buttonFavoritar.innerHTML = '<i class="far fa-star"></i> Favoritar';
                buttonFavoritar.setAttribute('data-bs-original-title', 'Clique aqui para adicionar esta vaga aos seus favoritos.');
            } else if (data.success === true && data.status === 1) {
                alertFavoritar.removeAttribute('hidden');
                alertFavoritar.innerHTML = '<i class="fas fa-star"></i> Vaga Favoritada!';
                alertFavoritar.classList.remove('alert-danger');
                alertFavoritar.classList.add('alert-success');
                buttonFavoritar.innerHTML = '<i class="fas fa-star text-secondary"></i> Desfavoritar';
                buttonFavoritar.setAttribute('data-bs-original-title', 'Clique aqui para remover esta vaga dos seus favoritos.');
            }
        });
}

//hyghcharts-maps
(async () => {
    const topology = await fetch('/assets/website/highcharts-maps/br-all.topo.json')
        .then(response => response.json());

    // data and map
    const mapData = n.map(item => [item.uf, item.nr]);

    // Create the chart
    Highcharts.mapChart('div-highcharts', {
        chart: {
            map: topology,
            height: 700,
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        title: {
            text: 'DISTRIBUIÇÃO DE VAGAS POR ESTADO'
        },
        subtitle: {
            text: '<span>Clique no estado para visualizar as oportunidades disponíveis</span>'
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            min: 0,
            labels: {
                enabled: true
            }
        },
        series: [{
            data: mapData,
            name: 'Quantidade de vagas:',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            borderColor: 'rgba(0, 0, 0, 0.2)',
            borderWidth: 1,
            events: {
                click: function (event) {
                    window.location.href = 'vagas.html' + event.point['hc-key'];
                }
            },
            dataLabels: {
                enabled: true,
                format: '<span style="cursor: pointer;">{point.name}<br>Vagas: {point.value}</span>'
            }
        }]
    });
})();

//subscribe
function subscribeEmail(event) {
    event.preventDefault();
    let alertSubscribe = document.getElementById('alert-subscribe');
    alertSubscribe.innerHTML = '' +
        '<strong>Aguarde ... </strong>' +
        '<div class="spinner-border spinner-border-sm" role="status">' +
        '<span class="visually-hidden">Aguarde a gravação do seu e-mail...</span>' +
        '</div>';

    let radios = document.getElementsByName('radio-subsc');
    let perfil = '';
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            perfil = radios[i].value;
            break;
        }
    }

    let email = document.getElementById('email-subsc-modal').value;
    let nome = document.getElementById('nome-subsc').value;
    if (email === '' || nome === '' || perfil === '') {
        alertSubscribe.classList.add('alert-danger');
        alertSubscribe.classList.remove('alert-success');
        alertSubscribe.innerHTML = '<i class="fas fa-exclamation"></i> Preencha todos os campos antes de enviar!';
        return;
    }
    let formData = {'email': email, 'nome': nome, 'perfil': perfil};

    const url = '/news-home';
    const init = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(formData)
    };

    fetch(url, init)
        .then(response => response.json())
        .then(data => {
            alertSubscribe.textContent = data.msg.replace(/[\\"]/g, '');
            if (data.status === 202) {
                alertSubscribe.classList.remove('alert-danger');
                alertSubscribe.classList.add('alert-success');
                document.getElementById('email-subsc-modal').value = '';
                document.getElementById('nome-subsc').value = '';
            } else {
                alertSubscribe.classList.add('alert-danger');
                alertSubscribe.classList.remove('alert-success');
            }
        })
        .catch(error => {
            alertSubscribe.innerHTML = '<i class="fas fa-exclamation"></i> Ocorreu um erro. Tente novamente!';
            alertSubscribe.classList.add('alert-danger');
            alertSubscribe.classList.remove('alert-success');
        });
}