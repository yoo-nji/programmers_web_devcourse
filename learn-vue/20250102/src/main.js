import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
//이렇게 끊어서 작성할 수도 있음

//✅ 객체 형식으로도 전달 가능함
// import { createApp, h } from 'vue';
// import App from './App.vue';
// const app = createApp({
//   render() {
//     return h('h1', 'Hello World!');
//   }
// });

// 💡 원래는 이렇게 해야 하지만 얘를 조금 더 간단하게 쓸 수 있는 방법
// => vue라는 확장자를 렌더링하는 방식으로 사용할 수 있음