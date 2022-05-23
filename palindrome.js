function palindrome(str) {
    str  = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let aux = [...str];
    for (let i in str) {
        if(aux.pop() != str[i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
