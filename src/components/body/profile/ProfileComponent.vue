<template lang="pug">
  .d-flex.flex-column()
    .d-flex()
      img.mr-3(src="@/assets/person_black.svg" width="80" height="80")
      v-text-field(v-model='post', hint="Whats Happening?", label="Whats Happening" persistent-hint )
    .d-flex()
       v-container()
        v-row()
          .col-md-9()
            .d-flex.align-center.fill-height()
              .mx-3()
                v-icon(:size="30" color="primary") panorama
                
              .mx-3()
                v-icon(:size="30" color="primary") camera
              .mx-3()
                v-icon(:size="30" color="primary") insert_chart
              .mx-3()
                v-icon(:size="30" color="primary") mood
    
          .col-md-3()
            .d-flex.justify-end()
              .tweetButton(@click="postMessage") Tweet

</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    post: null
  }),
  methods: {
    postMessage: function() {
  
      // put in the functionality to post a message
     
      if (this.post != null){
        let postData = {
	"posted_by_id": 1,
	"message":this.post
	
}
        axios.post("/api/post",postData).then((response)=>{
          console.log(response.data);
           this.post = null;
        })
      }
    }
  }
};
</script>

<style>
.tweetButton {
  color: white;
  background-color: #1da1f2;
  padding: 10px 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 45px;
  min-width: 150px;
}
</style>
