<template>
    <div>
        <h2>Account Setup</h2>
        <p>Edit Email</p>
        <input type="text" name="email-edit" v-model="email">
        <p>Edit Username</p>
        <input type="text" name="username-edit" v-model="username">
        <p>Edit Password</p>
        <input type="text" name="password-edit" v-model="password">
        <p>Edit Bio</p>
        <textarea name="bio-edit" id="" cols="30" rows="5"></textarea>
    </div>
</template>

<script>
    export default {
           name: "account-form",
        data() {
            return {
                email: "",
                username: "",
                password: "",
                bio: ""
            }
        }
    }
</script>

<style scoped>

</style>