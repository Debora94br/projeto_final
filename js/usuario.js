function exibirUsuario(){
    var strusuario= JSON.parse(localStorage.getItem("user"));
    if(strusuario){
        var usuario= JSON.parse(localStorage.getItem("user"));
   
    document.getElementById("foto").innerHTML= "<img alt='sem foto' width='25%' src=images/" + usuario.foto + ">";
    document.getElementById("dados").innerHTML=
    "<h3>Nome:" + usuario.nome + "<br>Email:" + usuario.email + "<br>ID:" + usuario.id + "</h3>";
}else{
    window.location="login.html";
}
}