<template lang="pug">
  .navigationColumn()
    div()
      v-list()
        navigation-menu-item(v-for="(menuItem,index) in menuList" 
          :key="index" 
          :outIcon="menuItem.outIcon" 
          :inIcon="menuItem.inIcon" 
          :title="menuItem.title" 
          :link="menuItem.link" 
          :isSelected="selectedMenu == index"
          @onClicked="onSelectItem(index)"
          )
      
      .tweetButtonNav(@click="dialog=true") Tweet
    .subtitle-2.primary--text() {{this.$store.state.currentUser.first_name}} {{this.$store.state.currentUser.last_name}} 

</template>

<script>
import NavigationMenuItem from "@/components/navigation/NavigationMenuItem.vue";
export default {
  components: {
    NavigationMenuItem
  },
  props: [],

  methods: {
    onSelectItem: function(index) {
      this.selectedMenu = index;
      console.log(index);
    }
  },

  watch: {
    drawer: function(value) {
      this.theDrawer = value;
    }
  },

  data: () => ({
    theDrawer: true,
    dialog: false,
    selectedMenu: 2,
    menuList: [
      {
        outIcon: "twitter_logo",
        inIcon: "twitter_logo",
        title: "Home",
        link: "/main"
      },
      {
        outIcon: "home_black",
        inIcon: "home_blue",
        title: "Home",
        link: "/main"
      },
      {
        outIcon: "hash_black",
        inIcon: "hash_blue",
        title: "Explore",
        link: "/about"
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
        link: "/list"
      },
      {
        outIcon: "person_black",
        inIcon: "person_blue",
        title: "Profile",
        link: "/profile"
      }
    ]
  })
};
</script>

<style>
.navigationColumn {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tweetButtonNav {
  color: white;
  background-color: #1da1f2;
  padding: 10px 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 45px;
  margin: 20px 30px;
}
</style>
