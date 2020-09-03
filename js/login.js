function logar(){

var mensagem ={
    email:document.getElementById("txtemail").value,
    senha:document.getElementById("txtsenha").value
};
    var cabecalho={
        method:"POST",
        body:JSON.stringify(mensagem),
        headers:{
            "Content-type": "application/json"
        }
    }

    fetch("http://localhost:8080/login",cabecalho)
    .then(res => res.json())
    .then(res => {
        localStorage.setItem("user", JSON.stringify(res));
        window.location="usuario.html";
        window.alert(res.nome);
    })
    .catch(err=>{
        window.alert("Deu ruim");
    });
    
}