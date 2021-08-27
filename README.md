# starbucks-vanilla-app
스타벅스 랜딩 페이지(+로그인) 예제 실습 

#### 파비콘 설정

![image](https://user-images.githubusercontent.com/83719746/131077603-aefbdcd4-6e40-49e8-84e0-0b24c876d154.png)
+ html 내에 파비콘을 추가하는 코드를 추가하지 않았는데도 라이브 서버에서 위와 같이 나오는 이유는 대부분의 브라우저가 프로젝트 root에 favicon.ico파일이 있으면 자동 추가해줌. 이름 변경하면 설정되지 않음

+ 화질이 더 높은 png파일을 파비콘으로 사용하고자하면 html 파일에 아래와 같이 작성한다
  ```html
    <link rel="icon" href="./파일명.png">

  ```

#### reset css
https://meyerweb.com/eric/tools/css/reset/
