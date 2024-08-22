//Validar acesso em tela de login
 
function acessar(){
 
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
     
    if(!loginEmail || !loginSenha){
      alert("Favor preencher todos os campos.");
     
    }else{
       //alert("Campos preenchidos com sucesso.");
       window.location.href= 'cadastro.html';
     
    }
     
    }
     
     
    //Função que armazena, em array, nome na tela de cadastro
     
    var dadosLista = [];
    var salvaEmail = [];
     
    function salvarUser(){
       let nomeUser = document.getElementById('nomeUser').value;
       let email = document.getElementById('emailUser').value;

       if (document.getElementById('emailUser').value == "" ||
    document.getElementById('emailUser').value.indexOf('@') == -1 ||
    document.getElementById('emailUser').value.indexOf('.') == -1) {
    alert("Por favor, informar um E-mail válido");
    return false;
  }
     
       if(nomeUser && email){
        dadosLista.push(nomeUser);
        salvaEmail.push(email);
        //console.log(dadosLista);
        crialista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
       }else{
        alert("Favor informar o nome cadastrado");
     
       }
      }
     
       
     
    // Função para criar lista
     
    function crialista(){
     let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Usuário</th><th>Email</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length-1); i++){
       tabela += "<tr><td>"  +  dadosLista[i] + "</td><td>" + salvaEmail[i] + "</td><td> <button type= 'button' onclick= 'editar(this.parentNode.parentNode.rowIndex)'> Editar </button> <button type= 'button' onclick= 'excluir(this.parentNode.parentNode.rowIndex)'> Excluir </button></td></tr>";
       document.getElementById('tabela').innerHTML = tabela;
    }
    }
     
    //Função para editar nomes da lista
     
     function editar(i){
       document.getElementById('nomeUser').value = dadosLista[(i - i)];
       dadosLista.splice(dadosLista [(i - 1)], 1);
       document.getElementById('emailUser').value = salvaEmail[(i - i)];
       salvaEmail.splice(salvaEmail [(i - 1)], 1);
     
     
     }
     
     //Função para excluir
     
      function excluir(i){
        dadosLista.splice((i-1), 1)
        document.getElementById('tabela').deleteRow(i);
       
     
      }

 