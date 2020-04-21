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
                v-dialog(v-model="dialog" width="500")
                  template(v-slot:activator="{ on }")
                    v-icon(:size="30" color="primary" v-on="on") panorama
                  v-card()

                    v-container()
                      .subtitle-1() File Upload
                      v-file-input(v-model="file" accept="image/*"  label="File input")
                      v-btn(color="primary" small @click="uploadFile") submit

              .mx-3()
                v-icon(:size="30" color="primary") camera

              .mx-3()
                v-icon(:size="30" color="primary") insert_chart
              .mx-3()
                v-icon(:size="30" color="primary") mood
    
          .col-md-3()
            .d-flex.justify-end()
              .tweetButton(@click="postMessage") Tweet
        .caption(v-if="uploadedFile") Uploaded File is: {{this.uploadedFile}}
            
        v-row()
          

</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    post: null,
    file: null,
    uploadedFile: null
  }),
  methods: {
    postMessage: function() {
      // put in the functionality to post a message

      if (this.post != null) {
        let postData = {
          posted_by_id: 1,
          message: this.post,
          image: this.uploadedFile
        };
        axios.post("/api/post", postData).then(response => {
          console.log(response.data);
          this.post = null;
          this.$store.dispatch("loadUsersPosts");
        });
      }
    },

    uploadFile: function() {
      // console.log(this.file);
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("name", this.fileName);
      formData.append("type", this.fileType);
      formData.append("description", this.description);

      axios
        .post("/api/post/uploadImage", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(payload => {
          console.log("success uploading");
          console.log(payload.data);
          this.uploadedFile = payload.data.name;
          this.file = null;
          this.dialog = false;
        })
        .catch(payload => {
          console.log(payload);
        });
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
