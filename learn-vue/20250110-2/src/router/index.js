import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

//네비게이션 가드
// 라우팅 과정 중에 특정 지점에서 라우트 전환을 가로채는 기술
// => 가로채서 사용자 정의 기능을 추가할 떄 사용
// 페이지 전환 전 사용해야 되는 로직을 처리함

// to, from, next 파라미터를 가지는 함수를 등록(beforeEach)
// to: 이동할 URL의 라우팅 정보
// from: 현재 URL의 라우팅 정보
// next: 다음 단계로 진행하기 위해 호출하는 함수
// next()함수 호출 필수

//결론: 라우트가 전환되기 전 어떤 로직을 실행하고 싶다면?
// 가장 먼저 실행 
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  console.log('to:', to);
  console.log('from:', from);
  next();
});

//그 다음 실행 
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  console.log('to:', to);
  console.log('from:', from);
  next();
});

//라우트 전환 완료 후 실행
router.afterEach((to, from, failure) => {
  console.log('afterEach');
  console.log('to:', to);
  console.log('from:', from);
  console.log('failure:', failure); //undefined 성공, 실패라면 에러에 대한 정보를 담고 있는 객체 출력
});


export default router;
