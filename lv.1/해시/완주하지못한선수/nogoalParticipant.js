function solution(participant, completion) {
    const hashTable = {};
    
    // Add +1 participants to hashTable
    for (let person of participant) {
        if (hashTable[person]) {
            hashTable[person] += 1;
        } else {
            hashTable[person] = 1;
        }
    }
    
    // Subtract -1 completions from hashTable
    for (let person of completion) {
        if (hashTable[person]) {
            hashTable[person] -= 1;
        }
    }
    
    // Find the participant === 1
    for (let person of participant) {
        if (hashTable[person] === 1) {
            return person;
        }
    }
}
