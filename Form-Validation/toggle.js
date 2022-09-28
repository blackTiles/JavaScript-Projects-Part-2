

function togglePassword(elementID) {
    let passEl = document.getElementById(elementID);
    let inputEl = document.getElementById(elementID.substr(0,elementID.length-3));
    if(inputEl.value != ''){
        if (inputEl.type === "password") {
            inputEl.type = "text";
            passEl.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
        } else {
            inputEl.type = "password";
            passEl.innerHTML = '<i class="fa-regular fa-eye"></i>';
        }
    }
}
