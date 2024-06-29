function solution (n) {
    // binary of n
    let binary = n.toString(2)

    // count 1
    binary = binary.split('0').join('')
    let count_1 = binary.length

    // recursive function
    function recursive (i) {
        let test_binary = i.toString(2)
        test_binary = test_binary.split('0').join('')
        let count_1_test = test_binary.length

        // test
        if(count_1 === count_1_test) {
            return i
        } else {
            return recursive(i + 1)
        }
    }
    return recursive(n + 1)
}
