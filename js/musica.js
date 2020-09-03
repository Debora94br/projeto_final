function preencherCombo(lista){
    var dados = "";
    for (cont=0;cont<lista.length;cont++){
        dados+=
        "<option value='" + lista[cont].id + "'>" + lista[cont].nomeArtistico + "</option>";
    }
    document.getElementById("cmbartistas").innerHTML=dados;
}

function carregarArtistas(){
    fetch ("http://localhost:8080/artistas")
        .then(res => res.json())
        .then(res => preencherCombo(res));
}

function gravar(){
    var mensagem = {
        titulo : document.getElementById("txttitulo").value ,
        ano : document.getElementById("txtano").value ,
        artista : {
            id : document.getElementById("cmbartistas").value
        }
    }

    var cabecalho = {
        method:"POST",
        body: JSON.stringify(mensagem),
        headers:{
            "Content-Type": "application/json"
        }
    }

    fetch("http://localhost:8080/novamusica", cabecalho)
        .then(res => res.json())
        .then(res => {
            window.alert("Gravado com sucesso");
            window.location="musica.html";
        })
        .catch(err => {
            window.alert("Erro");
        });
}