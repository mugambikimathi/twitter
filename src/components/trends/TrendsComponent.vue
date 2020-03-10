<template lang="pug">
  div()
      v-form
            v-text-field.form1(placeholder='Search Twitter', filled='' rounded='', dense='')
      v-card.background()
        v-card-text.card
                v-list-item-title.h1 Trends for you
        


</template>

<script>
export default {};
</script>

<style>
.form1{
  width: 325px;
}
.card{
  background-color:#E2EAF8;
  color: #000000;
  font-weight: bold;
  font-size: 15px;
}
</style>
