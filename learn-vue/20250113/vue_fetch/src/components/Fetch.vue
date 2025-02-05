<script setup>
import axios from "axios";

import { onBeforeMount, ref } from "vue";
//GET, PATCH, POST, DELETE
const posts = ref(null);

const isLoading = ref(true);

//!! GET
onBeforeMount(async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  const data = await response.json();
  posts.value = data;
  isLoading.value = false;
});

// !! POST
const handlePost = async () => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
      body: "New Post Body",
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    // 업데이트
    // 이렇게 반환값을 업데이트 해 주면 get 요청을 다시 보내지 않아도 됨
    posts.value.push(data);
    console.log("Post Created");
  }
};

//!! PUT - 리소스를 전체 업데이트
//!! PATCH - 리소스의 일부 업데이트
// 실무에선 이 두 개를 구분하지 않는 경우도 있음
const handlePut = async () => {
  const response = await fetch("http://localhost:3000/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post - PUT",
      body: "New Post Body",
    }),
  });

  if (response.ok) {
    const data = await response.json();
    posts.value = posts.value.map((post) =>
      post.id === data.id ? { ...data } : post
    );
    console.log(data);
  }
};

//!! PATCH - 리소스의 일부 업데이트
const handlePATCH = async () => {
  const response = await fetch("http://localhost:3000/posts/4", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post - handlePATCH",
      body: "New Post Body",
    }),
  });

  if (response.ok) {
    const data = await response.json();
    posts.value = posts.value.map((post) =>
      post.id === data.id ? { ...data } : post
    );
    console.log(data);
  }
};

// !! DELETE
const handleDelete = async (id) => {
  const response = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });

  if (response.ok) {
    posts.value = posts.value.filter((post) => post.id !== id);
  }
};
</script>
<template>
  <h3>Fetch Basic</h3>
  <button @click="handlePost">Post</button>
  <button @click="handlePut">Put</button>
  <button @click="handlePATCH">Patch</button>
  <button @click="handleDelete(1)">Del</button>
  <pre v-if="!isLoading">{{ posts }}</pre>
  <p v-else>Loading...</p>
</template>
<style scoped></style>
