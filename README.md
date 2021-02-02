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

출처: https://msyu1207.tistory.com/entry/React로-영화-정보를-검색해보자-두번째-네이버-API-사용-CORS-설정-하기 [Lotts Blog]

1. proxy 사용

   ```
   1. package.json에 추가
     "proxy":"https://openapi.naver.com"
   2. axios 접속 변경
     await axios.get('https://openapi.naver.com/v1/search/book.json', {
     =>
     await axios.get('/v1/search/book.json', {
   3. 문제점
     서버로 배포나 github page 배포 시에는 CORS 문제를 해결할 수 없으며 개발환경에서만 적용됨
   ```

2. Proxy server를 같이 생성하여 사용하는 방법

   ```
    1. http-proxy-middleware 설치
      npm i http-proxy-middleware --save
    2. setupProxy.js( createProxyMiddleware 작성 )
    3. axios 접속 변경
      await axios.get('https://openapi.naver.com/v1/search/book.json', {
      =>
      await axios.get('/api/v1/search/book.json', {
   ```

3. 서버 생성

```
nodejs 무중단 pm2 기동
 1. npm install -g pm2@latest
 2. server.js 작성
 3. pm2 start ./src/servers/server.js --name book_api_server
 4. pm2 list
 5. axios 접속 변경
    await axios.get('https://openapi.naver.com/v1/search/book.json', {
    =>
    await axios.get('http://localhost:3001', {
```
