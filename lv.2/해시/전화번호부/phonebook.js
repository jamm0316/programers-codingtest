// case 1. Hash Table
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


// case 2. startsWith
function solution(phoneBook) {
    //Sort the phonebook
    phoneBook.sort();

    //Compare adjacent phone number
    for (let i = 0; i < phoneBook.length - 1; i++) {
        if (phoneBook[i + 1].startsWith(phoneBook[i])) {
            return false
        }
    }
    return true
}
