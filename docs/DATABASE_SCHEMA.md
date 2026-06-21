# 💾 데이터베이스 설계

## 개요

MongoDB를 사용하는 비정규화된 데이터 구조입니다.

---

## 📚 컬렉션 (Collections)

### 1. users

사용자 정보 저장

```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  preferredGenres: [String],  // 선호 장르
  interests: [String],        // 관심 키워드
  favoriteWorks: {
    movies: [String],         // 영화 ID
    books: [String]           // 도서 ID
  },
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `email` (unique)
- `createdAt`

---

### 2. movies

영화 정보 저장

```javascript
{
  _id: ObjectId,
  title: String (unique),
  genre: [String],
  plot: String,
  rating: Number (0-10),
  releaseYear: Number,
  director: String,
  cast: [String],
  keywords: [String],
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `title` (unique)
- `genre`
- `keywords`

---

### 3. books

도서 정보 저장

```javascript
{
  _id: ObjectId,
  title: String (unique),
  genre: [String],
  plot: String,
  rating: Number (0-5),
  publishYear: Number,
  author: String,
  isbn: String,
  keywords: [String],
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `title` (unique)
- `genre`
- `keywords`
- `author`

---

### 4. recommendations

추천 기록 저장

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: users),
  recommendedMovies: [
    {
      movieId: ObjectId (ref: movies),
      reason: String,
      score: Number
    }
  ],
  recommendedBooks: [
    {
      bookId: ObjectId (ref: books),
      reason: String,
      score: Number
    }
  ],
  createdAt: Date
}
```

**Indexes:**
- `userId`
- `createdAt`

---

## 🔄 관계도

```
users
  ├─> movies (favoriteWorks)
  ├─> books (favoriteWorks)
  └─> recommendations
        ├─> movies
        └─> books
```

---

## 📈 확장성 고려사항

1. **분석 데이터**: 사용자 선택 기록 추가
2. **평점 시스템**: 사용자 평점 컬렉션
3. **리뷰**: 사용자 리뷰 컬렉션
4. **태그**: 커뮤니티 태그 시스템
5. **팔로우**: 사용자 간 팔로우 기능

---

## 🔒 보안

- 비밀번호: bcrypt로 해시 처리
- 인증: JWT 토큰 사용
- 쿼리: 입력 값 검증 및 sanitize
