<template lang="pug">
  div()
    v-form
      v-text-field.form1(prepend-icon="search" placeholder='Search Twitter', filled, rounded, dense)

    v-card.background()
      v-card-text.card
        v-list-item-title.h1 Trends for you
      


</template>

<script>
export default {};
</script>

<style>
.form1 {
  /* width: 325px; */
}
.card {
  background-color: #e2eaf8;
  color: #000000;
  font-weight: bold;
  font-size: 15px;
}
</style>
