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
                v-btn(rounded='', color='primary' outlined x-small @click="onSubscribe(followers.ID)") un-follow
</template>

<script>
import axios from "axios";
export default {
  data: () => ({}),
  mounted() {
    this.$store.dispatch("allCurrentUsersSubscriptions");
  },
  methods: {
    onSubscribe: function(theID) {
      console.log(theID);
      let subscriptionObj = {
        user_id: 1,
        subscriber_user_id: theID
      };
      axios.post(`/api/subscription`, subscriptionObj).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>

<style></style>
