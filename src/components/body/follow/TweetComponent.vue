<template lang="pug">
.d-flex(v-if="tweet.posted_by")
  div.pictureicon(v-if="pictureIcon" :style="{'background-image':'url(' + tweet.avatarImage+ ')'}")
  .bodyTweet.mx-3()
    //- Header
    .d-flex.justify-space-between()
      div.d-flex.align-baseline()
        .title() {{tweet.posted_by.username}}
        div.mx-2()
          v-icon(color="primary") check_circle
        timeago.sub-title.grey--text(:datetime="tweet.UpdatedAt")
      v-menu.raiseUp(offset-y)
          template(v-slot:activator="{ on }")
            v-icon(v-on="on") expand_more
          .solidWhite()
            v-list()
              v-list-item-group()
                v-list-item(@click="onAction('delete')")
                  v-list-item-title() Delete {{tweet.ID}}
                v-list-item(@click="onAction('pin_profile')")
                  v-list-item-title() Pin to your Profile
                v-list-item(@click="onAction('embed_tweet')")
                  v-list-item-title() Embed Tweet

    //- Body
    div.my-2()
      div() {{tweet.message}}
      div.tweetImage(v-if="tweet.image"   :style="{'background-image':'url(/media/' + tweet.image+ ')'}")
      
    //- Footer
    .d-flex.justify-space-between()
      .d-flex()
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
          v-list(flat, color="white")
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
  data: () => ({
    pictureIcon: {}
  }),

  mounted() {
    this.pictureIcon["background-image"] =
      "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg')";
  },
  methods: {
    onAction: function(value) {
      switch (value) {
        case "delete":
          confirm("Are you sure you want to delete this post?") &&
            this.$store.dispatch("deletePost", this.tweet.ID);
          break;
        case "pin_profile":
          console.log("pin profile");
          break;
        case "embed_tweet":
          console.log("embed tweet");
          break;
      }
    }
  }
};
</script>

<style>
.bodyTweet {
  width: 100%;
  padding: 20px 20px;
  border-top: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  background-color: #f6f6f6;
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

.raiseUp {
  z-index: 999;
  background-color: #ffffff;
}

.solidWhite {
  background-color: #ffffff;
}
</style>
