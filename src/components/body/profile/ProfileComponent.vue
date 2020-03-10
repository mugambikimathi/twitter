<template lang="pug">
  .d-flex.flex-column()
    .d-flex()
      img.mr-3(src="@/assets/person_black.svg" width="80" height="80")
      v-text-field(v-model='post', hint="Whats Happening?", label="Whats Happening" persistent-hint )
    .d-flex()
       v-container()
        v-row()
          .col-md-9()
            .d-flex.align-center.fill-height()
              .mx-3()
                img(src="@/assets/post_image.svg" width="35" height="35")
              .mx-3()
                img(src="@/assets/post_gif.svg" width="35" height="35")
              .mx-3()
                img(src="@/assets/post_chart.svg" width="35" height="35")
              .mx-3()
                img(src="@/assets/post_smiley.svg" width="35" height="35")
    
          .col-md-3()
            .tweetButton(@click="postMessage") Tweet

</template>

<script>
export default {
  data: () => ({
    post: null
  }),
  methods: {
    postMessage: function() {
      console.log(`the meaage is ${this.post}`);
      // put in the functionality to post a message
      this.post = null;
    }
  }
};
</script>

<style>
.tweetButton {
  color: white;
  background-color: #1da1f2;
  padding: 10px 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 45px;
  max-width: 130px;
}
</style>
