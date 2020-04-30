<template lang="pug">
  div(v-if="$store.state.currentUser")
    v-container()
      v-row()
        v-col(cols="12")
          v-text-field(v-model="username" label="Username" hint="Enter your user name" persistent-hint)
      v-row()
        v-col(cols="6")
          v-text-field(v-model="first_name" label="First Name" hint="Enter your first name" persistent-hint)
        v-col(cols="6")
          v-text-field(v-model="last_name" label="Last Name" hint="Enter your last name" persistent-hint)
      //- v-row()
      //-   v-col(cols="12")
      //-     v-text-field(v-model="password" label="Password" hint="Enter your new password" persistent-hint type="password")
      v-row()
        v-container()
          button.SignInButton(type="submit" @click="onSubmit") Submit
</template>

<script>
import axios from "axios";
export default {
  data: () => ({}),

  computed: {
    username: {
      get: function() {
        return this.$store.state.currentUser.username;
      },
      set: value => this.$store.commit("setUsername", value)
    },
    password: {
      get: function() {
        return "";
      },
      set: value => this.$store.commit("setPassword", value)
    },
    first_name: {
      get: function() {
        return this.$store.state.currentUser.first_name;
      },
      set: value => this.$store.commit("setFirstName", value)
    },
    last_name: {
      get: function() {
        return this.$store.state.currentUser.last_name;
      },
      set: value => this.$store.commit("setLastName", value)
    }
  },

  mounted() {},

  methods: {
    onSubmit: function() {
      // data verification
      let postObj = {
        ID: this.$store.state.currentUser.ID,
        username: this.username,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name
      };
      axios.post(`/api/user`, postObj).then(response => {
        console.log(response.data);
        // nullify the previous values
        this.username = null;
        this.first_name = null;
        this.last_name = null;
        this.password = null;
      });
    }
  }
};
</script>

<style></style>
