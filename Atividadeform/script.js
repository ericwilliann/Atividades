function salvar(){
    let form = document.getElementById("form-cadastro")
    let nome =form.nome.value
    let email =form.email.value
    let senha =form.senha.value
    
    if (nome.trim() == ""){
        alert("Preencha o nome")
        return false
    }
    if(email.trim() == ""){
        alert("Preencha o email")
        return false
    }
    if(senha.trim() == ""){
        alert("Preencha a senha")
        return false
    }
    else{
        alert("Cadastro realizado!")
    }
}