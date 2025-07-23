# Movement Move Book

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbookiroad%2Fmove-book)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Korean](https://img.shields.io/badge/Language-Korean-blue.svg)](https://movement-dev-kr.vercel.app)

**Movement에서 시작하는 Move 개발 가이드**

Movement Network의 한국어 개발자 문서입니다. Move 언어부터 dApp 개발까지 체계적으로 학습할 수 있는 완전한 가이드를 제공합니다.

## 🌐 [📖 가이드 보러가기 →](https://movement-dev-kr.vercel.app)

---

## 📚 가이드 구성

### 🚀 [시작하기](https://movement-dev-kr.vercel.app/getting-started)
- 개발 환경 세팅 (Rust & Move 설치)
- Movement CLI 설치 및 설정
- VS Code/Cursor 확장 프로그램 설정
- 첫 Move 모듈 만들기
- 계정 생성 & Faucet 사용법

### 📚 [기본 개념](https://movement-dev-kr.vercel.app/basic-concepts)
- Move 언어 구조 & 데이터 타입
- 모듈과 리소스 시스템
- 제어 구조 & 함수 타입
- 제네릭 & 팬텀 타입

### 🎯 [고급 개념](https://movement-dev-kr.vercel.app/advanced-concepts)
- Smart Vector & Smart Table
- Resource Account & Capability
- Event, Object, Signer 심화
- Access Control & Security

### 🏗️ [dApp 개발](https://movement-dev-kr.vercel.app/dapp-development)
- **🖼️ NFT 개발**: 완전한 NFT 마켓플레이스 구축
- **🏦 DeFi 개발**: 대출, DEX, DAO 시스템 구현
- **🎮 게임 개발**: Move Slayers 온체인 RPG

### 🔧 [개발자 도구](https://movement-dev-kr.vercel.app/developer-tools)
- Movement CLI 상세 가이드
- TypeScript/Python/Rust SDK
- Wallet 연동 (Razor, Nightly)

### 🌐 [네트워크 & 인프라](https://movement-dev-kr.vercel.app/network-infrastructure)
- Mainnet/Testnet/Devnet 안내
- RPC & Indexer 엔드포인트
- Oracle 연동 (Pyth)

---

## ⭐ 주요 특징

- **🇰🇷 한국어 완전 지원**: 영어 장벽 없이 학습
- **🛠️ 실전 중심**: 바로 사용할 수 있는 예제와 코드
- **📖 체계적 구성**: 기초부터 고급까지 단계별 학습
- **🚀 완전한 예제**: 실제 동작하는 dApp 구현 포함

---

## 🚀 빠른 시작

```bash
# Movement CLI 설치
curl -fsSL https://get.movementnetwork.xyz | sh

# 새 프로젝트 생성
movement init my-project
cd my-project

# 개발 서버 시작
movement dev
```

---

## 🏗️ 로컬 개발 환경 구축

이 문서 사이트를 로컬에서 실행하려면:

```bash
# 저장소 클론
git clone https://github.com/bookiroad/move-book.git
cd move-book

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하세요.

### 기술 스택

- **[Nextra](https://nextra.site/)**: Next.js 기반 문서 사이트 생성기
- **[Next.js](https://nextjs.org/)**: React 기반 풀스택 프레임워크
- **[Tailwind CSS](https://tailwindcss.com/)**: 유틸리티 기반 CSS 프레임워크
- **[Vercel](https://vercel.com/)**: 자동 배포 및 호스팅

---

## 🤝 기여하기

Move Book은 커뮤니티의 기여를 환영합니다!

### 기여 방법

1. **이슈 제보**: 버그나 개선사항을 [Issues](https://github.com/bookiroad/move-book/issues)에 제보
2. **Pull Request**: 직접 수정하여 PR 제출
3. **번역 참여**: 다국어 번역 프로젝트 참여
4. **콘텐츠 작성**: 새로운 가이드나 튜토리얼 작성

### Pull Request 가이드

```bash
# 1. Fork 후 클론
git clone https://github.com/YOUR_USERNAME/move-book.git

# 2. 새 브랜치 생성
git checkout -b feature/your-feature-name

# 3. 변경사항 작성 후 커밋
git add .
git commit -m "feat: add new tutorial for XYZ"

# 4. Push 후 PR 생성
git push origin feature/your-feature-name
```

### 기여 가이드라인

- **명확한 설명**: 변경사항을 명확히 설명해주세요
- **테스트**: 로컬에서 빌드 테스트 후 제출
- **코드 스타일**: 기존 문서의 스타일과 일관성 유지
- **한국어**: 모든 콘텐츠는 한국어로 작성

---

## 📄 라이선스

이 프로젝트는 [MIT License](LICENSE)로 배포됩니다.

---

## 🤝 커뮤니티

- **🌐 웹사이트**: [movement-dev-kr.vercel.app](https://movement-dev-kr.vercel.app)
- **💬 Discord**: [Movement](https://discord.com/invite/movementlabsxyz)
- **📱 Telegram**: [Movement Korea](https://t.me/Movement_KOR)
- **🐙 GitHub**: [Issues & Discussions](https://github.com/bookiroad/move-book/issues)

---

## 📖 추가 리소스

- [Movement 개발자 포털](https://developer.movementnetwork.xyz/)
- [Movement Network 공식 문서](https://docs.movementnetwork.xyz)
- [Move 언어 공식 문서](https://move-language.github.io/move/)
- [Movement Labs GitHub](https://github.com/movementlabsxyz)

---

<div align="center">

**Movement Network와 함께 Web3 개발을 시작해보세요!** 🚀

[📖 가이드 시작하기](https://movement-dev-kr.vercel.app) • [💬 커뮤니티 참여](https://discord.com/invite/movementlabsxyz) • [🤝 기여하기](https://github.com/bookiroad/move-book/issues)

---

⭐ **이 프로젝트가 도움이 되었다면 Star를 눌러주세요!** ⭐

</div>
