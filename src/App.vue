<template lang="pug">
v-app#inspire
  v-navigation-drawer(v-model='drawer' app='')
    v-list(dense='')
      v-list-item(link='')
        v-list-item-action
          v-icon mdi-home
        v-list-item-content
          v-list-item-title Home
      v-list-item(link='')
        v-list-item-action
          v-icon mdi-contact-mail
        v-list-item-content
          v-list-item-title Contact
  v-app-bar(app='' color='indigo' dark='')
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
      v-toolbar-title Application
  v-content
    v-container.fill-height(fluid='')
      v-row(align='center' justify='center')
        v-col.text-center
          v-tooltip(left='')
            template(v-slot:activator='{ on }')
              v-btn(:href='source' icon='' large='' target='_blank' v-on='on')
                v-icon(large='') mdi-code-tags
            span Source
          v-tooltip(right='')
            template(v-slot:activator='{ on }')
              v-btn(icon='' large='' href='https://codepen.io/johnjleider/pen/zgxeLQ' target='_blank' v-on='on')
                v-icon(large='') mdi-codepen
            span Codepen
  v-footer(color='indigo' app='')
    span.white--text &copy; 2019

</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
