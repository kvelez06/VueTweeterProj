<template>
    <div>
        <router-link to="/login">Login</router-link>
        <br>
        <router-link to="/account">Account</router-link>
        <br>
        <router-link to="/maintweet">Tweet Page</router-link>
        <h1>Sign Up Page</h1>
        <signup-form></signup-form>
    </div>
</template>


<script>
import SignupForm from "../components/SignupForm.vue"

    export default {
        name: "signup-page",
        components: {
            SignupForm,
        },
    }
</script>


<style lang="scss" scoped>

</style>