<template>
  <vs-navbar center-collapsed v-model="test">
    <template #left>
      <img src="/logo2.png" alt="" />
    </template>
    <vs-navbar-item to="/home" :active="currentPage == 'home'">
      <i class="bx bx-home-smile"></i> Home
    </vs-navbar-item>
    <vs-navbar-item
      id="groupbuys"
      to="/groupbuys"
      :active="currentPage == 'groupbuys'"
    >
      <i class="bx bxs-shopping-bags"></i> Group Buy
    </vs-navbar-item>
    <vs-navbar-group>
      <i class="bx bx-shopping-bag"></i>
      <span style="font-size:14px">Shop</span>
      <template #items>
        <vs-navbar-item to="/all" id="all" :active="currentPage == 'all'">
          All Products
        </vs-navbar-item>
        <vs-navbar-item to="/diy" id="diy" :active="currentPage == 'diy'">
          DIY Kits
        </vs-navbar-item>
        <vs-navbar-item to="/cases" id="cases" :active="currentPage == 'cases'">
          Cases
        </vs-navbar-item>
        <vs-navbar-item
          to="/switches"
          :active="currentPage == 'switches'"
          id="switches"
        >
          Switches
        </vs-navbar-item>
   
      </template>
    </vs-navbar-group>
    <vs-navbar-item id="aboutus" to="/about">
      <i class="bx bx-star"></i> About us
    </vs-navbar-item>
    <template #right>
      <vs-button flat>Login</vs-button>
      <vs-button>Get Started</vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {
  data() {
    return {
      test: null,
      active: this.$route.name,
    };
  },
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
