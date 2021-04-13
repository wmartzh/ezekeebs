<template>
  <vs-card class="m-card" v-if="product">
    <template #title>
      <h3>{{ product.title }}</h3>
    </template>
    <template #img>
      <img class="img-m" v-bind:src="product.imgUrl" alt="" />
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button success gradient>
        <b style="font-size:14px">
          <i class="bx bx-cart"></i>

          ${{ product.price }}
        </b>
      </vs-button>
      <vs-button dark icon>
        <i class="bx bx-info-circle"></i>
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style>
.img-m {
  width: 250px;
  height: 200px;
  object-fit: cover;
}
</style>
