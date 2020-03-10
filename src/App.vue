<template lang="pug">
v-app#inspire
  navigation-component(:drawer="drawer")
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
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
