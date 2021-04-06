<template>
  <div class="grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <h1 style="font-size:56px">Welcome_</h1>
        <h2>Start building</h2>
      </vs-col>
    </vs-row>
    <br>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <carousel perPage="1">
          <slide>
            <img
              class="carousel-img"
              src="https://thekeeblog.com/wp-content/uploads/2020/04/pedro-costa-aXY5doQNZTc-unsplash-scaled.jpg"
              alt="mechanic-keyboard"
            />
          </slide>
          <slide>
            <img
              class="carousel-img"
              src="https://i2.wp.com/tlrtechnology.com/wp-content/uploads/2019/06/gk61-blue.grey_.jpg?fit=1520%2C1140&ssl=1"
              alt="mechanic-keyboard"
            />
          </slide>
          <slide>
            <img
              class="carousel-img"
              src="https://www.extremetech.com/wp-content/uploads/2020/01/TAE07156_Edit.jpg"
              alt="mechanic-keyboard"
            />
          </slide>
          <slide>
            <img
              class="carousel-img"
              src="https://www.extremetech.com/wp-content/uploads/2017/06/orangefinal.jpg"
              alt="mechanic-keyboard"
            />
          </slide>
        </carousel>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  component: {
    Carousel,
    Slide,
  },
};
</script>

<style>
.carousel-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  /* position:absolute; */
}
.carousel-img {
  object-fit: cover;
  object-position: 70% -150;

  width: 100%;
  height: 500px;
  position: relative;
}
.VueCarousel-wrapper {
  border-radius: 10px;
}

.VueCarousel-dot-container {
  margin-top: 0 !important;
}
</style>
