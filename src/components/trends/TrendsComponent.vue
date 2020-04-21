<template lang="pug">
  div()
    //- Search Bar
    v-text-field.form1(prepend-inner-icon="search" placeholder='Search Twitter', filled, rounded, dense)
    .trends.pa-5()
      .d-flex.justify-space-between()
        .title() Trends for you
        v-icon( color="primary") settings
      v-list.trendsBackground(two-line)
        v-list-item(v-for="(item,index) in trendList" :key="id" @click="")

          v-list-item-content() {{index}}
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
        .title() Sugested Followers
      v-list.tfollowBackground(two-line)
        v-list-item(v-for="(user,index) in $store.state.allUsers" :key="index" @click="")
          v-list-item-content()
            v-list-item-title()
              .d-flex.justify-space-between()
                v-avatar.img
                      img(src='https://cdn.vuetifyjs.com/images/john.jpg', alt='hussein')
                div.mx-2()
                  | {{user.first_name}} {{user.last_name}}
                  v-list-item-subtitle.text--grey() {{user.username}}
                v-btn(rounded='', color='primary' outlined x-small @click="subscribeTo(user.ID)") follow
      .caption.primary--text() Show More
</template>
<script>
//
export default {
  mounted() {
    // get the list the user has subscribed to
    this.$store.dispatch("allUsersFromServer");
  },
  methods: {
    // subscribe to the user
    subscribeTo: function(subscribeToID) {
      this.$store.dispatch("subscibeTo", subscribeToID);
    }
  },
  data: () => ({
    trendList: []
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
