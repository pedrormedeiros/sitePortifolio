function Enviarmensagem () {
    var nome = document.getElementById("idNome");

    if(nome.value != "") {
        alert("Obrigado, sra(a)" + nome.value + ", sua mensagem foi enviada com sucesso!");

    }
}