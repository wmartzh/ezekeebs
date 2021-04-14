<template>
  <b-container fluid>
    <h1>All Products</h1>
    <b-row>
      <b-col
        lg="4"
        v-cloak
        v-for="(product, index) in products"
        :key="index"
      >
        <Product :product="product"></Product>
        <br>
      </b-col>
    
    </b-row>
  </b-container>
</template>

<script>
import Product from "../components/Product";
import productsFile from "../assets/all.json";

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
