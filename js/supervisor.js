function exibirUsuario(){
    var strusuario = localStorage.getItem("user");
    if (strusuario){
        var usuario = JSON.parse(localStorage.getItem("user"));
        document.getElementById("foto").innerHTML = "<img alt='Sem foto' width='50%' img src=../img/" + usuario.foto + ">";
        document.getElementById("dados").innerHTML = "<h3>" + usuario.nome + " (" + usuario.email + ")" + "</h3>";
    } else{
        //window.location="../html/login.html";
        alert("Alterar");
    }
}

function deslogar(){
    localStorage.removeItem("user");
    window.location="../html/index.html"
}