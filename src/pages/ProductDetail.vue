<template>
  <b-container fluid>
    <b-row>
      <b-col md="6" class="p-4">
        <h1>{{ product.title }}</h1>
        <img height="250" :src="product.imgUrl" />
      </b-col>
      <b-col md="6" class="p-4 pt-5">
        <h2>${{ product.price }}</h2>
        <p>{{ product.description }}</p>
        <b-col md="4 p-0 m-0">
           <label for="input-small">Quantity:</label>
          <b-form-input
            size="sm"
            width="50px"
            label="Quantity"
            type="number"
            v-model="quantity"
          ></b-form-input>
        </b-col>
        <br>
        <b-button block>Add to cart</b-button>
        <b-button block variant="success">Buy it now</b-button>
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
    <b-row>
      <b-col>
        <Comment
          v-for="(comment, index) in comments"
          :key="index"
          :comment="comment"
        >
        </Comment>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import productsFile from "../assets/products.json";
import axios from "axios";
import Comment from "../components/Comment";
export default {
  data() {
    return {
      product: productsFile.filter(
        (value) => value.id === this.$route.params.productId
      )[0],
      comments: [],
      quantity: 1,
    };
  },
  components: {
    Comment,
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        let response = await axios.get(
          `https://6075074f066e7e0017e7a9d5.mockapi.io/api/v1/products/${this.$route.params.productId}/comments`
        );
        this.comments = response.data;
      } catch (exception) {
        console.log(
          "🚀 ~ file: ProductDetail.vue ~ line 49 ~ fetchComments ~ exception",
          exception
        );
      }
    },
  },
};
</script>

<style></style>
