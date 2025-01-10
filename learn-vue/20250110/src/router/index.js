import { createRouter, createWebHistory } from 'vue-router';
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
    // ✅ 정적 임포트 방식으로 라우트 컴포넌트 지정
    path: '/', //url 경로
    name: 'Home', //라우터 고유이름
    component: Home, //url로 접근했을 때 표시될 컴포넌트
  },
  // ✅ 동적 임포트
  {
    path: '/about', //url 경로
    name: 'About', //라우터 고유이름
    component: () => import('@/pages/About.vue'), //따로 임포트하지 않음
  },
  // ✅ 동적 경로 매칭
  {
    path: '/:user/:id', //url 경로
    name: 'User', //라우터 고유이름
    component: () => import('@/pages/User.vue'), //따로 임포트하지 않음
  },
  // ✅ 404 페이지
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
  },
  // 중첩라우트
  //중첩 경로 탐색 방식 
  // children: []
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/pages/Product.vue'),
    children: [{
      path: 'info',
      name: 'ProductInfo',
      component: () => import('@/pages/ProductInfo.vue'),
    },
    {
      path: ':item',
      name: 'ProductItem',
      component: () => import('@/pages/ProductItem.vue'),
    }]
  },
  //대시보드
  {
    path: '/dashboard',
    name: 'Dashboard',
    components: {
      header: () => import('@/components/DashboardHeader.vue'),
      default: () => import('@/pages/Dashboard.vue'),
      footer: () => import('@/components/DashboardFooter.vue'),
    }
  },
  // 리다이렉트
  {
    path: "/profile/:id", // 여기서 바뀐다면?
    redirect: (to) => {
      return { name: "ProfileId", params: { id: to.params.id } };
    }
  },
  {
    path: "/profiles/:id",
    name: "ProfileId",
    component: () => import("@/pages/Profile.vue"),
  }
  ],
});

export default router; //main.js에서 사용할 수 있게 내보내기