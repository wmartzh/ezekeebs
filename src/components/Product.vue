<template>
  <vs-card-group>
    <vs-card type="4" v-for="(product, index) in products" :key="index">
      <template #title>
        <h3>{{ product.title }}</h3>
      </template>
      <template #img>
        <img
          height="250px"
          width="250px"
          :src="product.imgUrl"
          alt="groupbuy"
        />
      </template>
      <template #text>
        <p>
          {{ product.description }}
        </p>
      </template>
      <template #interactions>
        <vs-button success icon>
          {{ product.price }}
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bxs-cart-add"></i>
        </vs-button>
      </template>
    </vs-card>
  </vs-card-group>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<style></style>
