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
                                <div>{{atoms}}</div>
                                <p>$Atoms at stake</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="metric">
                            <div class="metric-content">
                                <div>4<span class="percent">%</span></div>
                                <p>Validator Fee</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="metric">
                            <div class="metric-content">
                                <div><span class="tilde">~</span>7.56<span class="percent">%</span></div>
                                <p>Current rate of inflation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="metric">
                            <div class="metric-content">
                                <div> 6K</div>
                                <p>Self-bonded $Atoms</p>
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
                    There are currently two security-audited guide available: Official Delegators guide to use CLI or web-wallet.
                </p>
                <div class="row guides justify-content-md-center pt-5">
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
                                    This document explains delegators how to interact with the Cosmos Hub through the Command-Line Interface (CLI).
                                </p>
                                <a href="https://cosmos.network/docs/gaia/delegator-guide-cli.html#table-of-contents"
                                   target="_blank" class="btn btn-primary btn-lg" rel="noopener">Cosmos guides</a>
                            </div>
                        </div>
                    </div>
                   <div class="col-md-9 col-lg-7 col-xl-6">
                        <div class="guide">
                            <div class="guide-logo">
                                <img height="159" width="159" src="../assets/img/staking/lunie-logo.png"
                                     alt="">
                            </div>
                            <div class="guide-body">
                                <h5 class="guide-title">Lunie</h5>
                                <p class="guide-text">
                                    The official web-wallet and UI for the Cosmos Hub.
                                </p>
                                <a href="https://blog.cosmos.network/lunie-is-live-196de97b6697"
                                   target="_blank" class="btn btn-primary btn-lg" rel="noopener">Lunie guide</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-5 col-xl-6">
                        <div class="box d-flex flex-column justify-content-center align-items-center">

                            <h4>1:1 Delegation Help</h4>

                            <p>
                                If you need more guidance in the delegation process, we are here for you.
                                Email us at <a href="mailto:support@ztake.org" class="pt-4"><i class="icon icon-message"></i>
                                support@ztake.org</a>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="history">
            <div class="container">
                <h3>Proposal voting history</h3>
                <div v-if="porposals.length > 0" class="history">
                    <div class="row history-row" v-for="(p,index) in porposals" :key="index">
                        <div class="col-history id col-sm-4 col-md-3 col-lg-2">
                            <h5>Proposal id</h5>
                            <p>{{p.id}}</p>
                        </div>
                        <div class="col-history title col-sm-8 col-md-6 col-lg-4">
                            <h5>Title</h5>
                            <p>{{p.title}}</p>
                        </div>
                        <div class="col-history vote col-sm-4 col-md-3 col-lg-2">
                            <h5>Our Vote</h5>
                            <p><i class="icon" :class="p.vote.icon"></i>{{p.vote.text}}</p>
                        </div>
                        <div class="col-history expl col-sm-8 col-md-8 col-lg-4">
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
const numeral = require('numeral')
import Newsletter from '@/components/Newsletter.vue'
import stakingCommand from '@/components/stakingCommand.vue'

export default {
    components: {
        Newsletter,
        stakingCommand
    },
    data() {
        return {
            atoms: '1.71m',
            porposals: [
                 {
                     id: '1',
                     title: 'Adjustment of blocks_per_year to come aligned with actual block time',
                     vote: {
                         icon: 'icon-check',
                         text: 'yes'
                     },
                     explanation: 'Average block time is indeed greater than theoretical 5seconds. Hence, the adjustment is fare.'
                 },
                 {
                     id: '2',
                     title: 'ATOM Transfer Enablement',
                     vote: {
                         icon: 'icon-check',
                         text: 'yes'
                     },
                     explanation: 'The network is stable and ready for the Phase II.',
                 },
                 {
                     id: '2*',
                     title: 'ATOM Transfer Enablement',
                     vote: {
                         icon: 'icon-cancel',
                         text: 'no with veto'
                     },
                     explanation: 'Updated vote following tendermint recommendation.',
                 },
                  {
                     id: '3',
                     title: 'ATOM Transfer Enablement v2',
                     vote: {
                         icon: 'icon-check',
                         text: 'yes'
                     },
                     explanation: 'We are against expedited rule but support transfer enablement.',
                 },
                 {
                     id: '4',
                     title: 'Proposal for issuance of fungible tokens directly on the Cosmos Hub',
                     vote: {
                         icon: 'icon-check',
                         text: 'yes'
                     },
                     explanation: 'In our point of view, the network and stakeholders would benefit from the additional functionality that allows a form of "permissioned" token issuance.',
                 },
                 {
                     id: '5',
                     title: 'Expedited Cosmos Upgrade Proposal',
                     vote: {
                         icon: 'icon-check',
                         text: 'yes'
                     },
                     explanation: '',
                 },
                 {
                     id: '6',
                     title: 'Activate the Community Pool',
                     vote: {
                         icon: 'icon-check',
                         text: 'yes'
                     },
                     explanation: 'It is about time, we start supporting ecosystem expantion via community tax pool allocations.',
                 },
                 {
                     id: '7',
                     title: 'Activate the Community Pool',
                     vote: {
                         icon: 'icon-check',
                         text: 'yes'
                     },
                     explanation: 'It is about time, we start supporting ecosystem expantion via community tax pool allocations.',
                 }
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
    },
    methods: {
      async getDelegatedAtoms({ app }) {
        try {
          const data = await app.$axios.$get(`https://sgapiv2.certus.one/v1/validator/${process.env.COSMOS_VAL}`)
          this.atoms = numeral(data.validator.details.tokens).divide(1000000).format('0.00a')
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e)
        }
      }
    },    
    mounted: async function () {
      await this.getDelegatedAtoms({ app: this })
    }
}
</script>