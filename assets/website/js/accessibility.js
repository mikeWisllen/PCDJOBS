/*Inicializa vlibras*/
new window.VLibras.Widget('https://vlibras.gov.br/app');

/*Acessibilidade - atalhos no teclado*/
document.addEventListener('keydown', handleKeydown);
function handleKeydown(event) {
    if (event.altKey && event.key === '1') {
        let main = document.getElementById('main');
        if (main) {
            main.scrollIntoView({ behavior: 'smooth' });
        }
    }
    if (event.altKey && event.key === '2') {
        let menu = document.getElementById('nav-sidebar');
        if (menu.classList.contains('show')) {
            closeOffcanvasMenu();
        } else {
            openOffcanvasMenu();
        }
    }
    if (event.altKey && event.key === '3') {
        window.scrollTo(0, 0);
    }

    if (event.altKey && event.key === '4') {
        let footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    }
    if (event.altKey && event.key === '5') {
        window.location.href = 'http://127.0.0.1:5500/vagas.html';
    }
}
function openOffcanvasMenu() {
    let menu = document.getElementById('nav-sidebar');
    menu.classList.add('show');
    menu.classList.remove('d-lg-none');
    menu.setAttribute('aria-modal', 'true');
    menu.setAttribute('data-bs-backdrop', 'true');
}
function closeOffcanvasMenu() {
    let menu = document.getElementById('nav-sidebar');
    menu.classList.remove('show');
    menu.removeAttribute('aria-modal');
    menu.setAttribute('data-bs-backdrop', 'false');
}

/*Acessibilidade - temas alto contraste*/
function applyContrast(constrast) {
    document.querySelector("body").setAttribute("id", constrast);
}