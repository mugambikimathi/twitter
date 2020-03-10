<template lang="pug">
  v-list-item( 
    @mouseover="onMouseOver" 
    @mouseout="onMouseOut" 
    :to="link" 
    @click="$emit('onClicked')"
    )
    img.mr-3(:src="getImageIcon" width="45" height="45")
    v-list-item-content
      .title(:style="titleStyle") {{title}}
</template>

<script>
export default {
  props: {
    outIcon: String,
    inIcon: String,
    title: String,
    link: String,
    isSelected: Boolean
  },
  data: () => ({
    iconName: "home_black",
    titleStyle: { color: "#333333" }
  }),
  mounted() {
    this.iconName = this.outIcon;
    if (this.isSelected) {
      this.onMouseOver();
    }
  },
  computed: {
    getImageIcon: function() {
      var images = require.context("@/assets/", false, /\.svg$/);
      return images("./" + this.iconName + ".svg");
    }
  },

  methods: {
    onMouseOver: function() {
      this.iconName = this.inIcon;
      this.titleStyle.color = "#1DA1F2";
    },

    onMouseOut: function() {
      if (this.isSelected == false) {
        this.iconName = this.outIcon;
        this.titleStyle.color = "#333333";
      }
    }
  }
};
</script>

<style>
.twitterTitle {
  color: #333333;
}

.twitterTitle:hover {
  color: #1da1f2;
}
</style>
