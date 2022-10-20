# question (올바른 괄호)

문제 설명  
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.  
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.  
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항  
문자열 s의 길이 : 100,000 이하의 자연수  
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

# IO

| s        | return |
| -------- | ------ |
| "()()"   | true   |
| "(())()" | true   |
| ")()("   | false  |
| "(()("   | false  |

# code

```js
function solution(s) {
  let check = true;
  s = s.split("");
  const value = s.reduce((acc, cur) => {
    if (acc < 0) {
      check = false;
      return acc;
    }
    return cur === "(" ? acc + 1 : acc - 1;
  }, 0);
  if (value > 0 || value < 0) {
    check = false;
  }

  return check;
}
```

여기서 check 변수는 문자열 s가 올바른 괄호인지 확인하는 변수이다.

먼저 문자열 s를 각 문자별로 나눈다.

```js
["(", ")", "(", ")"];
```

그리고 배열이된 s 문자열을 reduce 함수를 통하여 계산하였다.

- 동작방식

1.  acc는 괄호의 여는 괄호와 닫는 괄호 개수 차이를 가지고 있는 변수이다. cur은 현재 괄호를 가르치는 current값이다.
2.  이때 만약 괄호의 개수 차이가 minus가 된다면 이는 닫는 괄호가 하나 더 나온 것으로 올바른 표현법이 될 수 없다. 따라서 다음과 같이 check값을 false로 바꾸었다.
    ```js
    if (acc < 0) {
      check = false;
      return acc;
    }
    ```
3.  만약 여는 괄호라면 +1 닫는 괄호라면 -1을 통하여 판단한다.
    ```js
    return cur === "(" ? acc + 1 : acc - 1;
    ```

마지막으로 value값이 0이 면서 check 또한 true일 때만 올바른 표기법이된다.
