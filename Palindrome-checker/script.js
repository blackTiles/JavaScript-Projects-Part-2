function checkPalindrome() {
    let string = document.getElementById("input-text").value;
    let result = document.getElementById("result");
    if (string === "") {
        return;
    }
    else{
        let reverseString = string.split("").reverse().join("");
        if(string === reverseString) {
            result.innerHTML = `<i class="fa-regular fa-circle-check"></i> <span style="font-size:22px;">${string}</span> is a Palindrome`;
            result.style.color = "#659e4a";
        }
        else{
            result.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> <span style="font-size:22px;">${string}</span> is not a Palindrome`;
            result.style.color = "#b14b4b";
        }
    }
}

function clearResult(){
    let inputArea = document.getElementById("input-text").value;
    let result = document.getElementById("result");
    if (inputArea === ""){
        result.innerHTML = "";
    }
}