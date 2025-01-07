<script>
export default {
  name: "Computed",
  data() {
    return {
      firstName: "Hong",
      lastName: "Gildong",
      author: {
        name: "sucoding",
        books: ["html+css", "vue", "react"],
      },
      students: [
        { name: "홍길동", age: 20 },
        { name: "김철수", age: 21 },
        { name: "이영희", age: 22 },
      ],
    };
  },
  computed: {
    fullName() {
      console.log("fullName");
      return `${this.firstName} ${this.lastName}`;
    },
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "yes" : "no";
    },
    sortAgeStudents() {
      return this.students.sort((a, b) => a.age - b.age);
    },
  },
  methods: {
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    handleChange() {
      this.firstName = "Kim";
    },
  },
};
</script>
<template>
  <!-- 정의한 데이터를 기반한 가공이 필요할 때 사용 -->
  <h1>Computed</h1>
  <!-- methods랑 차이점 함수지만 호출을 하지 않고 변수처럼 사용함!! -->
  <!-- 한번 렌더링이 되면 다음에 이 값을 사용할 때 내부적으로 캐싱되어져 있는 값을 사용함 -->
  <div>{{ fullName }}</div>
  <button @click="handleChange">이름 변경</button>
  <div>{{ getFullName() }}</div>
  <hr />
  <h3>책을 갖고 있다</h3>
  <div>{{ author.books.length > 0 ? "yes" : "no" }}</div>
  <div>{{ publishedBooksMessage }}</div>
  <!-- 데이터 가공 -->
  <ul>
    <li v-for="student in sortAgeStudents" :key="student.name">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>
</template>
<style scoped></style>
