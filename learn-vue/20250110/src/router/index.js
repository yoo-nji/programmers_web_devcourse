import { createRouter, createWebHistory } from 'vue-router';
import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';

// 라우터 인스턴스 생성
// 여기에는 두가지 속성이 들어감 history, routes
const router = createRouter({
  // !! history 모드
  // createWebHistory:  "/user", "/user/1", 등의 url을 사용할 수 있게 해줌
  history: createWebHistory(),
  // createWebHashHistory:  "/#/user", "/#/user/1", 등의 url을 사용할 수 있게 해줌
  // 오늘날 잘 사용하지 않음 ❌
  // history: createWebHashHistory(),
  //!! 라우트 정의
  // 여기에 path랑 name, component를 넣어줌
  // ⚠️ 문제점: 이렇게 main.js에 작성하면 라우터가 길어질 경우 코드가 너무 길어짐
  // ✅ 해결: 그래서 라우터를 따로 분리해서 작성해주는 것이 좋음
  // 파일경로 : src/router/index.js
  // router 폴더 생성
  routes: [{
    path: '/', //url 경로
    name: 'Home', //라우터 고유이름
    component: Home, //url로 접근했을 때 표시될 컴포넌트
  },
  {
    path: '/about', //url 경로
    name: 'About', //라우터 고유이름
    component: About, //url로 접근했을 때 표시될 컴포넌트
  },
  ],
});

export default router; //main.js에서 사용할 수 있게 내보내기