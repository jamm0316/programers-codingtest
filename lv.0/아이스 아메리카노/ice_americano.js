function solution(money) {
    let result = [];
    const coffee_price = 5500;
    
    
    let buying_coffee = parseInt(money / coffee_price);
    let balance = parseInt(money - coffee_price * buying_coffee);
    result.push(buying_coffee);
    result.push(balance);
    
    return result;
}
