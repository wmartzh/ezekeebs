<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h1>Keycaps</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4" v-cloak v-for="(product,index) in products" :key="product.id">
        <Product v-if="index <=10" :product="product"></Product>
        <br />
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import Product from "../components/Product";
import productsFile from "../assets/keycaps.json";
export default {
  components: {
    Product,
  },
  data() {
    return {
      products: productsFile,
    };
  },
  mounted() {
    // this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      console.log(productsFile);
    },
  },
};
</script>

<style></style>
