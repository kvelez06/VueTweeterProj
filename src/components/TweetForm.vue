<template>
    <div>
        <h4>{{ tweetStatus }}</h4>
        <textarea class="standard-input" v-model="tweetContent"></textarea>
        <h2 class="hover-button" @click="postTweet()">Post</h2>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "tweet-form",
        data() {
            return {
                tweetContent: "",
                tweetStatus: "Tweet!!"
           }
        },
        methods: {
            postTweet: function() {
                this.tweetStatus = "Tweeting!"
                axios.request({
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "r1zJurKuPghQvWMMdapdXMYen12iomad4raAC88YPaQBR"
                    },
                    method: "POST",
                    data: {
                        loginToken: cookies.get('session'),
                        content: this.tweetContent
                    }

                }).then((response) => {
                    console.log(response)
                    this.tweetStatus = "Tweeted!"
                }).catch((error) => {
                    console.log(error)
                    this.tweetStatus = "Failed to Tweet!"
                })
            }
        },
    }
</script>

<style scoped>

</style>