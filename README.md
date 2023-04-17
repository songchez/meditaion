# Bible 30000 project Web App

## TODO

- [x] 스키마 변경(추가) -> Where she read? type: string
- [x] 전체 DB 넣는게 나을까? 아니면 없는게 나을까? -> 데이타 저장 해놓으면 불러올때 저장한거만 불러오면 됨. 아니면 불러올떄마다 계산 해야댐. 누군가 추가했을때 더하면? 동기화 오류날수도. 대신 누군가 입력할떄마다 데이터 변경해야댐 변경이 리소스를 많이먹을까? 아니면 전체DB를 불러오는게(READ) 리소스를 많이 먹을까? 당연히 변경(UPDATE)하는게 나을듯. 일단 이렇게 하고 더 좋은 방법을 생각해보자.
- [ ] DB Connection -> Post에 말씀저장 + 전체 수 DB에 저장
- [ ] layout 구현. CSS CountUp animation
- [ ] dark 모드 구현

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

[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?title=%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D&fontFamily=Dongle&lineHeight=6&lineCount=2&theme=2077&line1=Next.js,Next.js,000000;planetscale,planetscale,000000;daisyui,daisyui,5A0EF8;&line2=node.js,node.js,0d5cee;tailwindcss,tailwindcss,aaef4b;)](https://github-readme-tech-stack.vercel.app/api/cards?title=%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D&fontFamily=Dongle&lineHeight=6&lineCount=2&theme=2077&line1=Next.js,Next.js,000000;planetscale,planetscale,000000;daisyui,daisyui,5A0EF8;&line2=node.js,node.js,0d5cee;tailwindcss,tailwindcss,aaef4b;)
