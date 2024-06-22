function solution(n) {
    // init pizza
    let num_of_pizza = 0;
    
    // conditional statement
    if (n % 7 === 0) {
        return n / 7
    }
    else {
        return parseInt(n / 7) + 1;
    }
}
