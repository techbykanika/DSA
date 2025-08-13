
// Function to check if a given string is a palindrome
function palindrome(inputStr) {
    // Base case:
    // If the string is empty or has only one character,
    // it is considered a palindrome (read the same backward and forward)
    // this case stop us from recursing 
    // single char backward and forward read is same so its plaindorme
    // if string is empty its a plaindrome
    // if inputStr.length==0 also cover even size string and odd size string
    if (inputStr.length == 0 || inputStr.length == 1)
        return true;

    // If the first and last characters of the string are not equal,
    // it cannot be a palindrome
    if (inputStr.charAt(0) != inputStr.charAt(inputStr.length - 1)) {
        // if at any time last and first s=char of string are not same 
        // we return false 
        /// and false is propogated back in the call stack 
        return false;
    }

    // Recursive case:
    // If the first and last characters are equal,
    // we continue the recursion by checking the substring
    // without the first and last characters
    return palindrome(inputStr.substring(1, inputStr.length - 1));
}

// Example usage:
let isPalindrome = palindrome("aaa");
console.log(isPalindrome);
