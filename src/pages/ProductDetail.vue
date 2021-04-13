<template>
  <b-container fluid>
    <b-row>
      <b-col md="6">
        <h1>{{ product.title }}</h1>
        <img height="250" :src="product.imgUrl" />
      </b-col>
      <b-col md="6">
        <h2>${{ product.price }}</h2>
        <p>{{ product.description }}</p>
      <vs-button>Add to cart</vs-button>
      </b-col>
    </b-row>
    <b-row>
      <p>Comments:</p>
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <vs-button>Add Comment</vs-button>
    </b-row>
  </b-container>
</template>

<script>
import productsFile from "../assets/products.json";


export default {
  data() {
    return {
      product: productsFile.filter(
        (value) => value.id === this.$route.params.productId
      )[0],
    };
  },
};
</script>

<style></style>
