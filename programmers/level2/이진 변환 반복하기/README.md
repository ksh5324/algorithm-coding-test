# question (이진 변환 반복하기)

문제 설명  
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.  
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.  
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

# IO

| s              | result |
| -------------- | ------ |
| "110010101001" | [3,8]  |
| "01110"        | [3,3]  |
| "1111111"      | [4,1]  |

# code

```js
function solution(s) {
  let length = s.length;
  let count = 0;
  let count2 = 0;

  while (s.length > 1) {
    s = s
      .split("")
      .filter((v) => v !== "0")
      .join("");
    count += length - s.length;
    s = s.length.toString(2);
    length = s.length;
    count2++;
  }
  return [count2, count];
}
```

## 풀이

length는 현재 길이, count는 사라진 0의 개수, count2는 몇번 째 반복했는지 알려주는 변수이다.

while 반복 문을 통해 s의 길이가 1보다 크지 않을 때 까지 반복한다.

s를 split을 통해 모든 문자를 분해하고, filter를 통해 1만 남겨놓는다. 그리고 문자열을 다시 합치면 1만 남겨진 문자열이 만들어진다.
그 후 기존 길이와 현재길이의 차이를 통해 count의 카운팅해주고 문자열 s의 길이를 toString(2)를 통해 2진수로 변환시켜 s에 저장시킨다.

그리고 다시 length의 길이를 현재 길이로 대입시켜준다.
