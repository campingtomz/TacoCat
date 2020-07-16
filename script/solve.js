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
            $('#displayOutput').append(`<h2>The word "<span style="color:green">${palindromeInput}</span>" is a Palindrome</p>`);
            $('#palindrome-output').css('color', 'green');
        } else {
            $('#displayOutput').append(`<h2>The word "<span style="color:red">${palindromeInput}</span>" is not a Palindrome</p>`);
        }
    }
}