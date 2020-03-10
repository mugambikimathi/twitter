<template lang="pug">
  v-navigation-drawer(v-model='drawer' app)
    v-list(dense)
      v-list-item(link)
        v-list-item-action
          v-icon mdi-home
        v-list-item-content
          v-list-item-title Home
      v-list-item(link)
        v-list-item-action
          v-icon mdi-contact-mail
        v-list-item-content
          v-list-item-title Contact
</template>

<script>
export default {
  props: ["drawer"]
};
</script>

<style></style>
