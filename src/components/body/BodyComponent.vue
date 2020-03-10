<template lang="pug">
  div() 
    v-app-bar-nav-icon(@click="$emit('oclickeme')") 
    | Aplication
    profile-component.green()
    follow-component.purple()
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
