<template>
  <div class="home">
    <section id="intro">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>
              Staking crypto tokens made simple
            </h1>
            <h2>
              Choose us to be your validator!
            </h2>
            <p>
              We are a team of tech-savvy blockchain developers and enthusiasts who run nodes on PoS and PoA
              blockchains. We took care all of the technical setup needed so that you could easily stake your
              assets.
            </p>
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <img src="../assets/img/intro.svg" class="img-fluid" alt="">
          </div>
        </div>

        <a href="https://hubble.figment.network/chains/cosmoshub-1/validators/42D6705E716616B4A5442BDAA050B7C6E9FDDE43" class="btn btn-primary btn-lg" target="_blank" rel="nofollow">Delegate Now</a>
        <staking-command/>
      </div>
    </section>
    <section id="about">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 order-2 order-lg-0">
            <img src="../assets/img/logo.svg" width="215" height="200" class="d-inline-block align-top" alt="">
          </div>
          <div class="col-lg-6 order-0 order-lg-2">
            <h3>About Us</h3>

            <p>Ztake is a unique team of highly trained professionals specialized in operating validator nodes
              and based in Seattle, Washington. We have a proven track record as an infrastructure operator
              for PoA and PoS networks.
              We believe that these technologies will form the next significant chapter
              in the blockchain revolution. Our mission is to help retail and institutional investors stake
              their crypto assets and earn rewards while we do
              all the hard work.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <div class="container">
        <h3>Portfolio</h3>

        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="card">
              <div class="card-logo polkadot">
                <img height="20" width="80" src="../assets/img/portfolio/polkadot.png" srcset="../assets/img/portfolio/polkadot@2x.png 2x, ../assets/img/portfolio/polkadot@3x.png 3x" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">Polkadot</h5>
                <div class="card-status">
                  <div class="status-h">Status</div>
                  <div class="status">Testnet</div>
                </div>
              </div>
              <!--<a href="#" class="btn btn-card">
                  <img width="12" height="12" src="../assets/img/portfolio/arrow.svg" alt="">
              </a> -->
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <a href="https://cosmos.bigdipper.live/validator/42D6705E716616B4A5442BDAA050B7C6E9FDDE43" target="_blank" rel="nofollow">
              <div class="card">
                <div class="card-logo cosmos">
                  <img height="14" width="80" src="../assets/img/portfolio/cosmos.png" srcset="../assets/img/portfolio/cosmos@2x.png 2x, ../assets/img/portfolio/cosmos@3x.png 3x" alt="">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Cosmos</h5>
                  <div class="card-status">
                    <div class="status-h">Status</div>
                    <div class="status">Mainnet</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="card">
              <div class="card-logo">
                <img height="90" width="90" src="../assets/img/portfolio/terra.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">Terra</h5>
                <div class="card-status">
                  <div class="status-h">Status</div>
                  <div class="status">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <a href="https://validators.poa.network/poa-dapps-validators" target="_blank" rel="nofollow">
              <div class="card">
                <div class="card-logo poa">
                  <img height="20" width="66" src="../assets/img/portfolio/poa.png" srcset="../assets/img/portfolio/poa@2x.png 2x, ../assets/img/portfolio/poa@3x.png 3x" alt="">
                </div>
                <div class="card-body">
                  <h5 class="card-title">POA</h5>
                  <div class="card-status">
                    <div class="status-h">Status</div>
                    <div class="status">Mainnet</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="card">
              <div class="card-logo">
                <img height="90" width="90" src="../assets/img/portfolio/ethereum2.png" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">ETH 2.0</h5>
                <div class="card-status">
                  <div class="status-h">Status</div>
                  <div class="status">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <a href="https://t.me/staking_atoms" target="_blank" rel="nofollow">
              <div class="card">
                <div class="card-logo">
                  <img height="46" width="46" src="../assets/img/portfolio/plus.svg" alt="">
                </div>
                <div class="card-body">
                  <h5 class="card-title">Contact Us</h5>
                  <p class="card-text">
                    if you’re looking for a validator
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="reasons">
      <div class="container">
        <h3>6 Reasons to Delegate to ZTAKE.ORG</h3>

        <div class="row">
          <div class="col-reason col-md-6 col-lg-4">
            <div class="r-icon">
              <img height="90" width="73" src="../assets/img/high-security-standarts.svg" alt="">
            </div>
            <h4>
              High-security standards
            </h4>
            <p>
              Our infrastructure consists of high-performance servers, 
              enhanced DDoS protection and would continue to evolve as the network matures.
            </p>
          </div>
          <div class="col-reason col-md-6 col-lg-4">
            <div class="r-icon">
              <img height="90" width="82" src="../assets/img/blockchain-expetise.svg" alt="">
            </div>
            <h4>
              Blockchain Expertise
            </h4>
            <p>
              We are tech-savvy former engineers with a deep technical understanding
              of PoS and POA consensus focused
              on Security and Quality
              of the service provided.
            </p>
          </div>
          <div class="col-reason col-md-6 col-lg-4">
            <div class="r-icon">
              <img height="90" width="97" src="../assets/img/education.svg" alt="">
            </div>
            <h4>
              Education
            </h4>
            <p>
              We are here to help you navigate the complex world of PoS system. Check out our step by step delegation guide and glossary.
            </p>
          </div>
          <div class="col-reason col-md-6 col-lg-4">
            <div class="r-icon">
              <img height="90" width="88" src="../assets/img/aligment.svg" alt="">
            </div>
            <h4>
              Alignment
            </h4>
            <p>
              We stake tokens alongside our
              delegators to have skin in a game
              and to demonstrate our long-term interest in the networks. All payouts are calculated and processed automatically by the network, so you receive your portion of reward immediately
              once it is available.
            </p>
          </div>
          <div class="col-reason pb-0 col-md-6 col-lg-4">
            <div class="r-icon">
              <img height="90" width="73" src="../assets/img/transparent.svg" alt="">
            </div>
            <h4>
              Transparency
            </h4>
            <p>
              We are committed being transparent about our on-chain governance decision making as well
              as our commission change rate schedule.
            </p>
          </div>
          <div class="col-reason pb-0 col-md-6 col-lg-4">
            <div class="r-icon">
              <img height="70" width="90" src="../assets/img/high-intagrity.svg" alt="">
            </div>
            <h4>
              High Integrity
            </h4>
            <p>
              We act independently with the utmost integrity. We do not tolerate collusion between entities in the ecosystem
              and will help guard the network against malicious cartels.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="container">
        <h3>Technical Features</h3>

        <div class="row pt-0 d-flex align-items-center">
          <div class="col-lg-6 order-2 order-lg-0 d-flex justify-content-center align-items-center">
            <img src="../assets/img/cosmos-validator.svg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 order-0 order-lg-2">
            <h4>Cosmos validator</h4>

            <p>
              We are operating one of the genesis validators for the cosmos network
              and have been participating in testnet ecosystem since gaia-5000.
              We were one of the 27 validators (out of 200) who has never been
              jailed during the Game of Stakes. Our Validator node can’t be accessed
              from the internet and protected by layers of private and public sentries
              located around the world.
            </p>
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col-lg-6">
            <h4>Infrastructure</h4>

            <p>
              Best-in-class network connectivity for speed and throughput.
              Automatic system-level backups at regular intervals.
              Redundant validator server setup is available to switch at the moment’s notice.
              Multiple data replications across different racks, reducing the chances
              of data loss in case of hardware failure.
              All of the access points protected by multi-factor authentication (MFA).
            </p>
            <p>
              Key management.
            </p>
            <p>
              We plan to utilize multisig wallet setup as well as recurring key rotation once
              functionality becomes available.
            </p>
          </div>
          <div class="col-lg-6 d-flex justify-content-center align-items-center">
            <img src="../assets/img/infrastructure.svg" class="img-fluid" alt="">
          </div>
        </div>
        <div class="row pb-0 d-flex align-items-center">
          <div class="col-lg-6 order-2 order-lg-0 d-flex justify-content-center align-items-center">
            <img src="../assets/img/delegation.png" srcset="../assets/img/delegation@2x.png 2x, ../assets/img/delegation@3x.png 3x" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 order-0 order-lg-2">
            <h4>Delegation</h4>

            <p>
              After the Cosmos mainnet launch, you will be able to stake atoms
              with our validator as a third-party delegator:
            </p>
            <p>
              Atoms Delegated: {{atoms}}
            </p>
            <p>
              Commission rate: 4%
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>Contact us</h3>
            <p>
              Reach out to us if you have any questions
              or need help with delegation instructions.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="row justify-content-end mailbox">
              <div class="col-lg-8">
                <!--<form>
                    <label class="input-group" for="inputName">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="icon icon-user"></i>
                            </div>
                        </div>
                        <input type="text" class="form-control" id="inputName" placeholder="Your name" required>
                    </label>
                    <label class="input-group" for="inputEmail">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="icon icon-message"></i>
                            </div>
                        </div>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Your email" required>
                    </label> -->
                <a href="https://t.me/cosmos_ztake" target="_blank" rel="nofollow">
                  <button type="button" class="btn btn-primary btn-lg"> Message us </button>
                </a>
                <!--</form>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import stakingCommand from '@/components/stakingCommand.vue'

export default {
  components: {
    stakingCommand
  },
  data() {
    return {
      atoms: '0'
    }
  },
  methods: {
    async getDelegatedAtoms({ app }) {
      try {
        const data = await app.$axios.$get(`https://api.cosmostation.io/v1/staking/validator/${process.env.COSMOS_VAL}`)
        return {
          atoms: new Intl.NumberFormat('en-US').format(Number(data.delegator_shares)/1000000)
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
        return {
          atoms: '1,259,853'
        }
      }
    }
  },
  async asyncData() {
    return {
      atoms: '1,259,853'
    }
  },
  mounted: async function () {
    const { atoms } = await this.getDelegatedAtoms({ app: this })
    this.atoms = atoms
  }
}
</script>