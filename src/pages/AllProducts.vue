<template>
  <b-container fluid>
    <h1>All Products</h1>
    <b-row>
      <b-col lg="4" v-cloak v-for="product in products" :key="product.id">
        <Product :product="product"></Product>
        <br />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Product from "../components/Product";
import productsFile from "../assets/products.json";
export default {
  components: {
    Product,
  },
  data() {
    return {
      products: productsFile,
    };
  },
};
</script>

<style></style>
