<template>
    <div id="newsletter">
        <div class="container">
            <div class="form-row justify-content-center align-items-center">
                <div class="col-auto">
                    <h4>Sign up for our newsletter</h4>
                </div>
                <div class="col-4">
                    <label class="input-group mb-0">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="icon icon-message"></i>
                            </div>
                        </div>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Your email" required>
                    </label>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-primary btn-lg">Send email</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Newsletter"
}
</script>