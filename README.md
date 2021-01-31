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

```

```

```
