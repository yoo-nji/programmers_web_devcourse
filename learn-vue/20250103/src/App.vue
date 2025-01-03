<script>
import First from "./components/First.vue";

export default {
  name: "App",
  data() {
    return {
      uid: "",
      upw: "",
      desc: "",
      chk: false,
      fruits: [],
      radio: "",
      selectedItem: "item 1",
    };
  },
  components: {
    First,
  },
};
</script>
<template>
  <form action="">
    <label for="uid">
      <span>아이디</span>
      <input v-model="uid" type="text" id="uid" />
    </label>
    <label for="upw">
      <span>비밀번호</span>
      <input v-model="upw" type="password" id="upw" />
    </label>
    <label for="desc">
      <span>설명</span>
      <textarea v-model="desc" id="desc"></textarea>
    </label>
    <label for="chk">
      <span>체크박스</span>
      <input v-model="chk" type="checkbox" id="chk" />
    </label>
    <!-- 체크 관리 -->
    <div>
      <label>
        <span>apple</span>
        <input v-model="fruits" type="checkbox" value="apple" />
      </label>
      <label>
        <span>banana</span>
        <input v-model="fruits" type="checkbox" value="banana" />
      </label>
      <label>
        <span>orange</span>
        <input v-model="fruits" type="checkbox" value="orange" />
      </label>
    </div>
    <!-- 라디오 버튼 -->
    <label>
      <input v-model="radio" type="radio" name="gender" value="male" />
      male</label
    >
    <label>
      <input v-model="radio" type="radio" name="gender" value="female" />
      female</label
    >
    <!-- 셀렉트 박스 -->
    <label>
      아이템
      <select v-model="selectedItem">
        <option value="item 1">item 1</option>
        <option value="item 2">item 2</option>
        <option value="item 3">item 3</option>
      </select>
    </label>
  </form>
  <First />
</template>
<style scoped>
label {
  display: block;
  margin: 0 10px;
}
</style>
