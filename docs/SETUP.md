# 🚀 설치 및 실행 가이드

## 📋 필수 요구사항

- Node.js (v14 이상)
- npm (v6 이상)
- MongoDB (v4.0 이상) 또는 MongoDB Atlas
- Git

---

## 🔧 설치 단계

### 1. 저장소 클론

```bash
git clone https://github.com/kikikidana/movie-book-recommendation.git
cd movie-book-recommendation
```

### 2. Backend 설정

#### 2.1 의존성 설치
```bash
cd backend
npm install
```

#### 2.2 환경 변수 설정
```bash
cp .env.example .env
```

`.env` 파일을 열어 다음 값들을 입력하세요:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/movie-book-recommendation
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

#### 2.3 MongoDB 설정

**로컬 MongoDB 사용:**
```bash
# Windows
mongod

# Mac/Linux
mongod --dbpath /usr/local/var/mongodb
```

**MongoDB Atlas 사용:**
1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 접속
2. 계정 생성 및 클러스터 생성
3. MONGODB_URI를 클러스터 연결 문자열로 변경

#### 2.4 Backend 서버 실행

개발 모드:
```bash
npm run dev
```

일반 모드:
```bash
npm start
```

✅ "Server is running on port 5000" 메시지가 나타나면 성공입니다.

---

### 3. Frontend 설정

**새 터미널 탭/창을 열고:**

#### 3.1 의존성 설치
```bash
cd frontend
npm install
```

#### 3.2 개발 서버 실행
```bash
npm start
```

✅ 브라우저가 자동으로 [http://localhost:3000](http://localhost:3000)에서 열립니다.

---

## 🧪 테스트

### Backend 테스트
```bash
cd backend
npm test
```

### Frontend 테스트
```bash
cd frontend
npm test
```

---

## 🐳 Docker를 사용한 실행 (옵션)

### 1. Docker 설치
- [Docker Desktop](https://www.docker.com/products/docker-desktop) 다운로드 및 설치

### 2. Docker Compose로 실행
```bash
docker-compose up
```

✅ Backend: http://localhost:5000
✅ Frontend: http://localhost:3000
✅ MongoDB: localhost:27017

---

## 📚 API 테스트

### Postman 사용

1. [Postman](https://www.postman.com/downloads/) 설치
2. 컬렉션 임포트: `docs/postman_collection.json` (준비 중)
3. 요청 실행

### cURL 사용

```bash
# 헬스 체크
curl http://localhost:5000/api/health
```

---

## 🎨 개발 팁

### VS Code 추천 확장
- ES7+ React/Redux/React-Native snippets
- MongoDB for VS Code
- Postman
- REST Client

### 디버깅

**Backend 디버깅:**
```bash
node --inspect src/app.js
```

**Frontend 디버깅:**
- Chrome DevTools 사용 (F12)
- React DevTools 확장 설치

---

## 🚨 일반적인 문제 해결

### MongoDB 연결 오류
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**해결:**
- MongoDB 서비스 실행 확인
- MONGODB_URI 값 확인

### Port 이미 사용 중
```
Error: listen EADDRINUSE: address already in use :::5000
```
**해결:**
```bash
# Port 5000을 사용하는 프로세스 찾기
lsof -i :5000

# 프로세스 종료
kill -9 <PID>
```

### npm install 오류
```bash
# npm 캐시 삭제
npm cache clean --force

# 재설치
rm -rf node_modules package-lock.json
npm install
```

---

## 📖 다음 단계

1. [API 명세서](./API_SPEC.md) 읽기
2. [데이터베이스 설계](./DATABASE_SCHEMA.md) 확인
3. [추천 알고리즘](./ALGORITHM.md) 이해
4. 첫 기능 개발 시작

---

## 💬 문제

문제가 생기면 [GitHub Issues](https://github.com/kikikidana/movie-book-recommendation/issues)에 보고해주세요!
