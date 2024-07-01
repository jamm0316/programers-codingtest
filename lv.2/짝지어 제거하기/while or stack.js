// case 1. while -> O(n^2)
function solution(s) {
    // init 's' to array
    s = s.split('');
    
    // roof for splice
    let i = 0;
    while (i < s.length) {
        if (s[i] === s[i + 1]) {
            s.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
    }
    
    // test array is empthy
    if (s.length === 0) {
        return 1;
    } else {
        return 0;
    }
}


// case 2. for roof -> O(n)
function solution(s) {
    // init stack
    let stack = [];
    
    // iterate through string characters
    for (let char of s) {
        // if stack is not empty and the top element is the same as the current character
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();  // remove the top element
        } else {
            stack.push(char);  // add the current character to the stack
        }
    }
    
    // if stack is empty, return 1, else return 0
    return stack.length === 0 ? 1 : 0;
