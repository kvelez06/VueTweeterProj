<template>
  <div class="profile">
    <user-profile></user-profile>
  </div>
</template>

<script>
export default {};
import UserProfile from "../components/UserProfile.vue";
export default {
  name: "profiles-page",
  components: {
    UserProfile
  }
};
</script>

<style lang="scss" scoped></style>