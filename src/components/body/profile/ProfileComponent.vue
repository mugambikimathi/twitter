<template lang="pug">
  .d-flex.flex-column.tweetInput()
    .d-flex()
      img.mr-3(src="@/assets/person_black.svg" width="80" height="80")
      v-text-field(v-model='post', hint="Whats Happening?", label="Whats Happening" persistent-hint )
    .d-flex()
       v-container()
        v-row(v-if="uploadedFile")
          div.tweetImage(:style="{'background-image':'url(/media/' + uploadedFile+ ')'}")
        v-row()
          .col-md-9()
            .d-flex.align-center.fill-height()
              .mx-3()
                label(for="upload")
                  v-icon.hoverBtn(:size="30" color="primary") panorama
                  v-file-input(v-model="file" type="file" id="upload" style="display:none" @change="uploadFile()" )
      
              .mx-3()
                v-icon.hoverBtn(:size="30" color="primary") insert_chart
              .mx-3()
                v-icon.hoverBtn(:size="30" color="primary") mood
    
          .col-md-3()
            .d-flex.justify-end()
              .tweetButton(@click="postMessage") Tweet
      
        
            
       
          
        
          

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
          this.$store.dispatch("loadUsersPosts").then(() => {
            this.uploadedFile = null;
            this.file = null;
          });
        });
      }
    },

    uploadFile: function() {
      if (this.file == null) {
        return;
      }
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
.tweetInput {
  border-bottom: 2px solid #1da1f2;
  margin-bottom: 40px;
}

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

.tweetButton:hover {
  cursor: pointer;
}

.hoverBtn:hover {
  cursor: pointer;
}
.tweetImage {
  width: 100%;
  margin: 20px 0px 15px 0px;
  min-height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-position: center;
}
</style>
