<template>
  <b-container fluid>
      <br>
    <b-row>
      <h5 class="">{{ comment.name }}</h5>
    </b-row>
    <b-row>
      <b-card class="rounded w-100">
        <b-card-body>
          <p>{{ comment.comment }}</p>
          <b-row>
            <b-input placeholder="Reply"></b-input>
            <vs-button success>Reply</vs-button>
          </b-row>
        </b-card-body>
      </b-card>
      <br />
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    comment: Object,
  },
};
</script>

<style></style>
