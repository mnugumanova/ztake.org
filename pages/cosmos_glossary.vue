<template>
    <div class="cosmos">
        <section id="glossary">
            <div class="container">
                <h3>Cosmos Glossary</h3>

                <div class="row">
                    <div class="col-lg-6">
                        <h4>Delegators</h4>
                        <p>are Atom holders who cannot, or do not want to run validator operations themselves. Through the
                            Cosmos UI, a user can delegate Atoms to a validator and obtain a part of its revenue in exchange.
                            Because they share revenue with their validators, delegators also share responsibility. Should a
                            validator misbehave, each of its delegators will be partially slashed in proportion to their stake.
                            This is why delegators should perform due diligence on validator candidates before delegating, as
                            well as spreading their stake over multiple validators. It will also help keep network
                            decentralized.</p>

                        <h4 class="pt-5">Inflation</h4>
                        <p>The annualized rate at which ATOM supply grows.</p>

                        <h4 class="pt-5">Initial commission rate</h4>
                        <p>The commission rate on revenue charged to any delegator by the validator (see below for more detail).</p>

                        <h4 class="pt-5">Slashing</h4>
                        <p> is a penalty for misbehaving. The severity of the punishment depends on the type of fault. There are
                            3 main faults that can result in slashing of funds for a validator and its delegators:</p>
                        <ul>
                            <li>Double signing: If someone reports on chain A that a validator signed two blocks at the same
                                height.
                            </li>
                            <li>Unavailability: If a validator signature has not been included in the last X blocks, the
                                validator will get slashed by a marginal amount proportional to X. If X is above a certain limit
                                Y, then the validator will get unbonded.
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Validators</h4>
                        <p>The Cosmos Hub is based on Tendermint, which relies on a set of validators to secure the network. The
                            role of validators is to run a full-node and participate in consensus by broadcasting votes which
                            contain cryptographic signatures signed by their private key. Validators commit new blocks in the
                            blockchain and receive revenue in exchange for their work. They must also participate in governance
                            by voting on proposals. Only the top 100 validators with highest stake are part of the Active
                            validator set.</p>

                        <h4 class="pt-5">Minimum self-bond amount</h4>
                        <p>Minimum amount of Atoms the validator candidate need to have bonded at all time. If the validator’s
                            self-bonded stake falls below this limit, their entire staking pool (i.e. all its delegators) will
                            unbond. This parameter exists as a safeguard for delegators. Indeed, when a validator misbehaves,
                            part of their total stake gets slashed. This included the validator’s self-delegateds stake as well
                            as their delegators’ stake. Thus, a validator with a high amount of self-delegated Atoms has more
                            skin-in-the-game than a validator with a low amount. The minimum self-bond amount parameter
                            guarantees to delegators that a validator will never fall below a certain amount of self-bonded
                            stake, thereby ensuring a minimum level of skin-in-the-game. This parameter can only be increased by
                            the validator operator.</p>

                        <h4 class="pt-5">Commission max change rate</h4>
                        <p>The maximum daily increase of the validator’s commission. This parameter cannot be changed by the
                            validator operator.</p>

                        <h4 class="pt-5">Maximum commission</h4>
                        <p>The maximum commission rate this validator candidate can charge. This parameter cannot be changed by
                            the validator operator.</p>
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
            title: 'Cosmos Glossary - ZTAKE',
            meta: [
                { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Cosmos Glossary - ZTAKE'},
            ]
        }
    }
}
</script>