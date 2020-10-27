<template>
  <div>
    <h2 id="name-user">Hello, {{ user.userId }}.</h2>
    <h3>
    <h3 v-for="user in users" :key="user">
      {{ user.email }}
      {{ user.birthdate }}
      {{ user.bio }}
    </h3>
  </div>
</template>
<script>
// import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "user-profile",
  data() {
    return {
      email: "",
      birthdate: "",
      bio: ""
      users: []
    };
  },
  methods: {
    userProfile: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "r1zJurKuPghQvWMMdapdXMYen12iomad4raAC88YPaQBR"
          },
          data: {
            userId: this.userId
          }
        })
        .then(response => {
          this.loginStatus = "success";
          console.log(response);
          document.getElementById("name-user").innerHTML = "userId";
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "fail";
        });
    }
  }
};
  };
</script>

<style lang="scss" scoped></style>