<template>
  <b-container fluid>
    <MainNav></MainNav>
    <div class="container">
      <router-view></router-view>
    </div>
    <MainFooter>

    </MainFooter>
  </b-container>
</template>

<script>
import MainNav from "../components/MainNav";
import MainFooter from "../components/MainFooter";

export default {
  components: {
    MainNav,
    MainFooter
  },
};
</script>

<style>
.container {
  margin-top: 2%;
  padding: 2%;
}
</style>
