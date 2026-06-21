import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // TODO: Check if user is authenticated
    // const token = localStorage.getItem('token');
    // if (token) {
    //   setIsAuthenticated(true);
    // }
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>🎬📚 영화/도서 추천 서비스</h1>
        <nav>
          <button onClick={() => setCurrentPage('home')}>홈</button>
          <button onClick={() => setCurrentPage('recommend')}>추천받기</button>
          {isAuthenticated ? (
            <>
              <button onClick={() => setCurrentPage('mypage')}>마이페이지</button>
              <button onClick={() => setIsAuthenticated(false)}>로그아웃</button>
            </>
          ) : (
            <>
              <button onClick={() => setCurrentPage('login')}>로그인</button>
              <button onClick={() => setCurrentPage('signup')}>회원가입</button>
            </>
          )}
        </nav>
      </header>

      <main className="main-content">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'recommend' && <RecommendPage />}
        {currentPage === 'login' && <LoginPage setIsAuthenticated={setIsAuthenticated} />}
        {currentPage === 'signup' && <SignupPage setIsAuthenticated={setIsAuthenticated} />}
        {currentPage === 'mypage' && <MyPage />}
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <section className="home">
      <h2>환영합니다!</h2>
      <p>당신의 취향을 입력하고 맞춤형 영화와 도서를 추천받으세요.</p>
      {/* TODO: Add content */}
    </section>
  );
}

function RecommendPage() {
  return (
    <section className="recommend">
      <h2>추천받기</h2>
      {/* TODO: Add recommendation form */}
    </section>
  );
}

function LoginPage({ setIsAuthenticated }) {
  return (
    <section className="login">
      <h2>로그인</h2>
      {/* TODO: Add login form */}
    </section>
  );
}

function SignupPage({ setIsAuthenticated }) {
  return (
    <section className="signup">
      <h2>회원가입</h2>
      {/* TODO: Add signup form */}
    </section>
  );
}

function MyPage() {
  return (
    <section className="mypage">
      <h2>마이페이지</h2>
      {/* TODO: Add mypage content */}
    </section>
  );
}

export default App;
