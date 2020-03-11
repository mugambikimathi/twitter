<template lang="pug">
  div()
    //- Search Bar
    v-text-field.form1(prepend-inner-icon="search" placeholder='Search Twitter', filled, rounded, dense)


    .trends.pa-5()
      .d-flex.justify-space-between()
        .title() Trends for you
        v-icon( color="primary") settings

    
      v-list.trendsBackground(two-line)
        v-list-item(v-for="(item,index) in trendList" :key="index" @click="")
          v-list-item-content()
            v-list-item-title()
              .d-flex.justify-space-between()
                | {{item.name}}
                v-icon(small color="black") expand_more
            v-list-item-subtitle.text--grey() {{item.tweets}} Tweets

      .caption.primary--text(v-if="trendList.length > 3") Show More


</template>

<script>
export default {
  data: () => ({
    trendList: [
      {
        name: "#CoronaVirusUpdate",
        tweets: 1456,
        link: null
      },
      {
        name: "#Joe Biden",
        tweets: 304,
        link: null
      },
      {
        name: "#Premier League",
        tweets: 52,
        link: null
      }
    ]
  })
};
</script>

<style>
.form1 {
  /* width: 325px; */
}
.trends {
  color: #000000;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
  height: 400px;
  border-radius: 15px;
}
.trendsBackground {
  background-color: #e2eaf8;
}
</style>
