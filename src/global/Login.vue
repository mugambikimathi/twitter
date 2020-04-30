<template lang="pug">   
div()
    v-alert(v-if="$store.state.errorText.length > 0" type="error") {{$store.state.errorText}}
    v-layout(fill-height justify-center )
        v-card(width="500")
            v-card-title()
                v-layout(justify-center )
                    .flex-column()
                        v-layout(justify-center )
                            img(src="@/assets/twitter_icon.png" width="40" height="40")
                        .title() Login to twitter

            v-card-text
                v-text-field.my-2(v-model="login_username" label="Username" hint="Enter your username" persistent-hint)
                v-text-field.my-2(v-model="login_password" label="Password" hint="Enter your new password" persistent-hint type="password")

            v-card-actions
                button.SignInButton(type="submit" @click="onLogin") Login
            v-layout.mb-6(justify-center )
                .caption.primary--text() 
                    v-dialog(v-model="showDialog" width="500" )
                        template(v-slot:activator="{ on }")
                            a(v-on="on") Sign-up for Twitter
                        v-card()
                            .px-6.py-2(v-if="registerError")
                              v-alert( type="error") {{registerError}}
                            v-card-title()
                                v-layout(justify-center )
                                    .flex-column()
                                        v-layout(justify-center )
                                            img(src="@/assets/twitter_icon.png" width="20" height="20")
                                        .title() Create your account
                            v-card-text()
                                v-text-field.my-2(v-model="register_first_name" label="First Name" hint="Enter your First name" persistent-hint)
                                v-text-field.my-2(v-model="regsiter_last_name" label="Last Name" hint="Enter your Last name" persistent-hint)
                                v-text-field.my-2(v-model="register_username" label="Username" hint="Enter your username" persistent-hint)
                                v-text-field.my-2(v-model="register_password" label="Password" hint="Enter your new password" persistent-hint type="password")
                            v-card-actions()
                                .RegisterButton(style="width:100%"  @click="onSignUp") Register
                            div(style="height:20px")
</template>

<script>
export default {
  data: () => ({
    showDialog: false,
    registerError: null,
    login_username: null,
    login_password: null,
    register_username: null,
    register_password: null,
    register_first_name: null,
    regsiter_last_name: null
  }),

  methods: {
    onLogin: function() {
      console.log("clicked");
      if (this.login_username == null || this.login_password == null) {
        this.$store.commit("onError", "Missing Fields");
        return;
      }

      if (this.login_username.length == 0 || this.login_password.length == 0) {
        this.$store.commit("onError", "Missing Fields");
        return;
      }

      let userObject = {
        username: this.login_username,
        password: this.login_password
      };

      this.$store.dispatch("login", userObject).then(() => {
        this.login_username = null;
        this.login_password = null;
        this.$store.dispatch("loadUsersPosts").then(() => {
          this.$router.push({ name: "Home" });
        });
      });
    },

    onSignUp: function() {
      if (
        this.register_first_name == null ||
        this.regsiter_last_name == null ||
        this.register_username == null ||
        this.register_password == null
      ) {
        this.registerError = "Fields cannot be empty";
        return;
      }

      if (
        this.register_first_name.length == 0 ||
        this.regsiter_last_name.length == 0 ||
        this.register_username.length == 0 ||
        this.register_password.length == 0
      ) {
        this.registerError = "Fields cannot be empty";
        return;
      }

      let signUpObject = {
        first_name: this.register_first_name,
        last_name: this.regsiter_last_name,
        username: this.register_username,
        password: this.register_password
      };

      this.$store.dispatch("signup", signUpObject).then(() => {
        this.login_username = null;
        this.login_password = null;
        this.register_username = null;
        this.register_password = null;
        this.register_first_name = null;
        this.regsiter_last_name = null;
        this.$router.push({ name: "Home" });
      });

      this.showDialog = false;
    }
  }
};
</script>

<style>
.SignInButton {
  color: white;
  background-color: #1da1f2;
  padding: 7px 7px;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 45px;
  margin: 0px 10px;
  cursor: pointer;
  width: 100%;
}
.RegisterButton {
  color: white;
  background-color: #1da1f2;
  padding: 7px 7px;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 45px;

  cursor: pointer;
  width: 90%;
}
</style>
