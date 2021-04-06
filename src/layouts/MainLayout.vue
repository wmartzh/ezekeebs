<template>
  <div>
    <MainNav></MainNav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainNav from "../components/MainNav";

export default {
  components: {
    MainNav,
  },
};
</script>

<style>
.container {
  margin-top: 2%;
  padding: 2%;
}
</style>
