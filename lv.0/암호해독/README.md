## pseudo code
1. string -> list
2. string_lengh = list.lenth
3. real_str = ""
4. for (let i = code - 1; i < string_length - 1; i += code) {
   real_str += cipher[i]}
   **여기서, 범위를 'string_length - 1'로 하는 이유는 인덱스는 0부터 시작하므로, string_lengtn를 그대로 입력하면 인덱스가 1초과하게 된다.**
6. return real_str   
