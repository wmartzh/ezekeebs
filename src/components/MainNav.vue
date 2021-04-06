<template>
  <vs-navbar center-collapsed v-model="active">
    <template #left>
      <img src="/logo2.png" alt="" />
    </template>
    <vs-navbar-item :active="active == 'guide'" id="guide">
      <i class="bx bx-home-smile"></i> Home
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'docs'" id="docs">
      <i class="bx bxs-shopping-bags"></i> Group Buy
    </vs-navbar-item>
    <vs-navbar-group>
      <i class="bx bx-shopping-bag"></i> Shop
      <template #items>
        <vs-navbar-item>
          All Products
        </vs-navbar-item>
        <vs-navbar-item>
          DIY Kits
        </vs-navbar-item>
        <vs-navbar-item>
          Cases
        </vs-navbar-item>
        <vs-navbar-item>
          Switches
        </vs-navbar-item>
        <vs-navbar-item>
          PCB
        </vs-navbar-item>
        <vs-navbar-item>
          Accesories
        </vs-navbar-item>
      </template>
    </vs-navbar-group>
    <vs-navbar-item :active="active == 'license'" id="license">
      <i class='bx bx-star' ></i> About us
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
      active: "primary",
    };
  },
};
</script>

<style></style>
