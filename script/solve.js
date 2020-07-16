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
        $('#test').html(`<h1 class="w3-center w3-animate-left">${palindromeInput}</h1>`);
        $('#test2').html(`<h1 class="w3-center w3-animate-right">${reverseInput}</h1>`);
        //if (palindromeInput.localeCompare(reverseInput) === 0) {
        //    $('#displayOutput').append(`<div id="text1"> <h2>${ palindromeInput }</h2></div>`);
        //    $('#displayOutput').append(`<h2>The word "<span style="color:green">${palindromeInput}</span>" is a Palindrome</p>`);
        //    $('#palindrome-output').css('color', 'green');
        //} else {
        //    $('#displayOutput').append(`<h2>The word "<span style="color:red">${palindromeInput}</span>" is not a Palindrome</p>`);
        //}
    }
}