# 📚 데이터 폴더

## 개요

이 폴더에는 영화와 도서 데이터가 저장됩니다.

## 📁 파일 구조

### movies.json

영화 데이터를 저장하는 JSON 파일

```json
[
  {
    "movieId": "1",
    "title": "영화 제목",
    "genre": ["액션", "드라마"],
    "plot": "초반 줄거리...",
    "rating": 8.5,
    "releaseYear": 2023,
    "director": "감독명",
    "keywords": ["판타지", "모험"]
  }
]
```

### books.json

도서 데이터를 저장하는 JSON 파일

```json
[
  {
    "bookId": "1",
    "title": "책 제목",
    "genre": ["판타지", "모험"],
    "plot": "초반 줄거리...",
    "rating": 4.2,
    "publishYear": 2022,
    "author": "저자명",
    "keywords": ["판타지", "마법"]
  }
]
```

## 🔄 데이터 소스

데이터는 다음 출처에서 수집됩니다:
- IMDb (영화)
- Yes24, 교보문고 (도서)
- 네이버 영화 (한국 영화)

## 📝 데이터 수집 방법

1. 웹 크롤링 (BeautifulSoup, Scrapy)
2. API 연동 (TMDB, Google Books API 등)
3. 수동 입력

## ⚠️ 주의사항

- 저작권 정보를 존중합니다
- 상업적 용도로 사용 금지
- 데이터 수집 시 사이트의 이용약관을 준수합니다
