<template lang="pug">
  .tweetPanel()
    tweet-component(v-for="(tweet,index) in $store.state.posts" :key="index" :tweet="tweet")

</template>

<script>
import TweetComponent from "@/components/body/follow/TweetComponent";

export default {
  name: "Home",
  components: {
    TweetComponent
  },
  mounted() {
    console.log(this.$store.state.posts);
  },
  data: () => ({})
};
</script>
<style scoped>
.tweetPanel {
  width: 100%;
  background-color: "##e8e8e8";
  border-radius: 10px;
}
</style>
