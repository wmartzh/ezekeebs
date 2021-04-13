<template>
  <div class="grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <h1 style="font-size:56px">Welcome_ to EZEKeebs</h1>
        <h2>Start building</h2>
      </vs-col>
    </vs-row>
    <br />
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <carousel :autoplay="true" :perPage="1">
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
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <h2>Categories</h2>
        <vs-card-group>
          <vs-card type="3" @click="goTo('/groupbuys')">
            <template #title>
              <h3>Group Buys</h3>
            </template>
            <template #img>
              <img
                height="250px"
                width="250px"
                src="https://i.pinimg.com/originals/63/ad/49/63ad4929de191b976b81fc962ca6720b.jpg"
                alt="groupbuy"
              />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>

          <vs-card type="3" @click="goTo('/diy')"
            >>
            <template #title>
              <h3>DIY Kits</h3>
            </template>
            <template #img>
              <img
                height="250px"
                width="250px"
                src="https://www.techspot.com/articles-info/1625/images/2018-05-14-image.png"
                alt="groupbuy"
              />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>

          <vs-card type="3" @click="goTo('/cases')"
            >>
            <template #title>
              <h3>Cases</h3>
            </template>
            <template #img>
              <img
                height="250px"
                width="250px"
                src="https://massdrop-s3.imgix.net/product-images/datamancer-60-hardwood-magnetic-keyboard-case/FP/5qfaC2PbSlOyEcdFhJid_v45o7kzTvOUpeUdqEah2_PC.png?bg=f0f0f0"
                alt="groupbuy"
              />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card type="3" @click="goTo('/switches')"
            >>
            <template #title>
              <h3>Switches</h3>
            </template>
            <template #img>
              <img
                height="250px"
                width="250px"
                src="https://cdn.shopify.com/s/files/1/0549/2681/products/mechanical-keyboard-switches-mx-switches-1.jpg?v=1568753618"
                alt="groupbuy"
              />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card type="3" @click="goTo('/keycaps')"
            >>
            <template #title>
              <h3>Keycaps</h3>
            </template>
            <template #img>
              <img
                height="250px"
                width="250px"
                src="https://i.pinimg.com/originals/5c/7c/9d/5c7c9d5e898757edb0c55ffb9e8fcbc8.png"
                alt="groupbuy"
              />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-card-group>
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
  methods: {
    goTo(page) {
      this.$router.push(page);
    },
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
