# Jonghun's Blog

Gatsby로 구축된 개인 블로그입니다.

## 🚀 GitHub Pages 배포

이 프로젝트는 GitHub Pages에 배포되도록 설정되어 있습니다.

### 자동 배포 (권장)

1. GitHub 저장소 생성 후 코드 푸시
2. GitHub 저장소 설정에서 Pages 활성화:
   - Settings → Pages → Source: "GitHub Actions" 선택
3. `main` 브랜치에 푸시하면 자동으로 배포됩니다

### 수동 배포

```bash
# 빌드 및 배포
npm run deploy
```

## 🛠️ 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run develop

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
blog/
├── src/
│   ├── components/     # React 컴포넌트
│   ├── pages/         # 페이지 파일들
│   └── hooks/         # 커스텀 훅
├── blog/              # MDX 블로그 포스트
├── public/            # 정적 파일들
└── .github/workflows/ # GitHub Actions 워크플로우
```

## 🔧 주요 기능

- ⚡ Gatsby 5.15.0 기반
- 📝 MDX 지원
- 🎨 TypeScript 지원
- 📱 반응형 디자인
- 🔍 SEO 최적화
- 🚀 GitHub Pages 자동 배포

## 📝 블로그 포스트 작성

`blog/` 폴더에 `.mdx` 파일을 추가하면 자동으로 블로그 포스트가 생성됩니다.

```mdx
---
title: "포스트 제목"
date: "2024-01-01"
---

# 포스트 내용

여기에 마크다운으로 작성하세요.
```

## 🌐 배포된 사이트

배포 후 다음 URL에서 확인할 수 있습니다:
`https://jonghunkwon.github.io/blog`