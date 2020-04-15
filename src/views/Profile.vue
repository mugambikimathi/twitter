<template lang="pug">
  div()
    v-container()
      v-row()
        v-col(cols="12")
          v-text-field(v-model="username" label="Username" hint="Enter your user name" persistent-hint)
      v-row()
        v-col(cols="6")
          v-text-field(v-model="first_name" label="First Name" hint="Enter your first name" persistent-hint)
        v-col(cols="6")
          v-text-field(v-model="last_name" label="Last Name" hint="Enter your last name" persistent-hint)
      v-row()
        v-col(cols="12")
          v-text-field(v-model="password" label="Password" hint="Enter your new password" persistent-hint type="password")
      v-row()
        v-container()
          v-btn(color="primary" @click="onSubmit") Submit
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    username: null,
    first_name: null,
    last_name: null,
    password: null,
    user_id: 1
  }),

  mounted() {
    axios.get(`/api/user/${this.user_id}`).then(response => {
      console.log(response.data);
      this.username = response.data.username;
      this.first_name = response.data.first_name;
      this.last_name = response.data.last_name;
      this.password = response.data.password;
    });
  },

  methods: {
    onSubmit: function() {
      // data verification
      let postObj = {
        // ID: this.user_id,
        username: this.username,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name
      };
      axios.post(`/api/user`, postObj).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>

<style></style>
