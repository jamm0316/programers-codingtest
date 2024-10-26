import java.util.Arrays;

class Solution {
    public int solution(String[] friends, String[] gifts) {
        //1. 변수 초기화
        int[][] table = new int[friends.length][friends.length];  //선물내역 테이블
        int[] score = new int[friends.length];  //선물지수 테이블
        int maxNum = 0; //최종 반환 변수

        //1. 테이블 작성
        for (String gift : gifts) {
            String[] query = gift.split(" ");
            for (int i = 0; i < friends.length; i++) {
                for(int j = 0; j < friends.length; j++) {
                    if (friends[i].equals(query[0]) && friends[j].equals(query[1])) {
                        table[i][j]++;
                        score[i]++;
                        score[j]--;
                    }
                }
            }
        }

        //2. 테이블 조건탐색
        for (int i = 0; i < table.length; i++) {
            int count = 0;
            for (int j = 0; j < table[i].length; j++) {
                if (i == j) {
                    continue;
                } else if (table[i][j] > table[j][i]) {
                    count++;
                } else if (table[i][j] == table[j][i] && score[i] > score[j]) {
                    count++;
                }
            }
            maxNum = Math.max(count, maxNum);
        }

        //4. 결과 반환
        return maxNum;
    }
}
