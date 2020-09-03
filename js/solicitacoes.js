function gravar(){

    var data = document.getElementById("txtdata").value;
    var ano = data.substring(0,4);
    var mes = data.substring(5,7);
    var dia = data.substring(8);
    var nossadata = dia + "/" + mes + "/" + ano;
     
    var mensagem = {
        nomeArtistico : document.getElementById("txtnome").value ,
        nacionalidade : document.getElementById("txtemail").value ,
        celular : document.getElementById("txtcelular").value,
        documento : document.getElementById("txtdocumento").value,
        pdv : document.getElementById("cmbpdv").value,
        data : nossadata,
        hora : document.getElementById("txthora").value
        
    }

    var cabecalho = {
        method:"POST",
        body: JSON.stringify(mensagem),
        headers:{
            "Content-Type": "application/json"
        }
    }

    fetch("http://localhost:8080/novasolicitacao", cabecalho)
        .then(res => res.json())
        .then(res => {
            window.alert("Gravado com sucesso");
            window.location="solicitacoes.html";
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
    "<th>Email</th>" + 
    "<th>Celular</th>" +
    "<th>Documento</th>" +
    "<th>Pdv</th>" +
    "<th>Data</th>" +
    "<th>Hora</th>" +
    "</tr>";
    
    for(cont=0;cont<lista.length;cont++){
        tabela+=
            "<tr>" +
            "<td>" + lista[cont].nomeArtistico + "</td>" + 
            "<td>" + lista[cont].email + "</td>" + 
            "<td>" + lista[cont].celular + "</td>" + 
            "<td>" + lista[cont].documento + "</td>" + 
            "<td>" + lista[cont].pdv + "</td>" + 
            "<td>" + lista[cont].data+ "</td>" + 
            "<td>" + lista[cont].hora+ "</td>" +
            "</tr>";
    }

    tabela+="</table></div></div>";

    document.getElementById("solicitacoes").innerHTML=tabela;
}

function carregarTecnico(){
    fetch ("http://localhost:8080/solicitacoes")
        .then(res => res.json())
        .then(res => preencherTabela(res));
}
function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }