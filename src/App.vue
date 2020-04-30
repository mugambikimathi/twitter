<template lang="pug">
  v-app#inspire()
    v-container(fill-height align-center justify-center )
      router-view()




</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({})
};
</script>
<style lang="stylus"></style>
