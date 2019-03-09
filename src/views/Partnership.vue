<template>
    <div class="partnership">
        <section id="partnership">
            <div class="container">
                <h3>We want to be your partner in crypto</h3>
                <p>We love nothing more than answering any question you have about this fascinating space.</p>

                <div class="row justify-content-around text-center">
                    <div class="col-lg-5 box d-lg-flex flex-lg-column justify-content-lg-around">

                        <h4>Our Suppot team is always available
                            to help and answer any questions</h4>
                        <p>If you an individual who is interested to get more information on our setup or the one who simply
                            need more guidance in delegation process, we are here for you.
                            Email us at</p>

                        <a href="mailto:support@ztake.org" class="pt-4"><i class="icon icon-message"></i> support@ztake.org</a>
                    </div>
                    <div class="col-lg-5 box d-lg-flex flex-lg-column justify-content-lg-around">
                        <h4>Special offer</h4>
                        <p>If you are Institutional investors or big exchange considering staking digital asset with us,
                            please reach out for a special offer.</p>

                        <a href="mailto:whales@ztake.org" class="pt-4"><i class="icon icon-message"></i> whales@ztake.org</a>
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
    }
}
</script>