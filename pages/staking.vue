<template>
    <div class="staking">
        <section id="staking">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6 order-0 order-lg-2">
                        <h3>Staking</h3>

                        <p>Ztake.org provides a safe, secure and affordable delegation service for Atom holders to share
                            in the
                            benefits of Cosmos’s Proof of Stake protocol. By delegating your tokens holdings to us, you
                            have a
                            chance to earn interest on your tokens while keeping full control of your private keys and
                            avoiding
                            the complexity of running a validator node 24×7 in a safe and secure environment.</p>
                    </div>
                    <div class="col-lg-6 order-2 order-lg-0">
                        <img src="../assets/img/staking/staking.svg" class="img-fluid" alt="">
                    </div>
                </div>
                <staking-command/>
            </div>
        </section>
        <section id="how_work">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6">
                        <h3>How does it work?</h3>

                        <p>Very simple! Delegate the desired amount of your Atom tokens to our delegation address and we
                            will
                            send back your profits to the same account which you delegated your cosmos tokens from.</p>
                    </div>
                    <div class="col-lg-6">
                        <img src="../assets/img/staking/staking-howto.svg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section id="metrics">
            <div class="container">
                <h3>Network key metrics</h3>

                <div class="row no-gutters">
                    <div class="col-md-6 col-xl-3">
                        <div class="metric">
                            <div class="metric-content">
                                <div>5,000</div>
                                <p>ATOMS self bonded</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="metric">
                            <div class="metric-content">
                                <div>8<span class="percent">%</span></div>
                                <p>Validator Fee</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="metric">
                            <div class="metric-content">
                                <div><span class="tilde">~</span>7<span class="percent">%</span></div>
                                <p>Innitial rate of inflation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="metric">
                            <div class="metric-content">
                                <div>3 <span class="weeks">weeks</span></div>
                                <p>Unbonding period</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="how_to_stake">
            <div class="container">
                <h3>How to stake</h3>
                <p>
                    There are currently only one security-audited guide available: Official Delegators guide from Cosmos
                    team.
                </p>
                <p>
                    It contains all the necessary information for delegators to interact with the Cosmos Hub through the
                    Command-Line Interface (CLI).
                </p>
                <div class="row guides justify-content-md-center align-items-lg-center pt-5">
                    <div class="col-md-9 col-lg-7 col-xl-6">
                        <div class="guide">
                            <div class="guide-logo">
                                <img height="159" width="159" src="../assets/img/staking/cosmos-logo.jpg"
                                     srcset="../assets/img/staking/cosmos-logo@2x.jpg 2x, ../assets/img/staking/cosmos-logo@3x.jpg 3x"
                                     alt="">
                            </div>
                            <div class="guide-body">
                                <h5 class="guide-title">Cosmos</h5>
                                <p class="guide-text">
                                    Read Delegator's Guide
                                </p>
                                <a href="https://cosmos.network/docs/gaia/delegator-guide-cli.html#table-of-contents"
                                   target="_blank" class="btn btn-primary btn-lg" rel="noopener">Cosmos guides</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-5 col-xl-6">
                        <div class="box d-flex flex-column justify-content-center align-items-center">

                            <h4>1:1 delegation help</h4>

                            <p>
                                If you need more guidance in delegation process, we are here for you.
                                Email us at
                            </p>

                            <a href="mailto:support@ztake.org" class="pt-4"><i class="icon icon-message"></i>
                                support@ztake.org</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="history">
            <div class="container">
                <h3>Proposal voting hitory</h3>
                <div v-if="porposals.length > 0" class="history">
                    <div class="row history-row" v-for="(p,index) in porposals" :key="index">
                        <div class="col-history id col-6 col-md-4 col-lg-2">
                            <h5>Porposal id</h5>
                            <p>{{p.id}}</p>
                        </div>
                        <div class="col-history title col-6 col-md-4 col-lg-2">
                            <h5>Title</h5>
                            <p>{{p.title}}</p>
                        </div>
                        <div class="col-history vote col-6 col-md-4 col-lg-2">
                            <h5>How i voted</h5>
                            <p><i class="icon" :class="p.vote.icon"></i>{{p.vote.text}}</p>
                        </div>
                        <div class="col-history abs col-6 col-md-4 col-lg-2">
                            <h5>Abstain</h5>
                            <p>{{p.abstain}}</p>
                        </div>
                        <div class="col-history expl col-12 col-md-8 col-lg-4">
                            <h5>Explanation</h5>
                            <p>{{p.explanation}}</p>
                        </div>
                    </div>
                </div>
                <div class="box" v-else>
                    No proposals have been submitted to the network yet.
                </div>
            </div>
        </section>
        <Newsletter/>
    </div>
</template>

<script>
import Newsletter from '@/components/Newsletter.vue'
import stakingCommand from '@/components/stakingCommand.vue'

export default {
    components: {
        Newsletter,
        stakingCommand
    },
    data() {
        return {
            porposals: [
                // {
                //     id: '14682008462',
                //     title: 'Lorem ipsum',
                //     vote: {
                //         icon: 'icon-check',
                //         text: 'yes'
                //     },
                //     abstain: '26',
                //     explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                // },
                // {
                //     id: '14682008461',
                //     title: 'Lorem ipsum',
                //     vote: {
                //         icon: 'icon-cancel',
                //         text: 'no'
                //     },
                //     abstain: '12',
                //     explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                // },
                // {
                //     id: '14682008462',
                //     title: 'Lorem ipsum',
                //     vote: {
                //         icon: 'icon-check',
                //         text: 'yes'
                //     },
                //     abstain: '26',
                //     explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                // },
                // {
                //     id: '14682008461',
                //     title: 'Lorem ipsum',
                //     vote: {
                //         icon: 'icon-cancel',
                //         text: 'no'
                //     },
                //     abstain: '12',
                //     explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                // }
            ]
        }
    },
    head() {
        return {
            title: 'Staking - ZTAKE',
            meta: [
                {hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Staking - ZTAKE'},
            ]
        }
    }
}
</script>