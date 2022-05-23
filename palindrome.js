/*
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/
function palindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let aux = [...str];
    for (let i in str) {
        if (aux.pop() != str[i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
