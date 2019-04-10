<template>
    <div class="partnership">
        <section id="partnership">
            <div class="container">
                <h3>We want to be your partner in crypto</h3>
                <p>We love nothing more than answering any question you have about this fascinating space.</p>

                <div class="row no-gutters justify-content-around text-center mt-lg-5">
                    <div class="col-md-7 col-lg-5 box d-lg-flex flex-lg-column justify-content-lg-around">

                        <h4>Our Suppot team is always available
                            to help and answer any questions</h4>
                        <p class="mb-4">If you an individual who is interested to get more information on our setup or the one who simply
                            need more guidance in the delegation process, we are here for you.
                            Email us at</p>

                        <a href="mailto:support@ztake.org"><i class="icon icon-message"></i> support@ztake.org</a>
                    </div>
                    <div class="mt-5 mt-lg-0 col-md-7 col-lg-5 box d-lg-flex flex-lg-column justify-content-lg-around">
                        <h4>Special offer</h4>
                        <p class="mb-4">If you are Institutional investors or big exchange considering staking digital asset with us,
                            please reach out for a special offer.</p>

                        <a href="mailto:whales@ztake.org"><i class="icon icon-message"></i> whales@ztake.org</a>
                    </div>
                </div>
            </div>
        </section>
        <Newsletter/>
    </div>
</template>

<script>
import Newsletter from '@/components/Newsletter.vue'
export default {
    components: {
        Newsletter
    },
    head() {
        return {
            title: 'Partnership - ZTAKE',
            meta: [
                { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Partnership - ZTAKE'},
            ]
        }
    }

}
</script>