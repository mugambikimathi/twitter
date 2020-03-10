<template lang="pug">
  div() 
    v-app-bar-nav-icon(@click="$emit('oclickeme')") 
    | Home
    profile-component()
    router-view()
  
</template>

<script>
import ProfileComponent from "@/components/body/profile/ProfileComponent.vue";
import FollowComponent from "@/components/body/follow/FollowComponent.vue";
export default {
  components: {
    ProfileComponent,
    FollowComponent
  }
};
</script>

<style></style>
