function gravar(){
    var data = document.getElementById("txtnascimento").value;
    var ano = data.substring(0,4);
    var mes = data.substring(5,7);
    var dia = data.substring(8);
    var nossadata = dia + "/" + mes + "/" + ano;

    var mensagem = {
        nomeArtistico : document.getElementById("txtnome").value ,
        nacionalidade : document.getElementById("txtnacionalidade").value ,
        nascimento : nossadata
    }

    var cabecalho = {
        method:"POST",
        body: JSON.stringify(mensagem),
        headers:{
            "Content-Type": "application/json"
        }
    }

    fetch("http://localhost:8080/novoartista", cabecalho)
        .then(res => res.json())
        .then(res => {
            window.alert("Gravado com sucesso");
            window.location="artista.html";
        })
        .catch(err => {
            window.alert("Erro");
        });
}

function preencherTabela(lista){

    var tabela=
    "<div class='row'>" +
    "<div class='col-12'>" +
    "<table border='1' align='center' width='80%' cellspacing='2'>" + 
    "<tr>" + 
    "<th>Artista</th>" + 
    "<th>Nacionalidade</th>" + 
    "<th>Nascimento</th>" +
    "</tr>";
    
    for(cont=0;cont<lista.length;cont++){
        tabela+=
            "<tr>" +
            "<td>" + lista[cont].nomeArtistico + "</td>" + 
            "<td>" + lista[cont].nacionalidade + "</td>" + 
            "<td>" + lista[cont].nascimento + "</td>" + 
            "</tr>";
    }

    tabela+="</table></div></div>";

    document.getElementById("artistas").innerHTML=tabela;
}

function carregarArtistas(){
    fetch ("http://localhost:8080/artistas")
        .then(res => res.json())
        .then(res => preencherTabela(res));
}