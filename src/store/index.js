import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  strict: true,
  state: {
    currentID: 1,
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
    subscribedList: []
  },
  getters: {
    getFollowers: state => {
      let myList = []
      for(var i=0; i<state.allUsers.length; i++){
          for(var j=0; j<state.subscribedList.length; j++){
            if(state.allUsers[i].ID == state.subscribedList[j].subscriber_user_id){
              myList.push(state.allUsers[i]);
            }
          }
      }



      return myList;
    }
  },

  mutations: {
    allUsersCommit(state, payload) {
      state.allUsers = payload
    },

    afterSubscription(){

    },

    setSubscriptionList(state,payload) {
      state.subscribedList = payload
    }
  },

  actions: {
    // get all users from the system
    allUsersFromServer ({ commit }) {
      axios.get(`/api/user`).then(response => {
        commit("allUsersCommit",response.data);
      });
    },

    // subscibing to a user
    subscibeTo({commit,state}, subcribeToID){
      console.log(subcribeToID);
      let subObj = {
        user_id: state.currentID,
        subscriber_user_id: subcribeToID
      }
      axios.post(`/api/subscription`,subObj).then(response => {
        console.log(response.data)
        // commit("allUsersCommit",response.data);
      });
      commit("afterSubscription")
     
    },

    // Get all subscriptions from the current users
    allCurrentUsersSubscriptions({commit,state}){
      console.log(state.currentID);
      axios.get(`/api/subscription/${state.currentID}`).then( response => {
        commit("setSubscriptionList",response.data)
      }
       
      )
    }
  },
  modules: {}
});
