# BBakGoSu IT · KNOX blog

티스토리의 공개 글을 옮긴 Astro 정적 블로그입니다. GitHub Pages 주소는 <https://codebbakgosu.github.io/>입니다.

## 로컬 미리보기

```bash
npm ci
npm run dev
```

배포 결과를 로컬에서 확인하려면 `npm run build` 후 `npm run preview`를 실행합니다.

## 새 글 쓰기

`src/content/posts/`에 다음 번호의 `.md` 파일을 추가합니다. 파일 이름이 `/posts/<번호>/` 주소가 됩니다.

```md
---
title: 새 글 제목
pubDate: 2026-09-28
description: 검색 결과와 목록에 표시할 150자 안팎의 요약
category: 개발
tags:
  - Astro
originalUrl: https://bbakgosu.tistory.com/44
---

본문을 여기에 씁니다.
```

카테고리는 `AI`, `개발`, `투자`, `성장·회고`, `일상` 중 하나입니다. 이미지 파일은 `public/images/posts/<번호>/`에 넣고 본문에서는 `/images/posts/<번호>/파일명`으로 참조합니다. 새 글에 티스토리 원문이 없다면 `originalUrl` 스키마와 원문 링크 표시도 함께 조정해야 합니다.

## 배포와 도메인

`main` 브랜치에 push하면 GitHub Actions가 빌드하고 Pages에 배포합니다. 지금은 사용자 사이트 루트 경로를 사용합니다. 커스텀 도메인을 나중에 연결할 때 `public/CNAME`을 추가하고 `astro.config.mjs`의 `site`도 해당 주소로 바꾸세요.

## 이전 자료 확인 사항

요청한 공개 글 34개를 모두 옮겼습니다. `/posts/21/`에 있던 이미지 두 장(`4_12_23_0.png`, `4_12_25_0.png`)은 원본 티스토리에서도 HTTP 404를 반환해 가져올 수 없었습니다. 원본 파일을 찾으면 `public/images/posts/21/`에 넣고 본문 표시 문구를 이미지 링크로 바꿀 수 있습니다.
