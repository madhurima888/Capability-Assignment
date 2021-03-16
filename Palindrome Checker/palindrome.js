var reversedString = "";
var result = "";
function checkPalindrome() {
    var str = document.getElementById("string").value;
    if (str === "")
        alert("Enter the String");
    else {
        for (let i = str.length-1; i >=0 ; i--) {
            reversedString += str[i];

        }
        if (reversedString == str) {
            result = str + " is a palindrome";
        }
        else {
            result = str + " is not a palindrome";
        }
        document.getElementById("result").innerHTML = result ;
    }
}