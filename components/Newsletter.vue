<template>
    <div id="newsletter">
        <div class="container">

            <form v-if="!successMessage" class="form-row justify-content-center align-items-center" v-on:submit.prevent="subscribe" autocomplete="off">
                <div class="col-12 col-lg-auto">
                    <h4>Sign up for our newsletter</h4>
                </div>
                <div class="col-12 col-sm-auto col-lg-4 col-xl-4">
                    <label class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="icon icon-message"></i>
                            </div>
                        </div>
                        <input type="email" class="form-control" id="inputEmail" name="EMAIL" placeholder="Your email" v-model="email" required>
                    </label>
                </div>
                <div class="col-12 col-sm-auto col-lg-3 col-xl-2">
                    <button type="submit" class="btn btn-primary btn-lg">Subscribe</button>
                </div>
            </form>

            <p v-if="errorMessage && !successMessage" v-html="errorMessage" class="message error"></p>
            <p v-if="successMessage" v-html="successMessage" class="message success"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Newsletter",
    data() {
        return {
            url: process.env.MAILCHIMP_NEWSLETTER_URL,
            email: '',
            successMessage: null,
            errorMessage: null
        }
    },
    methods: {
        subscribe() {
            this.$jsonp(this.url, { EMAIL: this.email, callbackQuery: 'c' }).then(res => {
                if (res.result === 'success')
                    this.successMessage = res.msg
                else
                    this.errorMessage = res.msg.match(/(^\d\s-\s)?(.+)/)[2]
            })
        }
    }
}
</script>