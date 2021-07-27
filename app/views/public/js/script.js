// Desenvolvido por Cel.Lep Tech

var url_atual = window.location.pathname

if(url_atual == '/'){
    document.getElementById('home').className = "nav-link active"
} else if(url_atual == '/noticias'){
    document.getElementById('noticias').className = "nav-link active"
} else if(url_atual == '/formulario_inclusao'){
    document.getElementById('inclusao').className = "nav-link active"
}