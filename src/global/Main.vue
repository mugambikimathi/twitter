<template lang="pug">
  .mainBody(v-if="this.$store.state.currentUser")
    navigation-component()
    v-content
      v-container(fluid)
        v-row()
          .col-md-8.col-xs-12()
            body-component(@oclickeme="drawer = !drawer")
          .col-md-4.d-none.d-sm-none.d-md-flex()
            trends-component()


</template>

<script>
import NavigationComponent from "@/components/navigation/NavigationComponent";
import BodyComponent from "@/components/body/BodyComponent.vue";
import TrendsComponent from "@/components/trends/TrendsComponent.vue";
export default {
  components: {
    NavigationComponent,
    BodyComponent,
    TrendsComponent
  },

  data: () => ({}),

  mounted() {
    if (this.$store.state.currentUser == null) {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style lang="stylus">
.mainBody {
  max-width 1600px;
  margin (0 auto);
  display: flex;

}
</style>
