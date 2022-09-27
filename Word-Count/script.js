

function startCount() {
    let inputBox = document.querySelector("#input-box").value;
    let letters = document.querySelector("#letters");
    let words = document.querySelector("#words");
    let wordsArray = inputBox.split(" ");
    let lettersArray = inputBox.split("");
    let gap = " ";
    lettersArray = lettersArray.filter(function(letter){  // filter all the spaces
        return letter !== gap;
    });
    if (lettersArray.length > 0) {
        words.innerHTML = `${wordsArray.length < 10 ? "0"+wordsArray.length : wordsArray.length}`;
        letters.innerHTML = `${lettersArray.length < 10 ? "0"+lettersArray.length : lettersArray.length}`;
    }
    else{
        words.innerHTML = "00";
        letters.innerHTML = "00";
    }
    
}

