# Backend - Movie & Book Recommendation Service

## 📋 개요

Node.js/Express 기반의 RESTful API 서버입니다.

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
```bash
cp .env.example .env
```

.env 파일을 열어 필요한 값을 입력하세요:
- MONGODB_URI: MongoDB 연결 주소
- JWT_SECRET: JWT 서명 키
- PORT: 서버 포트

### 3. 서버 실행

개발 모드:
```bash
npm run dev
```

일반 모드:
```bash
npm start
```

## 📁 폴더 구조

```
src/
├── config/         # 데이터베이스 설정
├── controllers/    # 비즈니스 로직
├── models/         # MongoDB 스키마
├── routes/         # API 라우트
├── middleware/     # 미들웨어 (인증, 에러 처리)
├── services/       # 추천 알고리즘
└── app.js          # 메인 애플리케이션
```

## 🔌 API 엔드포인트 (예정)

- `POST /api/auth/signup` - 회원가입
- `POST /api/auth/login` - 로그인
- `GET /api/users/profile` - 사용자 정보
- `PUT /api/users/preferences` - 취향 정보 수정
- `GET /api/movies` - 영화 목록
- `GET /api/books` - 도서 목록
- `POST /api/recommendations` - 추천 생성
- `GET /api/recommendations/history` - 추천 기록

자세한 내용은 [API_SPEC.md](../docs/API_SPEC.md)를 참고하세요.

## 📦 사용 패키지

- **express** - 웹 프레임워크
- **mongoose** - MongoDB ODM
- **bcryptjs** - 비밀번호 암호화
- **jsonwebtoken** - JWT 인증
- **cors** - CORS 처리
- **dotenv** - 환경 변수 관리

## 🧪 테스트

```bash
npm test
```

## 📝 라이센스

MIT
