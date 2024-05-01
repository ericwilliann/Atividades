var alunos = []

var alunoAlterado = null

function adicionar(){
    document.getElementById("ra").disabled = false
    mostrarModal()
    limparForm()
}


function alterar(ra){
    for (let i=0; i < alunos.length; i++){
        let aluno = alunos[i]
        if (aluno.ra == ra){
            document.getElementById("ra").value = aluno.ra
            document.getElementById("nome").value = aluno.nome
            document.getElementById("cidade").value = aluno.cidade
            document.getElementById("estado").value = aluno.estado
            document.getElementById("curso").value = aluno.curso
            alunoAlterado = alunos
        }
    }
    document.getElementById("ra").disabled = true
    mostrarModal()
}

function excluir(ra){
    if(confirm("Você realmente deseja excluir?")){
        for(let i=0; i < alunos.length; i++){
           let aluno = alunos[i]
           if (aluno.ra === ra){
              alunos.splice(i, 1)
          }
        }  
        exibirDados()
    }
}

function mostrarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"
}

function ocultarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"
}

function cancelar(){
    limparForm()

    ocultarModal()
}

function salvar(){
    let ra = document.getElementById("ra").value
    let nome =  document.getElementById("nome").value
    let cidade =  document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let curso =  document.getElementById("curso").value
    
    if (alunoAlterado === null){
        let aluno = {
        "ra": ra,
        "nome": nome,
        "cidade": cidade,
        "estado": estado,
        "curso": curso
        }
        alunos.push(aluno)
    }else{
        alunoAlterado.ra = ra
        alunoAlterado.nome = nome
        alunoAlterado.cidade = cidade
        alunoAlterado.estado = estado
        alunoAlterado.curso = curso
    }
    alunoAlterado = null
    limparForm()

    ocultarModal()

    exibirDados()
}

function exibirDados(){
    let tbody = document.querySelector("#table-customers tbody")

    tbody.innerHTML = ""
    
    for(let i = 0; i < alunos.length; i++){
    let linha = `
            <tr>
                <td>${alunos[i].ra}</td>
                <td>${alunos[i].nome}</td>
                <td>${alunos[i].cidade}</td>
                <td>${alunos[i].estado}</td>
                <td>${alunos[i].curso}</td>
                <td>
                    <button onclick="alterar('${alunos[i].ra}')">Alterar</button>
                <button onclick="excluir('${alunos[i].ra}')" class="botaoexcluir">Excluir</button>
                </td>
            </tr>`
    let tr = document.createElement("tr")
    tr.innerHTML = linha 

    tbody.appendChild(tr)
    }
}

function limparForm(){
    document.getElementById("ra").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
    document.getElementById("curso").value = ""
}
