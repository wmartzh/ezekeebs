<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h1>Comming Groupbuys</h1>
      </b-col>
    </b-row>
    <b-row>
      <Product :products="products"></Product>
    </b-row>
    <b-row>
      <b-col>
        <h1>In Production</h1>
      </b-col>
    </b-row>
    <b-row>
      <Product :products="products"></Product>
    </b-row>
    <b-row>
      <b-col>
        <h1>End</h1>
      </b-col>
    </b-row>
    <b-row>
      <Product :products="products"></Product>
    </b-row>
  </b-container>
</template>

<script>
import Product from "../components/Product";
export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          title: "EZ223",
          imgUrl:
            "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1XyPaUwHqK1RjSZFEq6AGMXXai%2F1-set-SA-Key-caps-PBT-Mechanical-Keyboard-Keycaps-For-Filco-Cherry-EVA-key-cap.jpg_480x480.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1XyPaUwHqK1RjSZFEq6AGMXXai%2F1-set-SA-Key-caps-PBT-Mechanical-Keyboard-Keycaps-For-Filco-Cherry-EVA-key-cap.jpg_480x480.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1XyPaUwHqK1RjSZFEq6AGMXXai%2F1-set-SA-Key-caps-PBT-Mechanical-Keyboard-Keycaps-For-Filco-Cherry-EVA-key-cap.jpg_480x480.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1XyPaUwHqK1RjSZFEq6AGMXXai%2F1-set-SA-Key-caps-PBT-Mechanical-Keyboard-Keycaps-For-Filco-Cherry-EVA-key-cap.jpg_480x480.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1XyPaUwHqK1RjSZFEq6AGMXXai%2F1-set-SA-Key-caps-PBT-Mechanical-Keyboard-Keycaps-For-Filco-Cherry-EVA-key-cap.jpg_480x480.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1XyPaUwHqK1RjSZFEq6AGMXXai%2F1-set-SA-Key-caps-PBT-Mechanical-Keyboard-Keycaps-For-Filco-Cherry-EVA-key-cap.jpg_480x480.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://i.pinimg.com/originals/6d/78/9b/6d789b3aa8d89293dcba2c3e40945f50.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://i.pinimg.com/originals/6d/78/9b/6d789b3aa8d89293dcba2c3e40945f50.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://i.pinimg.com/originals/6d/78/9b/6d789b3aa8d89293dcba2c3e40945f50.jpg",
          description: "Comming Soon",
          price: "$200",
        },
        {
          title: "EZ223",
          imgUrl:
            "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHLB1XyPaUwHqK1RjSZFEq6AGMXXai%2F1-set-SA-Key-caps-PBT-Mechanical-Keyboard-Keycaps-For-Filco-Cherry-EVA-key-cap.jpg_480x480.jpg",
          description: "Comming Soon",
          price: "$200",
        },
      ],
    };
  },
};
</script>

<style></style>
