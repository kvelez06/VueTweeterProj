<template>
  <div>
    <h3 id="name-user">Hello, {{ user.userId }}. </h3>
    <h4>
    <h4 v-for="user in users" :key="user">
      {{ user.email }}
      {{ user.birthdate }}
      {{ user.bio }}
    </h4>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "user-profile",
  data() {
    return {
      email: "",
      birthdate: "",
      bio: "",
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

</script>


<style lang="scss" scoped></style>