<template>
    <div>
        <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>Username</p>
        <input type="text" id="username-input" v-model="username">
        <p>Password</p>
        <input type="password" id="password-input" v-model="password">
        <p>Bio</p>
        <textarea id="bio-input" v-model="bio"></textarea>
        <p>Birthday</p>
        <input type="text" id="birthday-input" v-model="birthdate">
        <h2 @click="signupUser" >Sign Up</h2>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "signup-form",
        data() {
            return {
                email: "",
                username: "",
                password: "",
                bio: "",
                birthdate: ""
            }
        },
        methods: {
            signupUser: function() {
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/users",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "r1zJurKuPghQvWMMdapdXMYen12iomad4raAC88YPaQBR"
                    },
                    data: {
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        bio: this.bio,
                        birthdate: this.birthdate
                    }
                }).then((response) => {
                    // WRITE LOGIC TO ENSURE TOKEN WAS SENT
                    cookies.set('session', response.data[0].loginToken)
                    this.$router.push("/feed")
                    // SEND TO HOME PAGE
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>