function solution(cipher, code) {
    const cipher_list = cipher.split('');
    const str_length = cipher.length
    let real_str = "";
    
    for (let i = code - 1; i < str_length; i += code) {
        real_str += cipher_list[i];
    }
    return real_str;
}
