# question (JadenCase 문자열 만들기)

문제 설명  
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)  
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건  
s는 길이 1 이상 200 이하인 문자열입니다.  
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.  
숫자는 단어의 첫 문자로만 나옵니다.  
숫자로만 이루어진 단어는 없습니다.  
공백문자가 연속해서 나올 수 있습니다.

# IO

| s                       | return                  |
| ----------------------- | ----------------------- |
| "3people unFollowed me" | "3people Unfollowed Me" |
| "for the last week"     | "For The Last Week"     |

# code

```js
function solution(s) {
  s = s
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.substr(1).toLowerCase())
    .join(" ");
  return s;
}
```

문자열 s를 단어별로 조각내기 위해 split 함수를 사용한다.

```js
["3people", "unFollowed", "me"];
```

그 후 map을 통해 배열의 모든 문자열의 첫 글자만 대문자로 변환해준다.

1.  slice를 통해 첫 문자만 가져온 후 toUpperCase를 통해 대문자로 변환시킨다.
2.  첫 문자 제거한 나머지 문자를 toLowerCase를 통해 소문자로 변환시킨다.
3.  문자열을 합치는 연산자인 +를 통하여 첫 글자와 나머지 글자를 합친다.

```js
["3people", "Unfollowed", "Me"];
```

마지막으로 join을 사용하여 공백을 사이에 두고 합쳐준다.

```js
"3people Unfollowed Me";
```
