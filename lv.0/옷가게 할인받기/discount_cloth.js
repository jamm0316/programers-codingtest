function solution(price) {
    const discount005 = 100000;
    const discount010 = 300000;
    const discount020 = 500000;
    
    let final_price = price;
    
    if (discount005 <= price && price < discount010) {
        final_price = price * 0.95;
    } else if (discount010 <= price && price < discount020) {
        final_price = price * 0.90;
    } else if (discount020 <= price) {
        final_price = price * 0.80;
    }
    return parseInt(final_price);
    }
