// TODO
document.addEventListener("DOMContentLoaded", function(){
    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const form = document.querySelector("form")

// function checkStringLength(inputValue){
//     if (inputValue.value.length<3){
//         inputValue.validity.valid= false;
//         inputValue.classList.add("invalid");
//         inputValue.setCustomValidity('Your name is too short');
//         inputValue.reportValidity();
//     }else {
//         inputValue.validity.valid=true;
//         inputValue.classList.remove("invalid");
//         allValid=true;
//     }
// }



// inputValue.addEventListener("change", (inputValue)=>{
//     checkStringLength(firstName);
//     checkStringLength(lastName);
// })


    function checkValidation(e){
        let allValid = false
        // check that FirstName is >= 3 length
        if (firstName.value.length<3){
            firstName.validity.valid= false;
            firstName.classList.add("invalid");
            firstName.setCustomValidity('Your first name is too short');
            firstName.reportValidity();
            console.log("Bad input")
        }else {
            allValid=true;
            firstName.validity.valid=true;
            firstName.classList.remove("invalid");
        }

    }

    firstName.addEventListener("change", (e)=>{
        checkValidation(e)
    })
    
 

    function checkValidation2(e){
        let allValid2 = false
     //check that lastName is >= 3 length
        if (lastName.value.length<3){
            lastName.validity.valid= false;
            lastName.classList.add("invalid");
            lastName.setCustomValidity('Your last name is too short');
            lastName.reportValidity();
        }else {
            lastName.validity.valid=true;
            lastName.classList.remove("invalid");
            allValid2=true;
        }
    }


    lastName.addEventListener("change", (e)=>{
        checkValidation2(e)
    })



        // check email regex   
        function emailValidation(e){
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
        if (email.value.match(regex)){
            allValid=true;
            email.validity.valid=true;
            email.classList.remove("invalid");
        }else {
            email.validity.valid= false;
            email.classList.add("invalid");
            email.setCustomValidity('Not valid email');
            email.reportValidity();
            console.log("Bad input")
        }
        }

        email.addEventListener("change", (e)=>{
            emailValidation(e)
        })



        // if (!allValid){
        //     e.preventDefault
        // }
    

    // firstName.addEventListener("input", (e)=> {
    //     checkValidation(e)
    // })

    // form.addEventListener('submit', (e) =>{
    //     checkValidation(e)
    // })

    // firstName.addEventListener("change", (e)=>{
    //     checkValidation(e)
    // })
    
})