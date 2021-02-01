# book_search

- nodejs 설치

```
OS에 맞게 설치
npm install npx -g
```

- 새로운 React APP 만들기

```
npx create-react-app book_search
```

- React 라이브러리 설치

```
// Axios: 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
// 백엔드랑 프론트엔드랑 통신을 쉽게하기 위한 라이브러리 (Ajax 보다 괜춘)
npm i axios
// axios.get(url,[,config])
// axios.post("url주소",{
    	data객체
    },[,config])
// axios.delete(URL,[,config]);
// axios.put(url[, data[, config]])
```

```
// 프로퍼티 타입을 검사하는 라이브러리
npm i prop-types
//MyComponent.propTypes = {
    name: PropTypes.string
  };
```

```
// 웹에서 디렉토리 라우트를 수행하는 라이브러리
npm i react-router-dom

// exact={true} 옵션: path따라 정확히 렌더링 수행
// "/"
// "/search"의 경우
// <Route path="/" exact={true} component={Home} /> 설정 시
// 'localhost:3000/#/'만 랜더링 수행
```

```
// github  homepage 등록
npm i gh-pages
homepage 항목 추가
// {
//    "homepage" : "https://(GitHub ID).github.io/(Repository name)/"
// }
// script 추가
// {
//   "script": {
//     "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"
//   }
// }
```

- github 등록

```
git init .
git remote add origin https://github.com/yise7171/book_search

```

- github

```
git config --global core.autocrlf true
git add .
git commit -m "#1.0 Book Search with React"
git push -u origin master
//push 에러 시
git pull origin master
git push -u origin +master
```

```
 https://openapi.naver.com/v1/search/book.xml?query=리액트&display=10&start=1
```

- CORS 해결 방안
  - express 서버 설정
  ```
  npm i express
  npm i cors
  ```
