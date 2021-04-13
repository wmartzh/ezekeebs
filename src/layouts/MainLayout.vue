<template>
  <div>
    <MainNav></MainNav>
    <b-container fluid>
      <div class="container">
        <router-view></router-view>
      </div>
    </b-container>
    <MainFooter> </MainFooter>
  </div>
</template>

<script>
import MainNav from "../components/MainNav";
import MainFooter from "../components/MainFooter";

export default {
  components: {
    MainNav,
    MainFooter,
  },
};
</script>

<style>
.container {
  margin-top: 2%;
  padding: 2%;
}
</style>
