<template lang="pug">
    .wtfollow.pa-5()
      .d-flex.justify-space-between()
        .title() Following
      v-list.tfollowBackground(two-line)
        v-list-item(v-for="(followers,index) in $store.getters['getFollowers']" :key="index" @click="")
          v-list-item-content()
            v-list-item-title()
              .d-flex.justify-space-between()
                v-avatar.img
                      img(src='https://cdn.vuetifyjs.com/images/john.jpg', alt='hussein')
                div.mx-2()
                  | {{followers.first_name}} {{followers.last_name}}
                  v-list-item-subtitle.text--grey( v-text="followers.username + ' #'+ followers.ID") 
                v-spacer()
                v-btn(rounded='', color='primary' outlined x-small @click="unFollow(followers.ID)") un-follow
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    this.$store.dispatch("allCurrentUsersSubscriptions");
  },
  methods: {
    unFollow: function(theID) {
      this.$store.dispatch("unFollow", theID);
    }
  }
};
</script>

<style></style>
