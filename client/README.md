FE

- Next JS
- Tailwind
- axios

BE

- MongoDB
- Express

상태관리
-Context API

에러 사항

- Context API 로 진행할 경우, 많은 강의들에서 하나의 파일에 context를 진행하였다. 그러나 이번에 사용한 방법으로는 Actions, Context, Reducer 로 Context 진행 상태를 분류하여 이용하는 방법이 있다.
- Next.js 는 client-side를 렌더하기 전 server-side 렌더를 수행하는데, Next.js에서 제공하는 Server Side Rendering(SSR)에서는 window, document 같은 브라우저 전역 객체를 사용할 수 없다. 그래서 localstorage 에 로그인 정보를 기억하고자 할 경우 오류가 남. 그래서 LocalStorage.js를 클래스로 만들어두고 사용하였다.
