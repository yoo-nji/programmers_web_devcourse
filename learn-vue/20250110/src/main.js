import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //내보낸 라우터 추가

const app = createApp(App);
app.use(router); //라우터 추가
app.mount('#app');
