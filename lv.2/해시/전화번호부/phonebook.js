function solution(phoneBook) {
    // Store number in a hash table
    const phoneHash = {};
    for (let number of phoneBook) {
        phoneHash[number] = true;
    }
    
    // Check for prefixes
    for (let number of phoneBook) {
        let prefix = "";
        for (let digit of number) {
            prefix += digit;
            // If prefix exists and is not the same number
            if (prefix in phoneHash && prefix !== number) {
                return false;
            }
        }
    }
    
    return true;
}
