function validar() {
    var nome = formSignUp.nome.value;
    var email = formSignUp.email.value;
    var senha = formSignUp.senha.value;
    var confirm_senha = formSignUp.confirm_senha.value;
    var msg_erro_span = document.getElementById("msg_erro"); 
    
    console.log(msg_erro_span);

    if (nome == '') {
        // alert('Preencha o campo com seu nome');
        msg_erro_span.innerHTML = "Preencha o campo com seu nome";
        formSignUp.nome.focus();
        return false;
    }

    if (nome.length < 3) {
        // alert('Preencher Nome Completo');
        msg_erro_span.innerHTML = "Preencher Nome Completo";
        formSignUp.nome.focus();
        return false;
    }

    if (email == '') {
        // alert('Preencha o campo com seu email');
        msg_erro_span.innerHTML = "Preencha o campo com seu email";
        formSignUp.email.focus();
        return false;
    } 

    if (senha == '') {
        // alert('Preencha o campo com sua senha');
        msg_erro_span.innerHTML = "Preencha o campo com sua senha";
        formSignUp.senha.focus();
        return false;
    }

    if (confirm_senha == '') {
        // alert('Preencha o campo confirmar senha');
        msg_erro_span.innerHTML = "Preencha o campo confirmar senha";
        formSignUp.confirm_senha.focus();
        return false;
    }

    if (senha !== confirm_senha){
        // alert('Senhas Diferentes');
        msg_erro_span.innerHTML = "Senhas Diferentes";
        formSignUp.senha.focus();
        return false;
    }

    msg_erro_span.innerHTML = "Formulário Preenchido Corretamente!";
        

    

}