# 🎬📚 AI 기반 영화/도서 통합 추천 서비스

## 📋 프로젝트 개요

사용자의 취향 분석을 통해 영화와 도서를 추천하는 웹 서비스입니다. 
사용자가 선호하는 장르나 관심사, 좋아하는 작품 등을 입력하면 AI가 이를 분석하여 적절한 영화와 도서를 추천합니다.

**핵심 차별점:** 기존 추천 서비스는 영화와 도서를 각각 따로 추천하는 경우가 많습니다. 본 서비스는 두 콘텐츠를 함께 추천하여 사용자가 새로운 작품을 쉽게 발견할 수 있도록 돕습니다.

---

## 🎯 핵심 기능

### 1️⃣ 회원가입 및 로그인
- 이메일 회원가입
- 비밀번호 암호화 저장
- 로그인 인증
- JWT 기반 세션 관리

### 2️⃣ 사용자 취향 입력
- 선호 장르 선택 (미리 정의된 선택지)
- 관심 키워드 입력
- 좋아하는 작품 입력
- 취향 정보 저장 및 수정

### 3️⃣ 추천 생성 기능
- 사용자 정보 분석
- 선호 장르 분석
- 선호 키워드 분석
- 좋아하는 작품 분석
- 유사 작품 검색
- 추천 점수 계산
- 상위 결과 추출
- 추천 이유 설명

### 4️⃣ 작품 검색 기능
- 제목 기반 검색
- 장르별 필터링
- 검색 결과 상세 정보 표시
- 관련 작품 추천

### 5️⃣ 추천 기록 저장 기능
- 추천 결과 자동 저장
- 날짜별 기록 관리
- 과거 추천 조회
- 즐겨찾기 기능

---

## 🖥️ 화면 구성

| 화면 | 설명 |
|------|------|
| **메인 페이지** | 로그인/회원가입 버튼, 추천 탭, 인기 작품 표시 |
| **취향 입력 페이지** | 장르 선택, 키워드 입력, 좋아하는 작품 입력 |
| **추천 결과 페이지** | 영화 추천 목록, 도서 추천 목록, 추천 이유 |
| **마이페이지** | 즐겨찾기 목록, 추천 기록, 계정 정보 |
| **작품 검색 페이지** | 검색창, 필터링, 상세 정보 |

---

## 💾 데이터 구조

### 사용자 데이터
```json
{
  "userId": "uuid",
  "email": "user@example.com",
  "password": "hashed_password",
  "preferredGenres": ["액션", "로맨스"],
  "interests": ["판타지", "모험"],
  "favoriteWorks": ["movie_id_1", "book_id_1"]
}
```

### 영화 데이터
```json
{
  "movieId": "uuid",
  "title": "영화 제목",
  "genre": ["액션", "드라마"],
  "plot": "초반 줄거리...",
  "rating": 8.5,
  "releaseYear": 2023
}
```

### 도서 데이터
```json
{
  "bookId": "uuid",
  "title": "책 제목",
  "genre": ["판타지", "모험"],
  "plot": "초반 줄거리...",
  "rating": 4.2,
  "publishYear": 2022
}
```

---

## 🛠️ 기술 스택

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **API:** RESTful API

### Frontend
- **Framework:** React
- **Styling:** CSS / Tailwind CSS
- **State Management:** Redux (필요시)
- **HTTP Client:** Axios

### DevOps
- **Version Control:** Git & GitHub
- **Containerization:** Docker
- **Package Manager:** npm

---

## 📋 구현 단계

### Phase 1: 기초 구축 ✅
- [ ] Backend 서버 초기화 (Express)
- [ ] Frontend 초기화 (React)
- [ ] 데이터베이스 설계
- [ ] 사용자 인증 시스템

### Phase 2: 핵심 기능 🔄
- [ ] 사용자 취향 입력 UI
- [ ] 작품 데이터 크롤링 및 저장
- [ ] 추천 알고리즘 구현
- [ ] 추천 결과 표시

### Phase 3: 부가 기능
- [ ] 검색 기능
- [ ] 추천 기록 저장
- [ ] 마이페이지
- [ ] 즐겨찾기

### Phase 4: 테스트 및 배포
- [ ] 단위 테스트
- [ ] 통합 테스트
- [ ] 성능 최적화
- [ ] 클라우드 배포

---

## 📁 프로젝트 구조

```
movie-book-recommendation/
├── backend/
│   ├── src/
│   │   ├── config/           # 데이터베이스, 환경 설정
│   │   ├── controllers/      # 비즈니스 로직
│   │   ├── models/           # 데이터 모델 (User, Movie, Book)
│   │   ├── routes/           # API 라우트
│   │   ├── middleware/       # 인증, 에러 처리
│   │   ├── services/         # 추천 알고리즘
│   │   └── app.js            # 메인 앱
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/       # UI 컴포넌트
│   │   ├── pages/            # 페이지
│   │   ├── services/         # API 호출
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── data/
│   ├── movies.json           # 영화 데이터
│   ├── books.json            # 도서 데이터
│   └── README.md
│
├── docs/
│   ├── API_SPEC.md           # API 명세서
│   ├── DATABASE_SCHEMA.md    # 데이터베이스 설계
│   ├── ALGORITHM.md          # 추천 알고리즘 설명
│   └── SETUP.md              # 설치 및 실행 가이드
│
├── docker-compose.yml
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone https://github.com/kikikidana/movie-book-recommendation.git
cd movie-book-recommendation
```

### 2. Backend 설정
```bash
cd backend
npm install
cp .env.example .env
npm start
```

### 3. Frontend 설정
```bash
cd ../frontend
npm install
npm start
```

자세한 내용은 [SETUP.md](./docs/SETUP.md)를 참고하세요.

---

## 📚 문서

- [API 명세서](./docs/API_SPEC.md)
- [데이터베이스 설계](./docs/DATABASE_SCHEMA.md)
- [추천 알고리즘](./docs/ALGORITHM.md)
- [설치 및 실행 가이드](./docs/SETUP.md)

---

## 👥 팀

- **개발자:** kikikidana

---

## 📝 라이센스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

## 📞 문의

이슈 제출: [GitHub Issues](https://github.com/kikikidana/movie-book-recommendation/issues)
