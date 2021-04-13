<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h1>Comming Groupbuys</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4" v-cloak v-for="product in products" :key="product.id">
        <Product :product="product"></Product>
        <br />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1>In Production</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4" v-cloak v-for="(product, index) in products" :key="index">
        <Product v-if="index < 3" :product="product"></Product>
        <br />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1>End</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4" v-cloak v-for="(product,index) in products" :key="product.id">
        <Product  v-if="index < 2" :product="product"></Product>
        <br />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Product from "../components/Product";
import productsFile from "../assets/groupbuys.json";
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
