
function validateUserName(){
    let userName = document.querySelector('#user-name').value;
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


const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%&'()*+,-./_=:;<>?[]{}";

function validatePassword(){
    let includeUpperCase = false;
    let includeLowerCase = false;
    let includeNumbers = false;
    let includeSymbols = false;
    let includeEightCharacters = false;
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;

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
                document.querySelector('#letter-error').style.color = 'red';
            }
            else{
                includeLowerCase = true;
                document.querySelector('#letter-error').style.color = 'green';
            }
        }

        if (includeUpperCase === false){
            if (letters.toUpperCase().includes(string) === false){
                document.querySelector('#letter-error').style.color = 'red';
            }
            else{
                includeUpperCase = true;
                document.querySelector('#letter-error').style.color = 'green';
            }
        }
        if (includeNumbers === false){
            if (numbers.includes(string) === false) {
                document.querySelector('#digitError').style.color = 'red';
            }
            else{
                includeNumbers = true;
                document.querySelector('#digitError').style.color = 'green';
            }
        }
        if (includeSymbols === false){
            if (symbols.includes(string) === false) {
                document.querySelector('#symbolError').style.color = 'red';
            }
            else{
                includeSymbols = true;
                document.querySelector('#symbolError').style.color = 'green';
            }
        }
        if (includeEightCharacters === false){
            if (passwordArray.length < 8){
                document.querySelector('#lengthError').style.color = 'red';
            }
            else{
                includeEightCharacters = true;
                document.querySelector('#lengthError').style.color = 'green';
            }
        }
    });
}


const allowedPrefix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_.-";
const allowedSymbols = ["@",".","-","_"];

function validateEmail(){
    let email = "satyam@gmail.com";
    let validEmail = true;
    if (validEmail === true){
        if (email.includes('@') === false){
            validEmail = false;
            return;
        }
        else{
            allowedSymbols.map((symbol) => {
                if(email.charAt(0) === symbol || email.charAt(email.length - 1) === symbol){
                    validEmail = false;
                    return;
                }
            });
        }
    }
    
}