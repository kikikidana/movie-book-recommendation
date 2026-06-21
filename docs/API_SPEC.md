# 🔌 API 명세서

## 개요

RESTful API 명세서입니다. 모든 요청은 JSON 형식입니다.

---

## 🔐 인증 (Authentication)

### 회원가입
**POST** `/api/auth/signup`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "userId": "uuid",
    "email": "user@example.com"
  }
}
```

### 로그인
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "userId": "uuid",
    "email": "user@example.com"
  }
}
```

---

## 👤 사용자 (Users)

### 사용자 정보 조회
**GET** `/api/users/profile`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "userId": "uuid",
  "email": "user@example.com",
  "preferredGenres": ["액션", "로맨스"],
  "interests": ["판타지", "모험"],
  "favoriteWorks": {
    "movies": ["movie_id_1"],
    "books": ["book_id_1"]
  }
}
```

### 취향 정보 수정
**PUT** `/api/users/preferences`

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "preferredGenres": ["액션", "로맨스"],
  "interests": ["판타지", "모험"]
}
```

**Response (200):**
```json
{
  "message": "Preferences updated successfully"
}
```

---

## 🎬 영화 (Movies)

### 영화 목록 조회
**GET** `/api/movies`

**Query Parameters:**
- `page` (optional): 페이지 번호 (기본값: 1)
- `limit` (optional): 페이지당 결과 수 (기본값: 10)
- `genre` (optional): 장르 필터

**Response (200):**
```json
{
  "movies": [
    {
      "movieId": "uuid",
      "title": "영화 제목",
      "genre": ["액션"],
      "rating": 8.5,
      "releaseYear": 2023
    }
  ],
  "totalCount": 100,
  "page": 1
}
```

### 영화 상세 조회
**GET** `/api/movies/:movieId`

**Response (200):**
```json
{
  "movieId": "uuid",
  "title": "영화 제목",
  "genre": ["액션", "드라마"],
  "plot": "초반 줄거리...",
  "rating": 8.5,
  "releaseYear": 2023,
  "director": "감독명",
  "cast": ["배우1", "배우2"],
  "keywords": ["판타지", "모험"]
}
```

---

## 📚 도서 (Books)

### 도서 목록 조회
**GET** `/api/books`

**Query Parameters:**
- `page` (optional): 페이지 번호
- `limit` (optional): 페이지당 결과 수
- `genre` (optional): 장르 필터

**Response (200):**
```json
{
  "books": [
    {
      "bookId": "uuid",
      "title": "책 제목",
      "genre": ["판타지"],
      "rating": 4.2,
      "author": "저자명"
    }
  ],
  "totalCount": 50,
  "page": 1
}
```

### 도서 상세 조회
**GET** `/api/books/:bookId`

**Response (200):**
```json
{
  "bookId": "uuid",
  "title": "책 제목",
  "genre": ["판타지", "모험"],
  "plot": "초반 줄거리...",
  "rating": 4.2,
  "publishYear": 2022,
  "author": "저자명",
  "isbn": "978-1-234567-89-0",
  "keywords": ["판타지", "마법"]
}
```

---

## 🎯 추천 (Recommendations)

### 추천 생성
**POST** `/api/recommendations`

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "preferredGenres": ["액션", "로맨스"],
  "interests": ["판타지", "모험"],
  "favoriteWorks": ["movie_id_1", "book_id_1"]
}
```

**Response (200):**
```json
{
  "movies": [
    {
      "movieId": "uuid",
      "title": "추천 영화 1",
      "genre": ["액션"],
      "plot": "줄거리...",
      "rating": 8.5,
      "recommendationReason": "당신이 좋아하는 액션 영화입니다.",
      "score": 95
    }
  ],
  "books": [
    {
      "bookId": "uuid",
      "title": "추천 도서 1",
      "genre": ["판타지"],
      "plot": "줄거리...",
      "rating": 4.5,
      "recommendationReason": "당신의 관심사와 일치합니다.",
      "score": 92
    }
  ]
}
```

### 추천 기록 조회
**GET** `/api/recommendations/history`

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `page` (optional): 페이지 번호
- `limit` (optional): 페이지당 결과 수

**Response (200):**
```json
{
  "history": [
    {
      "recommendationId": "uuid",
      "createdAt": "2024-06-21T10:30:00Z",
      "movies": [...],
      "books": [...]
    }
  ],
  "totalCount": 10,
  "page": 1
}
```

---

## ❌ 에러 응답

모든 에러는 다음 형식으로 반환됩니다:

```json
{
  "error": "Error message",
  "statusCode": 400
}
```

### 에러 코드

| Status | Message |
|--------|----------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |
