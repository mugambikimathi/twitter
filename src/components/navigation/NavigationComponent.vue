<template lang="pug">
  v-navigation-drawer(v-model='drawer' app)
   
    v-list()
      navigation-menu-item(v-for="(menuItem,index) in menuList" :key="index" :outIcon="menuItem.outIcon" :inIcon="menuItem.inIcon" :title="menuItem.title")

</template>

<script>
import NavigationMenuItem from "@/components/navigation/NavigationMenuItem.vue";
export default {
  components: {
    NavigationMenuItem
  },
  props: ["drawer"],
  data: () => ({
    menuList: [
      {
        outIcon: "twitter_logo",
        inIcon: "twitter_logo",
        title: "Homdse",
        link: "#"
      },
      {
        outIcon: "home_black",
        inIcon: "home_blue",
        title: "Home",
        link: "#"
      },
      {
        outIcon: "hash_black",
        inIcon: "hash_blue",
        title: "Explore",
        link: "#"
      },
      {
        outIcon: "mail_black",
        inIcon: "mail_blue",
        title: "Message",
        link: "#"
      },
      {
        outIcon: "bookmark_black",
        inIcon: "bookmark_blue",
        title: "Bookmarks",
        link: "#"
      },
      {
        outIcon: "notes_black",
        inIcon: "notes_blue",
        title: "List",
        link: "#"
      },
      {
        outIcon: "person_black",
        inIcon: "person_blue",
        title: "Profile",
        link: "#"
      }
    ]
  })
};
</script>

<style></style>
