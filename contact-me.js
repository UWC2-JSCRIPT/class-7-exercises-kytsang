// TODO
document.addEventListener("DOMContentLoaded", function(){
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    const form = document.querySelector("form")


    function checkValidation(e){
        let allValid = false
        // check that Name is >= 3 length
        if (name.value.length<3){
            name.validity.valid= false;
            name.setCustomValidity('Your first name is too short');
            name.reportValidity();
            console.log("Bad input")
        }else {
            allValid=true;
            name.validity.valid=true;
        }
    }

    name.addEventListener("submit", (e)=>{
        checkValidation(e)
    })
    
 

        // check email regex   
        function emailValidation(e){
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
        if (email.value.match(regex)){
            allValid=true;
            email.validity.valid=true;
        }else {
            email.validity.valid= false;
            email.setCustomValidity('Not valid email');
            email.reportValidity();
            console.log("Bad input")
        }
        }

        email.addEventListener("submit", (e)=>{
            emailValidation(e)
        })


    function messageCheckValidation(e){
        let allValid2 = false
     //check that message is >= 10 length
        if (message.value.length<10){
            message.validity.valid= false;
            message.setCustomValidity('Your message is too short');
            message.reportValidity();
        }else {
            lastName.validity.valid=true;
            allValid2=true;
        }
    }


    message.addEventListener("submit", (e)=>{
        messageCheckValidation(e)
    })

})