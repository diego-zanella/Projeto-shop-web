function saveCustomer(){
    var form = document.getElementById("form-register");
    var data = new FormData(form);
    console.log(data);
    fetch("php/insert-customer.php", {
        method: "POST",
        body: data
    });
    window.location.href="Home.html";
}

function login(){
    var form = document.getElementById("form-login");
    var data = new FormData(form);
    fetch("php/login.php", {
        method: "POST",
        body: data
    }).then(async res=>{
        var data = await res.json();
        console.log(data.error);
        if (data.error==1){
            console.log("Failed to login");
            errorLogin();
        }
        else{
            // var data = await res.json();
            console.log(data.fname);
            welcome(data);
        }
    });
}


function welcome(data){
    alert("Bem vindo, "+data.fname);
    window.location.href="Home.html";
}

function errorLogin(){
    alert("Email ou senha incorretos, tente de novo.");
}



