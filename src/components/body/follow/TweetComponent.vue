<template lang="pug">
.d-flex.mt-8()
  div.pictureicon(:style="{'background-image':'url(' + tweet.avatarImage+ ')'}")
  .bodyTweet.mx-3()
    //- Header
    .d-flex.justify-space-between()
      div.d-flex.align-baseline()
        .title() {{tweet.title}}
        div.mx-2()
          v-icon(color="primary") check_circle
        timeago.sub-title.grey--text(:datetime="tweet.date")
      v-icon() expand_more

    //- Body
    div.my-2()
      div() Here is some text.The quick brown fox jumpes over the lazy dog. Here is some text.The quick brown fox jumpes over the lazy dog. Here is some text.The quick brown fox jumpes over the lazy dog. Here is some text.The quick brown fox jumpes over the lazy dog. 
      div.tweetImage(:style="{'background-image':'url(' + tweet.image+ ')'}")
      
    //- Footer
    .d-flex.justify-space-around()
      .d-flex()
        v-icon() call
        div.mx-2() 88
      .d-flex()
        v-icon() call
        div.mx-2() 88
      .d-flex()
        v-icon() call
        div.mx-2() 88
      .d-flex()
        v-menu(offset-y)
          template(v-slot:activator="{ on }")
            v-icon(v-on="on") expand_more
          v-list()
           v-list-item()
            v-list-item-title() Send Via Direct Message
          v-list-item()
            v-list-item-title() Add tweet to bookmarks
          v-list-item()
            v-list-item-title() Copy Link to Tweet

</template>

<script>
export default {
  props: {
    tweet: Object
  },
  computed: {
    getMainImageStyle: function() {
      // this.tweetImage["background-image"] = "url()";
      let temp = this.tweetImage;

      temp["background-image"] = "'url(" + this.tweet.image + ")'";
      console.log(temp);
      return temp;
    }
  },
  data: () => ({}),

  mounted() {
    this.pictureIcon["background-image"] =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg')";
  }
};
</script>

<style>
.bodyTweet {
  width: 100%;
}

.pictureicon {
  width: 60px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.tweetImage {
  width: 100%;
  margin: 20px 0px 15px 0px;
  min-height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-position: center;
}
</style>
