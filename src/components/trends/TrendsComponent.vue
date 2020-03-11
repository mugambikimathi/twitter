<template lang="pug">
  div()
    //- Search Bar
    v-text-field.form1(prepend-inner-icon="search" placeholder='Search Twitter', filled, rounded, dense)
    .trends.pa-5()
      .d-flex.justify-space-between()
        .title() Trends for you
        v-icon( color="primary") settings
      v-list.trendsBackground(two-line)
        v-list-item(v-for="(item,index) in trendList" :key="index" @click="")
          v-list-item-content()
            v-list-item-title()
              .d-flex.justify-space-between()
                | {{item.name}}
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
                    v-list-item-subtitle.text--grey() {{item.tweets}} Tweets
      .caption.primary--text(v-if="trendList.length > 3") Show More
    .wtfollow.pa-5()
      .d-flex.justify-space-between()
        .title() Who to follow
      v-list.tfollowBackground(two-line)
        v-list-item(v-for="(followers,index) in followList" :key="index" @click="")
          v-list-item-content()
            v-list-item-title()
              .d-flex.justify-space-between()
                v-avatar.img
                      img(src='https://cdn.vuetifyjs.com/images/john.jpg', alt='hussein')
                div.mx-2()
                  | {{followers.name}}
                  v-list-item-subtitle.text--grey() {{followers.username}}
                v-btn(rounded='', color='primary' outlined small) follow
      .caption.primary--text() Show More
</template>
<script>
export default {
  data: () => ({
    trendList: [
      {
        name: "#CoronaVirusUpdate",
        tweets: 1456,
        link: null
      },
      {
        name: "#Joe Biden",
        tweets: 304,
        link: null
      },
      {
        name: "#Premier League",
        tweets: 52,
        link: null
      }
    ],
    followList: [
      {
        name: "#Migunamiguna",
        username: "@migunamiguna",
        link: null
      },
      {
        name: "Hussein Kadweka",
        username: "@HKadweka",
        link: null
      }
    ]
  })
};
</script>
<style>
.trends {
  color: #000000;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
  height: 400px;
  border-radius: 15px;
}
.trendsBackground {
  background-color: #e2eaf8;
}
</style>
