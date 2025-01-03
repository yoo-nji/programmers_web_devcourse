<script setup>
import { styled } from "@vue-styled-components/core";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 9999px;
  background-color: #4c5a6d;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
</script>

<template>
  <StyledDiv>Hello World!</StyledDiv>
</template>
