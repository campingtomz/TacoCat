$(document).ready(function () {
   
    $("#button-input").click(palindrome);
});

function checkiFWord() {
    let palindromeInput = $('#palindrome').val().replace(/[^a-zA-Z\" "]/g, '').trim();
    console.log(palindromeInput);
    if (palindromeInput.indexOf(' ') === -1) {
        return palindromeInput.toLowerCase();
    }
    else {
        window.alert(`Please enter a valid single word "${palindromeInput}" is not Valid `);
        return false;
    }
}

function palindrome() {
    console.log('test');
    let palindromeInput = checkiFWord();
    if (palindromeInput != false) {
        let reverseInput = palindromeInput.split("").reverse().join("");
        if (palindromeInput.localeCompare(reverseInput) === 0) {
            document.getElementById('palindrome-output').innerText = `The word "${palindromeInput}" is a Palindrome`;
        } else {
            document.getElementById('palindrome-output').innerText = `The word "${palindromeInput}" is not a Palindrome`;
        }
    }
}