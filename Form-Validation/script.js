const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%&'()*+,-./_=:;<>?[]{}";
const allowedPrefix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_.-";
const allowedSymbols = ["@",".","-","_"];


function validateUserName(userName){
    // let userName = document.querySelector('#user-name').value;
    let allowedString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    let isValid = true;
    userName.split("").filter((string) => {
        if (isValid === true){
            if (allowedString.includes(string) === false) {
                document.querySelector('#username-error').innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Username should only include letters, numbers or underscore';
                isValid = false;
                return;
            }
            else{
                if (userName.length < 5){
                    document.querySelector('#username-error').innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Provide at least 5 characters';
                    isValid = false;
                    return;
                }
                else{
                    document.querySelector('#username-error').innerHTML = '';
                }
            }
        } 
    });
}



function validatePassword(password, confirmPassword){
    let includeUpperCase = false;
    let includeLowerCase = false;
    let includeNumbers = false;
    let includeSymbols = false;
    let includeEightCharacters = false;
    // let password = document.querySelector('#password').value;
    // let confirmPassword = document.querySelector('#confirm-password').value;
    

    if (password != confirmPassword){
        document.querySelector('#confirm-pass-error').innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Confirm Password should be same as password';
    }
    else{
        document.querySelector('#confirm-pass-error').innerHTML = "";
    }

    passwordArray = password.split('');
    passwordArray.filter((string) => {
        if (includeLowerCase === false){
            if (letters.includes(string) === false) {
                document.querySelector('#letter-error').style.color = '#ff5050';
            }
            else{
                includeLowerCase = true;
                document.querySelector('#letter-error').style.color = '#5cd65c';
            }
        }

        if (includeUpperCase === false){
            if (letters.toUpperCase().includes(string) === false){
                document.querySelector('#letter-error').style.color = '#ff5050';
            }
            else{
                includeUpperCase = true;
                document.querySelector('#letter-error').style.color = '#5cd65c';
            }
        }
        if (includeNumbers === false){
            if (numbers.includes(string) === false) {
                document.querySelector('#digitError').style.color = '#ff5050';
            }
            else{
                includeNumbers = true;
                document.querySelector('#digitError').style.color = '#5cd65c';
            }
        }
        if (includeSymbols === false){
            if (symbols.includes(string) === false) {
                document.querySelector('#symbolError').style.color = '#ff5050';
            }
            else{
                includeSymbols = true;
                document.querySelector('#symbolError').style.color = '#5cd65c';
            }
        }
        if (includeEightCharacters === false){
            if (passwordArray.length < 8){
                document.querySelector('#lengthError').style.color = '#ff5050';
            }
            else{
                includeEightCharacters = true;
                document.querySelector('#lengthError').style.color = '#5cd65c';
            }
        }
    });
}



function validatePrefix(prefix){
    let isValid = true;
    prefix.split("").map((str) => {
        if(allowedPrefix.includes(str) === false){
            isValid = false;
            return false;
        }
    });
    if(isValid === false){
        return false;
    }
    else{
        if(prefix === ""){
            isValid = false;
            return false;
        }
        else{
            if (prefix.charAt(0) === "." || prefix.charAt(prefix.length -1) === "." || prefix.charAt(0) === "-" || prefix.charAt(prefix.length -1) === "-" || prefix.charAt(0) === "_" || prefix.charAt(prefix.length -1) === "_" || prefix.charAt(0) === "@" || prefix.charAt(prefix.length -1) === "@" ){
                return false;
            }
            else{
                isValid = true;
                return true;
            }
        }
    }
}

function validateDomainName(domainName){
    let isValid = true;
    domainName.split("").map((str) => {
        if(allowedPrefix.includes(str) === false){
            isValid = false;
            return false;
        }
    });
    if(isValid === false){
        return false;
    }
    else{
        if(domainName === ""){
            isValid = false;
            return false;
        }
        else{
            if (domainName.charAt(0) === "." || domainName.charAt(domainName.length -1) === "." || domainName.charAt(0) === "-" || domainName.charAt(domainName.length -1) === "-" || domainName.charAt(0) === "_" || domainName.charAt(domainName.length -1) === "_" || domainName.charAt(0) === "@" || domainName.charAt(domainName.length -1) === "@" ){
                
                isValid = false;
                return false;
            }
            else{
                isValid = true;
                return true;
            }
            
        }
    }
}

function validateDomainType(domainType){
    let isValid = true;
    domainType.split("").map((str) => {
        if(letters.includes(str) === false){
            isValid = false;
            return false;
        }
    });
    if(isValid === false){
        return false;
    } 
    else{
        if(domainType === ""){
            isValid = false;
            return false;
        }
        else{
            isValid = true;
            return true;
        }
    }
}


function validateEmail(email){
    // let email = document.querySelector('#email').value;
    let emailError = document.querySelector('#email-error');
    let errorMessage = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid Email';

    let prefix = email.substring(0, email.lastIndexOf("@"));
    let domainName = email.substring(email.lastIndexOf("@") + 1, email.lastIndexOf("."));
    let domainType = email.substring(email.lastIndexOf(".")+1);
    // console.log(prefix ," ", domainName, " ",domainType)
    // console.log("Prefix:",validatePrefix(prefix), "Domain:",validateDomainName(domainName), "TYpe:",validateDomainType(domainType));
    let validEmail = true;
    allowedSymbols.map((symbol) => {
        if(email.charAt(0) === symbol || email.charAt(email.length - 1) === symbol){
            validEmail = false;
            return false;
        }
    });
    if (validEmail === true){
        if (email.includes('@') === false || email.includes('.') === false){
            validEmail = false;
            emailError.innerHTML = errorMessage;
            return false;
        }
        else{
            if(validatePrefix(prefix)===false || validateDomainName(domainName)===false || validateDomainType(domainType) === false){
                validEmail = false;
                emailError.innerHTML = errorMessage;
                return false;
            }
            else{
                emailError.innerHTML = "";
            }
        }
    }
    else{
        emailError.innerHTML = errorMessage;
    }
    
}




function validateForm(){
    let userName = document.querySelector('#user-name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;
    let userNameError = document.querySelector('#username-error');
    let emailError = document.querySelector('#email-error');
    let passwordError = document.querySelector('#confirm-pass-error');
    let letterError = document.querySelector('#letter-error');
    let digitError = document.querySelector('#digitError');
    let symbolError = document.querySelector('#symbolError');
    let lengthError = document.querySelector('#lengthError');
    let confirmMessage = document.querySelector('#confirm-message');

    
    if(userName == ""){
        userNameError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Username is required.';
    }
    else{
        userNameError.innerHTML = '';
        validateUserName(userName);
    }

    if(email == ""){
        emailError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Email is required.';
    }
    else{
        emailError.innerHTML = '';
        validateEmail(email);
    }

    if(password == ""){
        passwordError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Password is required.';
    }
    else{
        passwordError.innerHTML = '';
        validatePassword(password, confirmPassword);
    }
    if(userNameError.innerHTML=='' && emailError.innerHTML=='' && passwordError.innerHTML==''){
        if(letterError.style.color=='rgb(92, 214, 92)' && digitError.style.color=='rgb(92, 214, 92)' && symbolError.style.color=='rgb(92, 214, 92)' && lengthError.style.color=='rgb(92, 214, 92)'){
            confirmMessage.innerHTML = '<i class="fa-solid fa-check"></i> You are good to go';
        }
        else{
            confirmMessage.innerHTML = '';
        }
    }
    else{
        confirmMessage.innerHTML = '';
    }
}