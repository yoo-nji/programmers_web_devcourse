<script>
export default {
  name: 'App',
  data() {
    return {
      imageUrl: "https://pixabay.com/ko/photos/%EC%B9%B8%EB%8D%B8%EB%9D%BC-%EB%B0%94%EB%8B%A4-%EC%B2%9C%EA%B5%AD-%ED%95%B4%EB%B3%80-%EB%AC%BC-6826697/",
      imageSrc: "https://cdn.pixabay.com/photo/2021/11/26/20/45/lantern-6826697_1280.jpg",
      class: "image",
      styledObject: {
        color: "red",
      textDecoration: "underline",
    },
  }
}
}
</script>
<template>
  <div>
    <a :href="imageUrl"> <img :src="imageSrc" :class alt="altText" /></a>
  </div>
  <!-- ✅ 스타일 속성도 v-bind로 가능 -->
  <h1 :style="styledObject">스타일 속성</h1>
</template>

<style>
.image{
  width: 100%;
}
</style>
