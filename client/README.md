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
  -Unhandled Runtime Error
  Error: Hydration failed because the initial UI does not match what was rendered on the server.
  See more info here: https://nextjs.org/docs/messages/react-hydration-error
- Next.js는 client-side를 렌더하기 전 server-side 렌더를 수행한다. Next.js에서 제공하는 Server Side Rendering(SSR)에서는 window, document 같은 브라우저 전역 객체를 사용할 수 없다. window 객체는 client-side에만 존재한다. 따라서, 페이지가 client에 로드되고 window 객체가 정의될 때까지 localStorage에 접근할 수 없다. 그래서 그 후에 진행시키도록 useEffect 또는 typeof window !== 'undefined' 와 같은 방법을 사용하여 SSR에서 렌더되지 않고 CSR 단계로 미루도록 하였다.
