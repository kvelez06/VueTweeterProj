    <template>
  <div class="user-tweets">
    <p>What's on your mind?</p>
    <input type="text" id="tweet-post" v-model="tweetContent" />
    <button id="tweet-post-button" @click="tweetPost">post</button>
    <div></div>
    <router-link to="/user">Home</router-link>
    <br>
    <router-link to="/profile">Profile</router-link>
    <tweet-delete :tweetId="tweetOject.tweetId"></tweet-delete>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import TweetDelete from "./TweetDelete.vue";
export default {
  name: "user-tweets",
  components: {
    TweetDelete,
  },
  data() {
    return {
      tweetContent: "",
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {
    tweetUser: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "r1zJurKuPghQvWMMdapdXMYen12iomad4raAC88YPaQBR"
          },
          data: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.submit = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    tweetPost: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
          },
          params: {
            loginToken: cookies.get("loginToken")
          }
        })
        .then(response => {
          console.log(response);
          this.submit = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped></style>