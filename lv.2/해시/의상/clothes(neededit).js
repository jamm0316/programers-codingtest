//case 1. hash table - 1
function solution (clothes)
    const hashTable = {};

    


// case 2. hash table - 2
function solution (clothes) {
    const hashTable = {};
    let clothesType = [];
    
    // Constructing a hashTable
    for (let i = 0; i < clothes.length; i++) {
        if (clothes[i][1] in hashTable) {
            hashTable[clothes[i][1]] += 1;
        } else {
            hashTable[clothes[i][1]] = 1;
            clothesType.push(clothes[i][1]);
        }
    }
    
    // Find the number of all cases
    let takeOne = 0;
    let takeMultiply = 1;
    let allCases = 0;
    for (let type of clothesType) {
        takeOne += hashTable[type] + 1;
        takeMultiply *= (hashTable[type] + 1;)
    }
    if (clothesType.length === 1) {
        return allCases = takeOne - 1;
    } else {
        return allCases = takeMultiply - 1;
    }
    return allCases;
}
