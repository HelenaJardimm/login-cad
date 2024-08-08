//VALIDAÇÃO DE PREENCHIMENTOet
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    } else{
       // alert("Campos preenchidos com sucesso");
       window.location.href = 'cadastro.html';
    }
}
 
//FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
 
    if(nomeUser){
      dadosLista.push(nomeUser);
      console.log(dadosLista);
      crialista();
      document.getElementById('nomeUser').value = "";
 
    } else{
        alert("Favor, informar um nome para cadastro");
    }
}
 
  //FUNÇÃO DE CRIAÇÃO DE LISTA
  function crialista(){
   let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th>";
  //LAÇO DE REPETIÇÃO
   for(let i = 0; i <=(dadosLista.length - 1); i ++){
     tabela += "<tr><td>" + dadosLista[i] + "</td><td><button onclick=''> Excluir </button></td></tr>";
     document.getElementById('tabela').innerHTML = tabela;
   }
  }

  //FUNÇÃO  PARA EXCLUIR NOME DE LISTA

  function excluir(i){
     dadosLista.splice((i - 1), 1);
     document.getElementById('tabela').deleteRow(i);
  }
 