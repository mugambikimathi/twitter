import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  strict: true,
  state: {
    currentUser: null,
    errorText: "",
    allUsers: [
      {
        name: "#Migunamiguna",
        username: "@migunamiguna",
        link: null
      },
      {
        name: "Hussein Kadweka",
        username: "@HKadweka",
        link: null
      }
    ],
    subscribedList: [],
    posts: []
  },
  getters: {
    getFollowers: state => {
      let myList = [];
      for (var i = 0; i < state.allUsers.length; i++) {
        for (var j = 0; j < state.subscribedList.length; j++) {
          if (
            state.allUsers[i].ID == state.subscribedList[j].subscriber_user_id
          ) {
            myList.push(state.allUsers[i]);
          }
        }
      }

      return myList;
    },

    suggestedFollowers: state => {
      let mylist = state.allUsers.filter(
        user => user.ID != state.currentUser.ID
      );
      let newList = [];
      for (var i = 0; i < mylist.length; i++) {
        // index = -1 if not found and >-1 if item is found
        let index = state.subscribedList.findIndex(
          item =>
            item.user_id == state.currentUser.ID &&
            item.subscriber_user_id == mylist[i].ID
        );
        if (index == -1) {
          newList.push(mylist[i]);
        }
      }

      return newList;
    }
  },

  mutations: {
    allUsersCommit(state, payload) {
      state.allUsers = payload;
    },

    afterSubscription() {},

    setSubscriptionList(state, payload) {
      state.subscribedList = payload;
    },

    loadUsersPosts(state, payload) {
      console.log("loaded users posts");
      state.posts = payload;
    },

    deletePost(state, payload) {
      let theIndex = state.posts.findIndex(item => item.ID == payload.ID);
      state.posts.splice(theIndex, 1);
    },

    subscribeTo(state, payload) {
      state.subscribedList.push(payload);
    },

    unFollow(state, payload) {
      let index = state.subscribedList.findIndex(
        item => item.subscriber_user_id == payload.subscriber_user_id
      );
      state.subscribedList.splice(index, 1);
    },

    login(state, payload) {
      state.errorText = "";
      state.currentUser = payload;
    },

    signup(state, payload) {
      state.errorText = "";
      state.currentUser = payload;
    },

    onError(state, payload) {
      state.errorText = payload;
    },
    resetError(state) {
      state.errorText = "";
    },

    signOut(state) {
      state.currentUser = null;
      state.errorText = "";
    },
    setUsername(state, payload) {
      state.currentUser.useraname = payload;
    },

    setPassword(state, payload) {
      state.currentUser.password = payload;
    },

    setFirstName(state, payload) {
      state.currentUser.first_name = payload;
    },
    setLastName(state, payload) {
      state.currentUser.last_name = payload;
    }
  },

  actions: {
    async loadUsersPosts({ commit, state }) {
      await axios.get(`/api/post/${state.currentUser.ID}`).then(response => {
        commit("loadUsersPosts", response.data);
      });
    },

    async deletePost({ commit }, payload) {
      await axios.delete(`/api/post/${payload}`).then(response => {
        commit("deletePost", response.data);
      });
    },

    // get all users from the system
    async allUsersFromServer({ commit }) {
      await axios.get(`/api/user`).then(response => {
        commit("allUsersCommit", response.data);
      });
    },

    // subscibing to a user
    async subscibeTo({ commit, state }, subcribeToID) {
      console.log(subcribeToID);
      let subObj = {
        user_id: state.currentUser.ID,
        subscriber_user_id: subcribeToID
      };
      await axios.post(`/api/subscription`, subObj).then(response => {
        console.log(response.data);
        commit("subscribeTo", response.data);
      });
      commit("afterSubscription");
    },

    // Get all subscriptions from the current users
    async allCurrentUsersSubscriptions({ commit, state }) {
      console.log(state.currentUser.ID);
      await axios
        .get(`/api/subscription/${state.currentUser.ID}`)
        .then(response => {
          commit("setSubscriptionList", response.data);
        });
    },

    async unFollow({ commit, state }, unSubcribedID) {
      await axios
        .post("/api/subscription/delete", {
          user_id: parseInt(state.currentUser.ID),
          subscriber_user_id: parseInt(unSubcribedID)
        })
        .then(response => {
          commit("unFollow", response.data);
        });
    },

    async login({ commit }, userObject) {
      await axios
        .post("/api/login", userObject)
        .then(response => {
          commit("login", response.data);
        })
        .catch(error => {
          console.log(error);
          commit("onError", "Wrong Username or Password");
        });
    },

    async signup({ commit }, signUpObject) {
      await axios
        .post("/api/login/signup", signUpObject)
        .then(response => {
          commit("signup", response.data);
        })
        .catch(error => {
          console.log(error);
          commit("onError", "Error registering user");
        });
    }
  },
  modules: {}
});
