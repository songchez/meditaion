# Bible 30000 project Web App

## TODO

- [x] 스키마 변경(추가) -> Where she read? type: string
- [x] 전체 DB 넣는게 나을까? 아니면 없는게 나을까? -> 데이타 저장 해놓으면 불러올때 저장한거만 불러오면 됨. 아니면 불러올떄마다 계산 해야댐. 누군가 추가했을때 더하면? 동기화 오류날수도. 대신 누군가 입력할 때마다 데이터 변경해야댐 변경이 리소스를 많이먹을까? 아니면 전체DB를 불러오는게(READ) 리소스를 많이 먹을까? 당연히 변경(UPDATE)하는게 나을듯. 일단 이렇게 하고 더 좋은 방법을 생각해보자.
- [x] DB Connection -> Post에 말씀저장 + 전체 수 DB에 저장
- [x] layout 구현.
  1. - [x] 묵상리스트에 다양한 정보 보이게( 구절어디인지 등)
  2. - [x] 묵상페이지에 구절이 같이 나올수있도록. + UI 구현
  3. - [x] 홈 -> 자기가 얼마나 읽었는지 보이기(data fetch)
  4. - [x] 홈 -> 모두가 얼마나 읽었는지 보이기.(data fetch), CountUp animation
  5. - [x] Bottom Navbar 수정
  6. - [x] 트리 페이지 간단하게 만들기 - 보류
- [x] vercel에 배포하기
- [x] 자잘한 인터랙티브 수정
- [ ] dark 모드 구현 -> 다크모드 css수정
- [ ] 각 로딩화면 구현
- [ ] 포스트 삭제 메소드 구현
- [ ] 인용하기 기능

## Authors

- [@songchez](https://github.com/songchez)

## Installation

Install 성경묵상웹앱 with npm

```bash
  git clone
  npm install
  npm run dev
```

## Deployment

준비중...

## License

[MIT](https://choosealicense.com/licenses/mit/)

## 기술스택

Frontend : Next.js 13, daisyUI
Backend : Prisma, Nextauth
FrontServer : Vercel
Backserver : PlanetScale

[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?title=%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D&fontFamily=Dongle&lineHeight=6&lineCount=2&theme=2077&line1=Next.js,Next.js,000000;planetscale,planetscale,000000;daisyui,daisyui,5A0EF8;&line2=node.js,node.js,0d5cee;tailwindcss,tailwindcss,aaef4b;)](https://github-readme-tech-stack.vercel.app/api/cards?title=%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D&fontFamily=Dongle&lineHeight=6&lineCount=2&theme=2077&line1=Next.js,Next.js,000000;planetscale,planetscale,000000;daisyui,daisyui,5A0EF8;&line2=node.js,node.js,0d5cee;tailwindcss,tailwindcss,aaef4b;)
