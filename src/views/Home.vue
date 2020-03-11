<template lang="pug">
  .tweetPanel()
    tweet-component(v-for="(tweet,index) in tweetList" :key="index" :tweet="tweet")

</template>

<script>
import TweetComponent from "@/components/body/follow/TweetComponent";
export default {
  name: "Home",
  components: {
    TweetComponent
  },
  data: () => ({
    tweetList: [
      {
        title: "BBC Africa",
        date: new Date(),
        message:
          "the quick brown fox jumpes over the lazy dog. the quick brown fox jumpes over the lazy dog. the quick brown fox jumpes over the lazy dog.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
        avatarImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
        comment: 2,
        retweet: 4,
        like: 88
      }
    ]
  })
};
</script>
<style scoped>
.tweetPanel {
  width: 100%;
  background-color: "##e8e8e8";
  border-radius: 10px;
}
</style>
