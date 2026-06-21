# 🤖 추천 알고리즘

## 개요

사용자의 취향 데이터를 기반으로 영화와 도서를 추천하는 알고리즘입니다.

---

## 📖 알고리즘 단계

### Step 1: 사용자 정보 불러오기
```
user = getUserProfile(userId)
├─ preferredGenres: ["액션", "로맨스"]
├─ interests: ["판타지", "모험"]
└─ favoriteWorks: ["movie1", "book1"]
```

### Step 2: 선호 장르 분석
```
genreScores = analyzeGenres(user.preferredGenres)
└─ 각 장르의 가중치 계산 (1.0)
```

### Step 3: 선호 키워드 분석
```
keywordScores = analyzeKeywords(user.interests)
└─ 각 키워드의 가중치 계산 (0.8)
```

### Step 4: 좋아하는 작품 분석
```
favoriteScores = analyzeFavoriteWorks(user.favoriteWorks)
└─ 유사 작품의 장르 및 키워드 추출 (1.2)
```

### Step 5: 유사 작품 검색
```
similarWorks = searchSimilarWorks(movies, books, {
  genres: preferredGenres,
  keywords: interests,
  excludeFavorites: true
})
```

### Step 6: 추천 점수 계산
```
for each work in similarWorks:
  score = 0
  score += genreMatch(work.genre, genreScores) * 0.4
  score += keywordMatch(work.keywords, keywordScores) * 0.3
  score += similarityToFavorites(work, favorites) * 0.3
  work.recommendationScore = score
```

### Step 7: 상위 결과 추출
```
topMovies = similarMovies.sorted(by: score).top(5)
topBooks = similarBooks.sorted(by: score).top(5)
```

### Step 8: 결과 제시
```
recommendations = {
  movies: topMovies,
  books: topBooks,
  reasons: generateReasons(topMovies, topBooks)
}
```

---

## 📊 점수 계산

### 장르 일치도
```
genreMatch(workGenre, userGenres) = {
  matchCount = 0
  for genre in workGenre:
    if genre in userGenres:
      matchCount += 1
  return matchCount / len(workGenre)
}
```

### 키워드 일치도
```
keywordMatch(workKeywords, userKeywords) = {
  matchCount = 0
  for keyword in workKeywords:
    if keyword in userKeywords:
      matchCount += 1
  return matchCount / len(workKeywords)
}
```

### 평점 고려도
```
ratingBonus(workRating) = {
  if workRating >= 8.0:  // 영화
    return 0.2
  else if workRating >= 3.5:  // 도서
    return 0.15
  else:
    return 0
}
```

---

## 🎯 추천 이유 생성

```
function generateReason(work, user):
  reason = ""
  
  if hasMatchingGenre(work, user):
    reason += f"당신이 선호하는 {work.genre} 장르입니다. "
  
  if hasMatchingKeyword(work, user):
    reason += f"당신의 관심사인 '{user.interests}'과 관련이 있습니다. "
  
  if hasHighRating(work):
    reason += f"높은 평점({work.rating})을 받은 작품입니다. "
  
  return reason
```

---

## 🔧 개선 방안

### 1. 협업 필터링 (Collaborative Filtering)
- 사용자 간 유사도 계산
- 유사 사용자의 평가 활용

### 2. 콘텐츠 기반 필터링 고도화
- 플롯 유사도 (TF-IDF)
- 장르 세분화

### 3. 하이브리드 접근
- 협업 필터링 + 콘텐츠 기반 필터링
- 사용자 피드백 반영

### 4. 머신러닝
- 신경망 모델 학습
- 더 정확한 예측

---

## 📈 성능 메트릭

- **정확도 (Accuracy)**: 추천한 작품 중 사용자가 만족한 비율
- **정밀도 (Precision)**: 관련 있는 추천 비율
- **재현율 (Recall)**: 사용자가 좋아할 작품 중 추천한 비율
- **NDCG (Normalized Discounted Cumulative Gain)**: 순위 고려 추천 품질
