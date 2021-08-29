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

#### 오픈 그래프
https://github.com/ParkYoungWoong/starbucks-vanilla-app#%EC%98%A4%ED%94%88-%EA%B7%B8%EB%9E%98%ED%94%84the-open-graph-protocol

웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정
링크를 보냈을 때 뜨는 미리보기를 지정할 수 있음
`슬랙`
![image](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/slack_message_og_example.jpg)
`카카오톡`
![image](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/kakao_og_example.jpg)

https://ogp.me/

+ g:type: 페이지의 유형(E.g, website, video.movie)
+ og:site_name: 속한 사이트의 이름
+ og:title: 페이지의 이름(제목)
+ og:description: 페이지의 간단한 설명
+ og:image: 페이지의 대표 이미지 주소(URL)
+ og:url: 페이지 주소(URL)

#### 트위터 카드(Twitter Cards)
웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정
https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started


+ twitter:card: 페이지(카드)의 유형(E.g. summary, player)
+ twitter:site: 속한 사이트의 이름
+ twitter:title: 페이지의 이름(제목)
+ twitter:description: 페이지의 간단한 설명
+ twitter:image: 페이지의 대표 이미지 주소(URL)
+ twitter:url: 페이지 주소(URL)

% 특정 소셜 미디어에 따라 오픈그래프대신 트위터카드의 정보를 우선적으로 가져가기도함

---

#### 폰트 설정
구글폰트사이트 https://fonts.google.com/

![image](https://user-images.githubusercontent.com/83719746/131094338-2ea7f2af-e11c-49c5-878d-099e05e11326.png)
폰트 설정을 따로 하지 않았을 때 위와 같이 브러우저마다 (크롬과 IE)다르게 적용되고 있음

1. in HTML) CSS파일에 적용하고자 하는 것이므로 main.css 를 link한 코드 위쪽에 폰트를 link를 하자
2. in CSS ) 속성 `font-family : 값` 형태로 작성
% 개발자도구로 폰트가 잘 설정되었는지도 확인하면 좋다
% 유료 폰트인지 아닌지 잘 확인하자
% 폰트는 생각보다 용량이 크므로 너무 자주 사용하지 말자

####  Google Material Icons
자주 사용되는 아이콘을 제공하는 사이트
https://fonts.google.com/icons
https://material.io/develop/web/getting-started

아이콘을 사용하기 위해 html에 링크를 연결한다.
아이콘을 클릭하고 제공되는 html코드를 복사해서 사용한다.
```html
//login 아이콘 가져오기
<span class="material-icons" style="font-size: 50px;">
    login
  </span>
```
img가 아닌 span 태그로 사용되기 때문에 사이즈를 변경하고 싶으면 위와 같이 font-size를 사용해야한다.

% 브라우저는 위에서 아래로 읽어내려가므로 main.css 앞에 해당 link태그를 넣는 것이 좋다