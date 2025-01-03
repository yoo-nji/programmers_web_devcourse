<script>
export default {
  name: "Template",
  data() {
    return {
      categorys: [
        { name: "Fruits", items: ["Apple", "Banana", "Cherry"] },
        { name: "Vegetables", items: ["Carrot", "Tomato", "Lettuce"] },
      ],
      categories: [
        {
          id: 1,
          name: "전자제품",
          products: [
            {
              id: 1,
              name: "스마트폰",
              isAvailable: true,
              options: [
                { id: 1, name: "블랙", inStock: true },
                { id: 2, name: "화이트", inStock: false },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <h1>2. template 활용</h1>
  <!-- v-for 중첩: template를 사용 -->
  <!-- template 태그는 많이 사용해도 됨 그냥 껍데기같은 것 -->
  <h3>v-for 중첩1</h3>
  <ul>
    <li v-for="(category, index) in categorys" :key="index">
      <h3>{{ category.name }}</h3>
      <ul>
        <template v-for="(item, index) in category.items">
          <li v-if="item.includes('e')">
            {{ item }}
          </li>
        </template>
      </ul>
      <p>{{ category.items }}</p>
    </li>
  </ul>
  <hr />
  <h3>v-for 중첩2</h3>
  <template v-for="categorie in categories" :key="categorie.id">
    <h2>{{ categorie.name }}</h2>
    <template v-for="product in categorie.products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <template v-for="option in product.options" :key="option.id">
        <span v-if="option.inStock">
          {{ option.name }}
        </span>
      </template>
    </template>
  </template>
</template>

<style scoped></style>
