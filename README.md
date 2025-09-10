# 포트폴리오 + 블로그 (Jekyll, KR)

이 템플릿은 **정적 포트폴리오 페이지**와 **블로그(Jekyll)**를 한 레포로 운영합니다.
- 포트폴리오: `index.html`, `works.html`, `about.html`, `contact.html`
- 블로그: `_posts/`에 마크다운 글 추가, `blog/`에서 목록 확인

## Pages 설정
- **User 사이트**(`username.github.io`) → `_config.yml`의 `baseurl: ""` 유지
- **Project 사이트**(`username.github.io/레포`) → `baseurl: "/레포이름"` 로 변경
- Pages Source: `Deploy from a branch` / Branch: `main` / Folder: `/ (root)`

## 새 글 쓰기
`_posts/` 폴더에 `YYYY-MM-DD-제목.md` 파일 생성:
```md
---
layout: post
title: "제목"
---
여기에 본문 작성
```
이미지:
```md
![대체텍스트]({{ site.baseurl }}/assets/img/파일명.jpg)
```

## 이미지 교체
작품/블로그 이미지 파일을 `assets/img/`에 업로드하고 경로를 바꾸세요.
