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