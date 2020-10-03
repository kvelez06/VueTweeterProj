<template>
    <div>
        <h1>THIS IS THE LOGIN</h1>
        <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>Password</p>
        <input type="password" id="password-input" v-model="password">
        <h2 @click="loginUser">Login</h2>
        <h3>{{ loginStatus }}</h3>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        data() {
            return {
                email: "",
                password: "",
                loginStatus: "",
            }
        },
        methods: {
            loginUser: function() {
                this.loginStatus = "Loading"
                axios.request({
                    method: "POST",
                    url: "https://tweeterest.ml/api/login",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "r1zJurKuPghQvWMMdapdXMYen12iomad4raAC88YPaQBR"
                    },
                    data: {
                        email: this.email,
                        password: this.password
                    }
                }).then((response) => {
                    // Check if login token sent
                    console.log(response)
                    this.loginStatus = "Success"
                    cookies.set('session', response.data.loginToken)
                    // Send user to "home page"
                }).catch((error) => {
                    // Show user login failure
                    console.log(error)
                    this.loginStatus = "Error"
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>