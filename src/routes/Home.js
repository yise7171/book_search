import React from 'react';
import axios from 'axios';
import SearchBook from '../components/SearchBook';
import "./Home.css";

class Home extends React.Component {
    // state 관리 
    state = {
        isLoading: true,
        books: [],
        value: "",
        clientId: "",
        secretKey: ""
    };

    // 네이버 API의 키값을 이용하여 검색
    getBook = async () => {
        const ID_KEY = this.state.clientId;
        const SECRET_KEY = this.state.secretKey;
        const search = this.state.value;
        try {
            if (search === "") {
                this.setState({ books: [], isLoading: false })
            } else {
                // 네이버 API 검색
                const { data: {
                    items
                } } = await axios.get('https://openapi.naver.com/v1/search/book.json', {
                    params: {
                        query: search,
                        display: 10,
                        start: 1
                    },
                    headers: {
                        'X-Naver-Client-Id': ID_KEY,
                        'X-Naver-Client-Secret': SECRET_KEY
                    }
                });
                // State를 직접 저자아지 않기 위해 book 정보를 저장
                this.setState({ books: items, isLoading: false });
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    // 컴포넌트 랜더링되면 수행
    componentDidMount() {
        this.getBook();
    };

    // input 이벤트인 onchange를 사용하여 검색어를 입력하면 실시간으로 검색 정보(value)를 State에 저장합니다
    // 또한 handleSubmit은 input box에서 엔터를 입력 시 정보가 전송되는 기본 이벤트이며
    // 해당 이벤트가 발생할 때 getSearchMovie() 함수를 실행하도록 하였습니다.
    // 다만 해당 이벤트의 고유 기능은 사용하지 않기에 e.preventDefault()를 사용하여 막아두었습니다
    // 출처: https://msyu1207.tistory.com/entry/React로-영화-정보를-검색해보자-두번째-네이버-API-사용-CORS-설정-하기 [Lotts Blog]
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleChangeId = (e) => {
        this.setState({ clientId: e.target.clientId });
    };

    handleChangeKey = (e) => {
        this.setState({ secretKey: e.target.secretKey });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.getBook();
    };

    render() {
        const { books, isLoading } = this.state;
        // 랜더링 시 Loading.. 수행하고 랜더링 후 componentDidMount()에서 getBook() 수행
        return (
            <section className="container">
                {
                    isLoading ? (
                        <div className="loader">
                            <span className="loader_text">Loading..</span> </div>
                    ) :
                        (
                            // 변경된 State의 값에서 도서 정보리스트를 map을 이용하여 
                            // 하나씩 SearchBook로 렌더링
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div className="input_div">
                                        <h1>도서 검색</h1>
                                        <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="도서명을 검색해 보세요." />
                                        <input className="input_clientid" type="text" value={this.state.clientId} onChange={this.handleChangeId} placeholder="API Client ID를 입력하세요" />
                                        <input className="input_secretkey" type="text" value={this.state.secretKey} onChange={this.handleChangeKey} placeholder="API Scret Key를 입력하세요." />
                                        <button type="submit">검색</button>
                                    </div>
                                    <div className="books"> {
                                        books.map(book => (
                                            <SearchBook
                                                key={book.isbn}
                                                id={book.isbn}
                                                year={book.pubdate}
                                                title={book.title}
                                                poster={book.image}
                                                director={book.publisher}
                                                actor={book.actor}
                                                summary={book.description}
                                            />)
                                        )
                                    }
                                    </div>
                                </div>
                            </form>
                        )
                }
            </section>
        );
    }
}

export default Home;
