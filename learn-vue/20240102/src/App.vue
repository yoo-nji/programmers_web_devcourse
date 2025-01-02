<script>
//옵션스API
export default {
  name: 'App', //컴포넌트 이름, 왜 적나? 디버깅을 쉽게 하기 위해서(권장)
  data () {
    return {
      message: 'Hello, world!',
      name: '철수',
      age: 20,
      likes: ['apple', 'banana', 'cherry'],
      user: {
        name: '영희',
        age: 25,
      },
      id: 'main',
      class: 'red-color',
      isActive: true,
    }; //데이터를 리턴하는 함수, 객체를 리턴해야함 이걸 템플릿에서 사용 가능함
  }, // 뷰에서 사용할 데이터를 정의하는 것, vue에서 사용하는 데이터는 무조건 data 속성으로 정의함
};
</script>
<template>
  <!-- vue 주요 문법 -->
  <!-- ✅ 1. 데이터 보간법, {{  }} (콧수염 문법, mustach syntax) -->
  <h1>{{ message }}</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <!-- React와 차이점 배열, 객체 데이터를 있는 그대로 보여줌 -->
  <h1>{{ likes[2] }}</h1>
  <h1>{{ user }}</h1>
  <!--❌ 표현식 내에서 간단한 자바스크립트 문법을 넣어줄 수도 있다, 하지만 권장되지 않음 -->
  <h1>{{ 10 + 30 }}</h1>
  <h1>{{ message.toUpperCase() }}</h1>
  <hr />
  <!--✅ 2. 디렉티브: 뷰에서만 사용할 수 있는 특별한 '속성', v-[] -->
  <h1 v-html="message"></h1>
  <h1 v-text="message"></h1>
  <h1 v-pre="message"></h1>
  <hr />
  <!-- v-bind -->
  <!-- 단축문법(축약속성)제공, v-bind 대신 ':' 콜론 이용, 넣어야 하는 속성과 이름이 같아도 축약 가능함 -->
  <main>
    <h1>Hello</h1>
    <h1 :class="isActive ? 'active' : 'inactive' ">동적 클래스</h1>
  </main>
</template>

<style>
.red-color {
  color: red;
}
.active {
  background-color: yellow;
}
.inactive {
  background-color: gray;
}
</style>
