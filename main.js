
let form=document.getElementById("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    let name=document.getElementById("name");
    if(name.value===""){
        let error1=document.createElement("p");
        name.parentNode.appendChild(error1);
        error1.innerText="not a value name";
    }

    let email=document.getElementById("email");
    if(email.value===""){
        let error2=document.createElement("p");
        email.parentNode.appendChild(error2);
        error2.innerText="not a eamil"

    }

 
    let mobile=document.getElementById("number");
        if(mobile.value.length!==10){
            let error4=document.createElement("p");
            mobile.parentNode.appendChild(error4);
            error4.innerText="not a 10 number";
        }

        let pass=document.getElementById("password1");
        let pass2=document.getElementById("password");
        if(pass.value!==pass2.value){
            let error5=document.createElement("p");
            pass2.parentNode.appendChild(error5);
            error5.innerText="not a valid password"
        }

})